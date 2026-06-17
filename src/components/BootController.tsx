"use client";

import { useState } from "react";
import BootScreen from "@/components/BootScreen";

export default function BootController() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onFinish={() => setBooted(true)} />}
    </>
  );
}
