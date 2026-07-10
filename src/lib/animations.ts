// Algorithm animation catalog. Each animation is a sequence of frames; a frame
// describes the array state plus which indices to highlight and a caption. The
// AnimationPlayer steps through frames — no proprietary assets, all authored.

export type Highlight = "compare" | "swap" | "sorted" | "active" | "match";

export interface Frame {
  values: number[];
  // index -> highlight role
  marks?: Record<number, Highlight>;
  caption: string;
}

export interface Animation {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  icon: string;
  frames: Frame[];
}

// ---- Bubble Sort -----------------------------------------------------------
function bubbleSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const frames: Frame[] = [
    { values: [...a], caption: "Start: unsorted array." },
  ];
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      const sorted: Record<number, Highlight> = {};
      for (let k = n - i; k < n; k++) sorted[k] = "sorted";
      frames.push({
        values: [...a],
        marks: { [j]: "compare", [j + 1]: "compare", ...sorted },
        caption: `Compare index ${j} and ${j + 1}.`,
      });
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        frames.push({
          values: [...a],
          marks: { [j]: "swap", [j + 1]: "swap", ...sorted },
          caption: `Out of order → swap.`,
        });
      }
    }
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Binary Search ---------------------------------------------------------
function binarySearchFrames(input: number[], target: number): Frame[] {
  const a = [...input].sort((x, y) => x - y);
  const frames: Frame[] = [
    { values: [...a], caption: `Search for ${target} in a sorted array.` },
  ];
  let lo = 0;
  let hi = a.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    frames.push({
      values: [...a],
      marks: { [lo]: "active", [hi]: "active", [mid]: "compare" },
      caption: `lo=${lo}, hi=${hi} → check mid=${mid} (value ${a[mid]}).`,
    });
    if (a[mid] === target) {
      frames.push({
        values: [...a],
        marks: { [mid]: "match" },
        caption: `Found ${target} at index ${mid}.`,
      });
      return frames;
    }
    if (a[mid] < target) {
      lo = mid + 1;
      frames.push({
        values: [...a],
        marks: { [mid]: "compare" },
        caption: `${a[mid]} < ${target} → discard left half.`,
      });
    } else {
      hi = mid - 1;
      frames.push({
        values: [...a],
        marks: { [mid]: "compare" },
        caption: `${a[mid]} > ${target} → discard right half.`,
      });
    }
  }
  frames.push({ values: [...a], caption: `${target} not found.` });
  return frames;
}

// ---- Two Pointers (reverse) ------------------------------------------------
function reverseFrames(input: number[]): Frame[] {
  const a = [...input];
  const frames: Frame[] = [
    { values: [...a], caption: "Reverse in place with two pointers." },
  ];
  let i = 0;
  let j = a.length - 1;
  while (i < j) {
    frames.push({
      values: [...a],
      marks: { [i]: "active", [j]: "active" },
      caption: `Pointers at ${i} and ${j}.`,
    });
    [a[i], a[j]] = [a[j], a[i]];
    frames.push({
      values: [...a],
      marks: { [i]: "swap", [j]: "swap" },
      caption: `Swap and move inward.`,
    });
    i++;
    j--;
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Reversed.",
  });
  return frames;
}

export const ANIMATIONS: Animation[] = [
  {
    slug: "bubble-sort",
    title: "Bubble Sort",
    category: "Sorting",
    blurb: "Repeatedly swap adjacent out-of-order pairs until sorted.",
    icon: "ArrowUpDown",
    frames: bubbleSortFrames([5, 2, 8, 1, 9, 3]),
  },
  {
    slug: "binary-search",
    title: "Binary Search",
    category: "Searching",
    blurb: "Halve the search interval each comparison.",
    icon: "Search",
    frames: binarySearchFrames([1, 3, 5, 7, 9, 11, 13], 9),
  },
  {
    slug: "reverse-array",
    title: "Reverse an Array",
    category: "Two Pointers",
    blurb: "Swap ends and converge toward the middle.",
    icon: "MoveHorizontal",
    frames: reverseFrames([1, 2, 3, 4, 5, 6]),
  },
];

export function getAnimation(slug: string) {
  return ANIMATIONS.find((x) => x.slug === slug);
}
