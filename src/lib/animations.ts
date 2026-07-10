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

// ---- Selection Sort --------------------------------------------------------
function selectionSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: "Selection sort: repeatedly pick the smallest remaining value." },
  ];
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    const sorted: Record<number, Highlight> = {};
    for (let k = 0; k < i; k++) sorted[k] = "sorted";
    frames.push({
      values: [...a],
      marks: { ...sorted, [i]: "active", [min]: "compare" },
      caption: `Assume index ${i} (value ${a[i]}) is the minimum.`,
    });
    for (let j = i + 1; j < n; j++) {
      frames.push({
        values: [...a],
        marks: { ...sorted, [i]: "active", [min]: "compare", [j]: "compare" },
        caption: `Compare ${a[j]} against current min ${a[min]}.`,
      });
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
      frames.push({
        values: [...a],
        marks: { ...sorted, [i]: "swap", [min]: "swap" },
        caption: `Swap the minimum into index ${i}.`,
      });
    }
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Insertion Sort --------------------------------------------------------
function insertionSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: "Insertion sort: grow a sorted prefix one value at a time." },
  ];
  for (let i = 1; i < n; i++) {
    const key = a[i];
    frames.push({
      values: [...a],
      marks: { [i]: "active" },
      caption: `Take value ${key} and insert it into the sorted prefix.`,
    });
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      frames.push({
        values: [...a],
        marks: { [j]: "compare", [j + 1]: "swap" },
        caption: `${a[j]} > ${key} → shift it one slot right.`,
      });
      j--;
    }
    a[j + 1] = key;
    frames.push({
      values: [...a],
      marks: { [j + 1]: "sorted" },
      caption: `Drop ${key} into index ${j + 1}.`,
    });
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Quick Sort (Lomuto partition) -----------------------------------------
function quickSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const frames: Frame[] = [
    { values: [...a], caption: "Quick sort: partition around a pivot, then recurse each side." },
  ];
  const done: Record<number, Highlight> = {};

  function partition(lo: number, hi: number): number {
    const pivot = a[hi];
    frames.push({
      values: [...a],
      marks: { ...done, [hi]: "active" },
      caption: `Pivot = ${pivot} (index ${hi}). Push smaller values left.`,
    });
    let i = lo;
    for (let j = lo; j < hi; j++) {
      frames.push({
        values: [...a],
        marks: { ...done, [hi]: "active", [i]: "active", [j]: "compare" },
        caption: `Is ${a[j]} < pivot ${pivot}?`,
      });
      if (a[j] < pivot) {
        [a[i], a[j]] = [a[j], a[i]];
        frames.push({
          values: [...a],
          marks: { ...done, [hi]: "active", [i]: "swap", [j]: "swap" },
          caption: `Yes → swap ${a[i]} into the left region.`,
        });
        i++;
      }
    }
    [a[i], a[hi]] = [a[hi], a[i]];
    done[i] = "sorted";
    frames.push({
      values: [...a],
      marks: { ...done },
      caption: `Place pivot at index ${i} — its final sorted position.`,
    });
    return i;
  }

  function sort(lo: number, hi: number) {
    if (lo > hi) return;
    if (lo === hi) {
      done[lo] = "sorted";
      return;
    }
    const p = partition(lo, hi);
    sort(lo, p - 1);
    sort(p + 1, hi);
  }

  sort(0, a.length - 1);
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Merge Sort ------------------------------------------------------------
function mergeSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const frames: Frame[] = [
    { values: [...a], caption: "Merge sort: split in half, sort each half, then merge." },
  ];

  function merge(lo: number, mid: number, hi: number) {
    const left = a.slice(lo, mid + 1);
    const right = a.slice(mid + 1, hi + 1);
    const region: Record<number, Highlight> = {};
    for (let k = lo; k <= hi; k++) region[k] = "active";
    frames.push({
      values: [...a],
      marks: { ...region },
      caption: `Merge the sorted segment [${lo}..${hi}].`,
    });
    let i = 0;
    let j = 0;
    let k = lo;
    while (i < left.length && j < right.length) {
      a[k] = left[i] <= right[j] ? left[i++] : right[j++];
      frames.push({
        values: [...a],
        marks: { ...region, [k]: "compare" },
        caption: `Take the smaller front value → write ${a[k]} at index ${k}.`,
      });
      k++;
    }
    while (i < left.length) {
      a[k] = left[i++];
      frames.push({ values: [...a], marks: { ...region, [k]: "compare" }, caption: `Copy remaining ${a[k]}.` });
      k++;
    }
    while (j < right.length) {
      a[k] = right[j++];
      frames.push({ values: [...a], marks: { ...region, [k]: "compare" }, caption: `Copy remaining ${a[k]}.` });
      k++;
    }
  }

  function sort(lo: number, hi: number) {
    if (lo >= hi) return;
    const mid = Math.floor((lo + hi) / 2);
    sort(lo, mid);
    sort(mid + 1, hi);
    merge(lo, mid, hi);
  }

  sort(0, a.length - 1);
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Linear Search ---------------------------------------------------------
function linearSearchFrames(input: number[], target: number): Frame[] {
  const a = [...input];
  const frames: Frame[] = [
    { values: [...a], caption: `Linear search: scan left to right for ${target}.` },
  ];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === target) {
      frames.push({ values: [...a], marks: { [i]: "match" }, caption: `Found ${target} at index ${i}.` });
      return frames;
    }
    frames.push({
      values: [...a],
      marks: { [i]: "compare" },
      caption: `Index ${i}: ${a[i]} ≠ ${target}, keep scanning.`,
    });
  }
  frames.push({ values: [...a], caption: `${target} is not in the array.` });
  return frames;
}

