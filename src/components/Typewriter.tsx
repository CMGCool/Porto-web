"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  loop?: boolean;
  className?: string;
};

export default function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 40,
  delayBetween = 1200,
  loop = true,
  className,
}: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    const isComplete = !deleting && subIndex === current.length;
    const isEmpty = deleting && subIndex === 0;

    let delay = deleting ? deletingSpeed : typingSpeed;
    if (isComplete) delay = delayBetween;

    const t = setTimeout(() => {
      if (isComplete) {
        setDeleting(true);
        return;
      }
      if (isEmpty) {
        setDeleting(false);
        setWordIndex((i) => {
          const next = i + 1;
          if (next >= words.length) return loop ? 0 : i;
          return next;
        });
        return;
      }
      setSubIndex((i) => i + (deleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(t);
  }, [subIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetween, loop]);

  const text = (words[wordIndex] ?? "").slice(0, subIndex);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block w-[1px] h-5 align-middle bg-current animate-pulse" />
    </span>
  );
}