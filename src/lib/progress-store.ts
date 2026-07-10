"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type CompletionMap = Record<string, boolean>; // key: `${course}/${lesson}`

interface ProgressState {
  completed: CompletionMap;
  toggle: (course: string, lesson: string) => void;
  setDone: (course: string, lesson: string, done: boolean) => void;
  isDone: (course: string, lesson: string) => boolean;
  countForCourse: (course: string) => number;
  reset: (course?: string) => void;
}

const key = (course: string, lesson: string) => `${course}/${lesson}`;

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: {},
      toggle: (course, lesson) =>
        set((state) => {
          const k = key(course, lesson);
          const next = { ...state.completed };
          if (next[k]) delete next[k];
          else next[k] = true;
          return { completed: next };
        }),
      setDone: (course, lesson, done) =>
        set((state) => {
          const k = key(course, lesson);
          const next = { ...state.completed };
          if (done) next[k] = true;
          else delete next[k];
          return { completed: next };
        }),
      isDone: (course, lesson) => !!get().completed[key(course, lesson)],
      countForCourse: (course) =>
        Object.keys(get().completed).filter((k) => k.startsWith(`${course}/`))
          .length,
      reset: (course) =>
        set((state) => {
          if (!course) return { completed: {} };
          const next: CompletionMap = {};
          for (const k of Object.keys(state.completed)) {
            if (!k.startsWith(`${course}/`)) next[k] = state.completed[k];
          }
          return { completed: next };
        }),
    }),
    { name: "codepath-progress" }
  )
);