// ---- Two Sum (sorted, two pointers) ----------------------------------------
function twoSumSortedFrames(input: number[], target: number): Frame[] {
  const a = [...input].sort((x, y) => x - y);
  const frames: Frame[] = [
    { values: [...a], caption: `Sorted array — find two values summing to ${target}.` },
  ];
  let i = 0;
  let j = a.length - 1;
  while (i < j) {
    const sum = a[i] + a[j];
    frames.push({
      values: [...a],
      marks: { [i]: "active", [j]: "active" },
      caption: `${a[i]} + ${a[j]} = ${sum}.`,
    });
    if (sum === target) {
      frames.push({
        values: [...a],
        marks: { [i]: "match", [j]: "match" },
        caption: `Target ${target} found at indices ${i} and ${j}.`,
      });
      return frames;
    }
    if (sum < target) {
      frames.push({ values: [...a], marks: { [i]: "compare", [j]: "active" }, caption: `Sum ${sum} < ${target} → move left pointer right.` });
      i++;
    } else {
      frames.push({ values: [...a], marks: { [i]: "active", [j]: "compare" }, caption: `Sum ${sum} > ${target} → move right pointer left.` });
      j--;
    }
  }
  frames.push({ values: [...a], caption: `No pair sums to ${target}.` });
  return frames;
}

// ---- Container With Most Water ---------------------------------------------
function containerFrames(input: number[]): Frame[] {
  const a = [...input];
  const frames: Frame[] = [
    { values: [...a], caption: "Bars are walls — find the widest × tallest container." },
  ];
  let i = 0;
  let j = a.length - 1;
  let best = 0;
  while (i < j) {
    const area = Math.min(a[i], a[j]) * (j - i);
    best = Math.max(best, area);
    frames.push({
      values: [...a],
      marks: { [i]: "active", [j]: "active" },
      caption: `Width ${j - i} × height ${Math.min(a[i], a[j])} = ${area}. Best: ${best}.`,
    });
    if (a[i] < a[j]) i++;
    else j--;
  }
  frames.push({ values: [...a], caption: `Maximum water area = ${best}.` });
  return frames;
}

// ---- Dutch National Flag ---------------------------------------------------
function dutchFlagFrames(input: number[]): Frame[] {
  const a = [...input]; // values are 1, 2, 3 — three "colors"
  const frames: Frame[] = [
    { values: [...a], caption: "Sort three colors (1, 2, 3) in a single pass." },
  ];
  let low = 0;
  let mid = 0;
  let high = a.length - 1;
  while (mid <= high) {
    frames.push({
      values: [...a],
      marks: { [low]: "active", [mid]: "compare", [high]: "active" },
      caption: `Inspect ${a[mid]} at mid=${mid} (low=${low}, high=${high}).`,
    });
    if (a[mid] === 1) {
      [a[low], a[mid]] = [a[mid], a[low]];
      frames.push({ values: [...a], marks: { [low]: "swap", [mid]: "swap" }, caption: `It's a 1 → swap to the low region.` });
      low++;
      mid++;
    } else if (a[mid] === 3) {
      [a[mid], a[high]] = [a[high], a[mid]];
      frames.push({ values: [...a], marks: { [mid]: "swap", [high]: "swap" }, caption: `It's a 3 → swap to the high region.` });
      high--;
    } else {
      frames.push({ values: [...a], marks: { [mid]: "sorted" }, caption: `It's a 2 → already centered, advance mid.` });
      mid++;
    }
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: colors are grouped 1 → 2 → 3.",
  });
  return frames;
}

// ---- Sliding Window (max fixed-size sum) -----------------------------------
function maxWindowFrames(input: number[], k: number): Frame[] {
  const a = [...input];
  const window = (start: number): Record<number, Highlight> => {
    const m: Record<number, Highlight> = {};
    for (let x = start; x < start + k; x++) m[x] = "active";
    return m;
  };
  const frames: Frame[] = [
    { values: [...a], caption: `Sliding window of size ${k}: find the largest window sum.` },
  ];
  let sum = 0;
  for (let i = 0; i < k; i++) sum += a[i];
  let best = sum;
  let bestStart = 0;
  frames.push({ values: [...a], marks: window(0), caption: `First window [0..${k - 1}] sum = ${sum}.` });
  for (let i = k; i < a.length; i++) {
    sum += a[i] - a[i - k];
    if (sum > best) {
      best = sum;
      bestStart = i - k + 1;
    }
    frames.push({
      values: [...a],
      marks: { ...window(i - k + 1), [i - k]: "swap", [i]: "compare" },
      caption: `Slide: drop ${a[i - k]}, add ${a[i]} → sum ${sum}. Best ${best}.`,
    });
  }
  frames.push({
    values: [...a],
    marks: window(bestStart),
    caption: `Largest window sum = ${best}, starting at index ${bestStart}.`,
  });
  return frames;
}

