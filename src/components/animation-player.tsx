"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Animation, Highlight } from "@/lib/animations";
import { cn } from "@/lib/utils";

const MARK_CLASS: Record<Highlight, string> = {
  compare: "bg-medium/20 border-medium text-medium",
  swap: "bg-hard/20 border-hard text-hard",
  sorted: "bg-primary/20 border-primary text-primary",
  active: "bg-primary/10 border-primary/60 text-foreground",
  match: "bg-primary border-primary text-primary-foreground",
};

export function AnimationPlayer({ animation }: { animation: Animation }) {
  const { frames } = animation;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const frame = frames[index];
  const maxValue = Math.max(...frames.flatMap((f) => f.values));
  const atEnd = index >= frames.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (atEnd) {
      setPlaying(false);
      return;
    }
    timer.current = setTimeout(() => setIndex((i) => i + 1), 900 / speed);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [playing, index, atEnd, speed]);

  const toggle = () => {
    if (atEnd) {
      setIndex(0);
      setPlaying(true);
    } else {
      setPlaying((p) => !p);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card/40 p-6">
      {/* Bars */}
      <div className="flex h-56 items-end justify-center gap-2">
        {frame.values.map((v, i) => {
          const role = frame.marks?.[i];
          return (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={cn(
                  "flex w-full max-w-14 items-start justify-center rounded-t-md border-2 pt-1 text-xs font-semibold transition-all duration-300",
                  role
                    ? MARK_CLASS[role]
                    : "border-border bg-secondary text-muted-foreground"
                )}
                style={{ height: `${(v / maxValue) * 100}%` }}
              >
                {v}
              </div>
              <span className="text-[10px] text-muted-foreground">{i}</span>
            </div>
          );
        })}
      </div>

      {/* Caption */}
      <p className="mt-4 min-h-10 rounded-md bg-secondary/60 px-4 py-2 text-center text-sm">
        {frame.caption}
      </p>

      {/* Scrubber */}
      <input
        type="range"
        min={0}
        max={frames.length - 1}
        value={index}
        onChange={(e) => {
          setPlaying(false);
          setIndex(Number(e.target.value));
        }}
        className="mt-4 w-full accent-primary"
        aria-label="Timeline"
      />

      {/* Controls */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setPlaying(false);
              setIndex(0);
            }}
            aria-label="Restart"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setPlaying(false);
              setIndex((i) => Math.max(0, i - 1));
            }}
            aria-label="Previous step"
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button size="icon" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setPlaying(false);
              setIndex((i) => Math.min(frames.length - 1, i + 1));
            }}
            aria-label="Next step"
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="tabular-nums">
            Step {index + 1} / {frames.length}
          </span>
          <div className="flex gap-1">
            {[0.5, 1, 2].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={cn(
                  "rounded px-1.5 py-0.5 transition-colors",
                  speed === s
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
