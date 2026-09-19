import { NextRequest, NextResponse } from "next/server";

export const revalidate = 3600; // Cache 1 jam di server/Vercel Edge

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const isForce = searchParams.get("force") === "true";

    const url = "https://github.com/users/CMGCool/contributions";
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      // Bypass cache jika user klik tombol refresh manual
      ...(isForce ? { cache: "no-store" } : { next: { revalidate: 3600 } }),
    });

    if (!res.ok) {
      throw new Error(`GitHub responded with ${res.status}`);
    }

    const html = await res.text();

    // 1. Extract total count (e.g. "787 contributions in the last year")
    const totalMatch = html.match(/([0-9,]+)\s+contributions\s+in\s+the\s+last\s+year/);
    let total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 0;

    // 2. Extract tooltips mapping (id -> text)
    const tooltipMap: Record<string, string> = {};
    const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g;
    let tMatch;
    while ((tMatch = tooltipRegex.exec(html)) !== null) {
      tooltipMap[tMatch[1]] = tMatch[2].trim();
    }

    // 3. Extract all contribution days
    const tdRegex1 =
      /<td[^>]*id="([^"]+)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d+)"/g;
    const tdRegex2 =
      /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d+)"/g;

    const days: { date: string; level: number; count: number }[] = [];
    let match;

    let found = false;
    while ((match = tdRegex1.exec(html)) !== null) {
      found = true;
      const id = match[1];
      const date = match[2];
      const level = parseInt(match[3], 10);
      const text = tooltipMap[id] || "";
      const countMatch = text.match(/(\d+)\s+contribution/);
      const count = countMatch ? parseInt(countMatch[1], 10) : 0;
      days.push({ date, level, count });
    }

    if (!found) {
      while ((match = tdRegex2.exec(html)) !== null) {
        const date = match[1];
        const id = match[2];
        const level = parseInt(match[3], 10);
        const text = tooltipMap[id] || "";
        const countMatch = text.match(/(\d+)\s+contribution/);
        const count = countMatch ? parseInt(countMatch[1], 10) : 0;
        days.push({ date, level, count });
      }
    }

    // Sort chronologically by date
    days.sort((a, b) => a.date.localeCompare(b.date));

    if (total === 0 && days.length > 0) {
      total = days.reduce((sum, d) => sum + d.count, 0);
    }

    return NextResponse.json(
      {
        total: { lastYear: total },
        contributions: days,
      },
      {
        headers: isForce
          ? { "Cache-Control": "no-store, max-age=0" }
          : { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200" },
      }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