// ---- Prefix Sum ------------------------------------------------------------
function prefixSumFrames(input: number[]): Frame[] {
  const a = [...input];
  const prefix: number[] = [];
  const frames: Frame[] = [
    { values: [...a], caption: "Build a prefix-sum array for O(1) range-sum queries." },
  ];
  let run = 0;
  for (let i = 0; i < a.length; i++) {
    run += a[i];
    prefix.push(run);
    const built: Record<number, Highlight> = {};
    for (let x = 0; x < i; x++) built[x] = "sorted";
    frames.push({
      values: [...prefix, ...a.slice(prefix.length)],
      marks: { ...built, [i]: "compare" },
      caption:
        i === 0
          ? `prefix[0] = ${a[0]}.`
          : `prefix[${i}] = prefix[${i - 1}] + ${a[i]} = ${run}.`,
    });
  }
  frames.push({
    values: [...prefix],
    marks: Object.fromEntries(prefix.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Now sum(l..r) = prefix[r] − prefix[l−1] in constant time.",
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
    slug: "selection-sort",
    title: "Selection Sort",
    category: "Sorting",
    blurb: "Find the smallest value each pass and place it in order.",
    icon: "ArrowDownWideNarrow",
    frames: selectionSortFrames([7, 3, 9, 2, 6, 4]),
  },
  {
    slug: "insertion-sort",
    title: "Insertion Sort",
    category: "Sorting",
    blurb: "Grow a sorted prefix, inserting each value into place.",
    icon: "ListOrdered",
    frames: insertionSortFrames([6, 2, 8, 3, 7, 1]),
  },
  {
    slug: "quick-sort",
    title: "Quick Sort",
    category: "Sorting",
    blurb: "Partition around a pivot, then recurse on each side.",
    icon: "Split",
    frames: quickSortFrames([8, 3, 7, 4, 9, 2, 6]),
  },
  {
    slug: "merge-sort",
    title: "Merge Sort",
    category: "Sorting",
    blurb: "Split in half, sort each half, then merge them back.",
    icon: "Combine",
    frames: mergeSortFrames([5, 2, 9, 1, 6, 3]),
  },
  {
    slug: "dutch-national-flag",
    title: "Dutch National Flag",
    category: "Sorting",
    blurb: "Sort three categories in one linear pass with three pointers.",
    icon: "Shuffle",
    frames: dutchFlagFrames([3, 1, 2, 3, 1, 2, 1, 3]),
  },
  {
    slug: "binary-search",
    title: "Binary Search",
    category: "Searching",
    blurb: "Halve the search interval on every comparison.",
    icon: "Search",
    frames: binarySearchFrames([1, 3, 5, 7, 9, 11, 13], 9),
  },
  {
    slug: "linear-search",
    title: "Linear Search",
    category: "Searching",
    blurb: "Scan every element until the target is found.",
    icon: "ScanSearch",
    frames: linearSearchFrames([4, 8, 2, 7, 5, 1, 9], 7),
  },
  {
    slug: "reverse-array",
    title: "Reverse an Array",
    category: "Two Pointers",
    blurb: "Swap ends and converge toward the middle.",
    icon: "MoveHorizontal",
    frames: reverseFrames([1, 2, 3, 4, 5, 6]),
  },
  {
    slug: "two-sum-sorted",
    title: "Two Sum (Sorted)",
    category: "Two Pointers",
    blurb: "Move inward from both ends to hit a target sum.",
    icon: "Target",
    frames: twoSumSortedFrames([2, 4, 6, 8, 11, 15], 14),
  },
  {
    slug: "container-with-most-water",
    title: "Container With Most Water",
    category: "Two Pointers",
    blurb: "Shrink from the shorter wall to maximize trapped area.",
    icon: "Waves",
    frames: containerFrames([3, 7, 2, 8, 5, 9, 4]),
  },
  {
    slug: "max-sum-subarray",
    title: "Sliding Window Sum",
    category: "Sliding Window",
    blurb: "Slide a fixed window to find the maximum window sum.",
    icon: "GalleryHorizontal",
    frames: maxWindowFrames([2, 5, 1, 8, 3, 7, 4], 3),
  },
  {
    slug: "prefix-sum",
    title: "Prefix Sum",
    category: "Prefix Sum",
    blurb: "Precompute cumulative sums for constant-time range queries.",
    icon: "Sigma",
    frames: prefixSumFrames([3, 5, 2, 6, 4]),
  },
];

export function getAnimation(slug: string) {
  return ANIMATIONS.find((x) => x.slug === slug);
}
