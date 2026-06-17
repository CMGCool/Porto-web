"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type WinState = "open" | "minimized" | "closed";

export type WindowDef = {
  id: string;
  title: string;
  icon: string;
};

type WindowManagerCtx = {
  windows: Record<string, WinState>;
  register: (def: WindowDef) => void;
  minimize: (id: string) => void;
  close: (id: string) => void;
  restore: (id: string) => void;
  getState: (id: string) => WinState;
  allWindows: WindowDef[];
};

const Ctx = createContext<WindowManagerCtx | null>(null);

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<Record<string, WinState>>({});
  const [defs, setDefs] = useState<WindowDef[]>([]);

  const register = useCallback((def: WindowDef) => {
    setDefs((prev) => {
      if (prev.find((d) => d.id === def.id)) return prev;
      return [...prev, def];
    });
    setWindows((prev) => {
      if (def.id in prev) return prev;
      return { ...prev, [def.id]: "open" };
    });
  }, []);

  const minimize = useCallback((id: string) => {
    setWindows((prev) => ({ ...prev, [id]: "minimized" }));
  }, []);

  const close = useCallback((id: string) => {
    setWindows((prev) => ({ ...prev, [id]: "closed" }));
  }, []);

  const restore = useCallback((id: string) => {
    setWindows((prev) => ({ ...prev, [id]: "open" }));
    // Scroll to the section after a short tick so the DOM is visible
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const getState = useCallback(
    (id: string): WinState => windows[id] ?? "open",
    [windows]
  );

  return (
    <Ctx.Provider
      value={{ windows, register, minimize, close, restore, getState, allWindows: defs }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWindowManager must be used inside WindowManagerProvider");
  return ctx;
}
