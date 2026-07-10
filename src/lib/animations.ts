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

// ---- Heap Sort -------------------------------------------------------------
function heapSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: "Start: build a max-heap from the array." },
  ];

  function siftDown(start: number, end: number, sortedFrom: number) {
    let root = start;
    while (2 * root + 1 <= end) {
      let child = 2 * root + 1;
      const sorted: Record<number, Highlight> = {};
      for (let k = sortedFrom; k < n; k++) sorted[k] = "sorted";
      if (child + 1 <= end && a[child] < a[child + 1]) child++;
      frames.push({
        values: [...a],
        marks: { [root]: "active", [child]: "compare", ...sorted },
        caption: `Compare parent ${root} with its largest child ${child}.`,
      });
      if (a[root] < a[child]) {
        [a[root], a[child]] = [a[child], a[root]];
        frames.push({
          values: [...a],
          marks: { [root]: "swap", [child]: "swap", ...sorted },
          caption: "Parent is smaller → swap it down.",
        });
        root = child;
      } else break;
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) siftDown(i, n - 1, n);
  frames.push({
    values: [...a],
    caption: "Max-heap built: the largest value sits at the root (index 0).",
  });

  for (let end = n - 1; end > 0; end--) {
    [a[0], a[end]] = [a[end], a[0]];
    const sorted: Record<number, Highlight> = {};
    for (let k = end; k < n; k++) sorted[k] = "sorted";
    frames.push({
      values: [...a],
      marks: { [0]: "swap", [end]: "swap", ...sorted },
      caption: `Move the current max to index ${end}.`,
    });
    siftDown(0, end - 1, end);
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Shell Sort ------------------------------------------------------------
function shellSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: "Start: insertion sort across shrinking gaps." },
  ];
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    frames.push({ values: [...a], caption: `Use gap = ${gap}.` });
    for (let i = gap; i < n; i++) {
      const temp = a[i];
      let j = i;
      frames.push({
        values: [...a],
        marks: { [i]: "active", [i - gap]: "compare" },
        caption: `Compare index ${i} with ${i - gap} (gap ${gap}).`,
      });
      while (j >= gap && a[j - gap] > temp) {
        a[j] = a[j - gap];
        frames.push({
          values: [...a],
          marks: { [j]: "swap", [j - gap]: "swap" },
          caption: `Shift the larger value right by ${gap}.`,
        });
        j -= gap;
      }
      a[j] = temp;
    }
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Cocktail Shaker Sort --------------------------------------------------
function cocktailSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: "Start: bubble in both directions each pass." },
  ];
  let lo = 0;
  let hi = n - 1;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = lo; i < hi; i++) {
      frames.push({
        values: [...a],
        marks: { [i]: "compare", [i + 1]: "compare" },
        caption: `Forward → compare ${i} and ${i + 1}.`,
      });
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        swapped = true;
        frames.push({
          values: [...a],
          marks: { [i]: "swap", [i + 1]: "swap" },
          caption: "Out of order → swap.",
        });
      }
    }
    hi--;
    if (!swapped) break;
    swapped = false;
    for (let i = hi; i > lo; i--) {
      frames.push({
        values: [...a],
        marks: { [i]: "compare", [i - 1]: "compare" },
        caption: `Backward ← compare ${i} and ${i - 1}.`,
      });
      if (a[i - 1] > a[i]) {
        [a[i - 1], a[i]] = [a[i], a[i - 1]];
        swapped = true;
        frames.push({
          values: [...a],
          marks: { [i]: "swap", [i - 1]: "swap" },
          caption: "Out of order → swap.",
        });
      }
    }
    lo++;
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Gnome Sort ------------------------------------------------------------
function gnomeSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: "Start: step forward, swap back on disorder." },
  ];
  let pos = 0;
  while (pos < n) {
    if (pos === 0 || a[pos] >= a[pos - 1]) {
      if (pos > 0)
        frames.push({
          values: [...a],
          marks: { [pos]: "compare", [pos - 1]: "compare" },
          caption: `Index ${pos} ≥ ${pos - 1} → step forward.`,
        });
      pos++;
    } else {
      frames.push({
        values: [...a],
        marks: { [pos]: "swap", [pos - 1]: "swap" },
        caption: `Index ${pos} < ${pos - 1} → swap and step back.`,
      });
      [a[pos], a[pos - 1]] = [a[pos - 1], a[pos]];
      pos--;
    }
  }
  frames.push({
    values: [...a],
    marks: Object.fromEntries(a.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: array is sorted.",
  });
  return frames;
}

// ---- Comb Sort -------------------------------------------------------------
function combSortFrames(input: number[]): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: "Start: bubble sort with a shrinking gap." },
  ];
  let gap = n;
  let sorted = false;
  while (!sorted) {
    gap = Math.floor(gap / 1.3);
    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }
    for (let i = 0; i + gap < n; i++) {
      frames.push({
        values: [...a],
        marks: { [i]: "compare", [i + gap]: "compare" },
        caption: `Gap ${gap}: compare ${i} and ${i + gap}.`,
      });
      if (a[i] > a[i + gap]) {
        [a[i], a[i + gap]] = [a[i + gap], a[i]];
        sorted = false;
        frames.push({
          values: [...a],
          marks: { [i]: "swap", [i + gap]: "swap" },
          caption: "Out of order → swap.",
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

// ---- Jump Search -----------------------------------------------------------
function jumpSearchFrames(input: number[], target: number): Frame[] {
  const a = [...input].sort((x, y) => x - y);
  const n = a.length;
  const step = Math.max(1, Math.floor(Math.sqrt(n)));
  const frames: Frame[] = [
    { values: [...a], caption: `Jump search for ${target}; block size ≈ √n = ${step}.` },
  ];
  let prev = 0;
  let idx = step - 1;
  while (idx < n && a[idx] < target) {
    frames.push({
      values: [...a],
      marks: { [idx]: "compare" },
      caption: `a[${idx}] = ${a[idx]} < ${target} → jump to the next block.`,
    });
    prev = idx + 1;
    idx += step;
  }
  const end = Math.min(idx, n - 1);
  frames.push({
    values: [...a],
    marks: { [prev]: "active", [end]: "active" },
    caption: `Target lies in block [${prev}, ${end}] → scan linearly.`,
  });
  for (let i = prev; i <= end; i++) {
    if (a[i] === target) {
      frames.push({
        values: [...a],
        marks: { [i]: "match" },
        caption: `Found ${target} at index ${i}.`,
      });
      return frames;
    }
    frames.push({
      values: [...a],
      marks: { [i]: "compare" },
      caption: `a[${i}] = ${a[i]} ≠ ${target}.`,
    });
  }
  frames.push({ values: [...a], caption: `${target} is not present.` });
  return frames;
}

// ---- Ternary Search --------------------------------------------------------
function ternarySearchFrames(input: number[], target: number): Frame[] {
  const a = [...input].sort((x, y) => x - y);
  const frames: Frame[] = [
    { values: [...a], caption: `Ternary search for ${target}: split into thirds.` },
  ];
  let lo = 0;
  let hi = a.length - 1;
  while (lo <= hi) {
    const m1 = lo + Math.floor((hi - lo) / 3);
    const m2 = hi - Math.floor((hi - lo) / 3);
    frames.push({
      values: [...a],
      marks: { [lo]: "active", [hi]: "active", [m1]: "compare", [m2]: "compare" },
      caption: `Probe m1=${m1} (${a[m1]}) and m2=${m2} (${a[m2]}).`,
    });
    if (a[m1] === target) {
      frames.push({ values: [...a], marks: { [m1]: "match" }, caption: `Found ${target} at index ${m1}.` });
      return frames;
    }
    if (a[m2] === target) {
      frames.push({ values: [...a], marks: { [m2]: "match" }, caption: `Found ${target} at index ${m2}.` });
      return frames;
    }
    if (target < a[m1]) {
      hi = m1 - 1;
      frames.push({ values: [...a], caption: `${target} < ${a[m1]} → search the left third.` });
    } else if (target > a[m2]) {
      lo = m2 + 1;
      frames.push({ values: [...a], caption: `${target} > ${a[m2]} → search the right third.` });
    } else {
      lo = m1 + 1;
      hi = m2 - 1;
      frames.push({ values: [...a], caption: "Between the probes → search the middle third." });
    }
  }
  frames.push({ values: [...a], caption: `${target} is not present.` });
  return frames;
}

// ---- Remove Duplicates from Sorted Array -----------------------------------
function removeDuplicatesFrames(input: number[]): Frame[] {
  const a = [...input].sort((x, y) => x - y);
  const frames: Frame[] = [
    { values: [...a], caption: "Slow/fast pointers keep only unique values in front." },
  ];
  let slow = 0;
  for (let fast = 1; fast < a.length; fast++) {
    frames.push({
      values: [...a],
      marks: { [slow]: "active", [fast]: "compare" },
      caption: `Compare slow ${slow} (${a[slow]}) with fast ${fast} (${a[fast]}).`,
    });
    if (a[fast] !== a[slow]) {
      slow++;
      a[slow] = a[fast];
      frames.push({
        values: [...a],
        marks: { [slow]: "swap", [fast]: "swap" },
        caption: `New unique value → write it at slow ${slow}.`,
      });
    }
  }
  const sorted: Record<number, Highlight> = {};
  for (let k = 0; k <= slow; k++) sorted[k] = "sorted";
  frames.push({
    values: [...a],
    marks: sorted,
    caption: `${slow + 1} unique values now sit at the front.`,
  });
  return frames;
}

// ---- Minimum Size Subarray Sum (variable window) ---------------------------
function minSubArrayLenFrames(input: number[], target: number): Frame[] {
  const a = [...input];
  const n = a.length;
  const frames: Frame[] = [
    { values: [...a], caption: `Find the shortest window with sum ≥ ${target}.` },
  ];
  let left = 0;
  let sum = 0;
  let best = Infinity;
  for (let right = 0; right < n; right++) {
    sum += a[right];
    const win: Record<number, Highlight> = {};
    for (let k = left; k <= right; k++) win[k] = "active";
    frames.push({
      values: [...a],
      marks: { ...win, [right]: "compare" },
      caption: `Expand right to ${right}; window sum = ${sum}.`,
    });
    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      const w2: Record<number, Highlight> = {};
      for (let k = left; k <= right; k++) w2[k] = "match";
      frames.push({
        values: [...a],
        marks: w2,
        caption: `Sum ${sum} ≥ ${target}; length ${right - left + 1}. Shrink from the left.`,
      });
      sum -= a[left];
      left++;
    }
  }
  frames.push({
    values: [...a],
    caption: best === Infinity ? "No qualifying window exists." : `Minimum window length = ${best}.`,
  });
  return frames;
}

// ---- Running / Prefix Sum in place -----------------------------------------
function runningSumFrames(input: number[]): Frame[] {
  const out = [...input];
  const frames: Frame[] = [
    { values: [...out], caption: "Running sum: each slot becomes the sum so far." },
  ];
  for (let i = 1; i < out.length; i++) {
    frames.push({
      values: [...out],
      marks: { [i]: "compare", [i - 1]: "active" },
      caption: `Add out[${i - 1}] into out[${i}].`,
    });
    out[i] += out[i - 1];
    frames.push({
      values: [...out],
      marks: { [i]: "swap" },
      caption: `out[${i}] = ${out[i]}.`,
    });
  }
  frames.push({
    values: [...out],
    marks: Object.fromEntries(out.map((_, i) => [i, "sorted" as Highlight])),
    caption: "Done: running sums computed in place.",
  });
  return frames;
}

// ---- Find Pivot Index ------------------------------------------------------
function pivotIndexFrames(input: number[]): Frame[] {
  const a = [...input];
  const total = a.reduce((s, v) => s + v, 0);
  const frames: Frame[] = [
    { values: [...a], caption: "Find the index where left sum equals right sum." },
  ];
  let leftSum = 0;
  for (let i = 0; i < a.length; i++) {
    const rightSum = total - leftSum - a[i];
    const marks: Record<number, Highlight> = { [i]: "swap" };
    for (let k = 0; k < i; k++) marks[k] = "active";
    for (let k = i + 1; k < a.length; k++) marks[k] = "compare";
    frames.push({
      values: [...a],
      marks,
      caption: `i=${i}: left sum = ${leftSum}, right sum = ${rightSum}.`,
    });
    if (leftSum === rightSum) {
      frames.push({
        values: [...a],
        marks: { [i]: "match" },
        caption: `Pivot found at index ${i}.`,
      });
      return frames;
    }
    leftSum += a[i];
  }
  frames.push({ values: [...a], caption: "No pivot index exists." });
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
  {
    slug: "heap-sort",
    title: "Heap Sort",
    category: "Sorting",
    blurb: "Build a max-heap, then repeatedly extract the largest value.",
    icon: "Triangle",
    frames: heapSortFrames([4, 10, 3, 5, 1, 8, 6]),
  },
  {
    slug: "shell-sort",
    title: "Shell Sort",
    category: "Sorting",
    blurb: "Insertion sort across shrinking gaps for fewer shifts.",
    icon: "AlignHorizontalDistributeCenter",
    frames: shellSortFrames([9, 4, 7, 2, 8, 3, 6, 1]),
  },
  {
    slug: "cocktail-sort",
    title: "Cocktail Shaker Sort",
    category: "Sorting",
    blurb: "Bubble in both directions each pass to settle extremes faster.",
    icon: "ArrowLeftRight",
    frames: cocktailSortFrames([5, 2, 8, 1, 9, 3, 7]),
  },
  {
    slug: "gnome-sort",
    title: "Gnome Sort",
    category: "Sorting",
    blurb: "Step forward, and swap backward whenever a pair is out of order.",
    icon: "Footprints",
    frames: gnomeSortFrames([6, 3, 8, 2, 7, 4]),
  },
  {
    slug: "comb-sort",
    title: "Comb Sort",
    category: "Sorting",
    blurb: "Bubble sort with a shrinking gap to kill turtles early.",
    icon: "AlignJustify",
    frames: combSortFrames([8, 4, 1, 6, 9, 2, 7, 3]),
  },
  {
    slug: "jump-search",
    title: "Jump Search",
    category: "Searching",
    blurb: "Jump ahead by √n blocks, then scan the final block linearly.",
    icon: "ChevronsRight",
    frames: jumpSearchFrames([1, 3, 5, 7, 9, 11, 13, 15], 11),
  },
  {
    slug: "ternary-search",
    title: "Ternary Search",
    category: "Searching",
    blurb: "Split the range into thirds and discard two-thirds each step.",
    icon: "Rows3",
    frames: ternarySearchFrames([2, 4, 6, 8, 10, 12, 14], 10),
  },
  {
    slug: "remove-duplicates",
    title: "Remove Duplicates",
    category: "Two Pointers",
    blurb: "Slow/fast pointers compact unique values to the front.",
    icon: "CopyMinus",
    frames: removeDuplicatesFrames([1, 1, 2, 2, 3, 4, 4, 5]),
  },
  {
    slug: "min-subarray-sum",
    title: "Minimum Size Subarray Sum",
    category: "Sliding Window",
    blurb: "Grow and shrink a variable window to find the shortest span ≥ target.",
    icon: "Minimize2",
    frames: minSubArrayLenFrames([2, 3, 1, 2, 4, 3], 7),
  },
  {
    slug: "running-sum",
    title: "Running Sum",
    category: "Prefix Sum",
    blurb: "Accumulate each value into the next for an in-place prefix sum.",
    icon: "Plus",
    frames: runningSumFrames([3, 1, 4, 1, 5, 2]),
  },
  {
    slug: "pivot-index",
    title: "Find Pivot Index",
    category: "Prefix Sum",
    blurb: "Locate the index where the left sum equals the right sum.",
    icon: "Scale",
    frames: pivotIndexFrames([2, 1, 3, 5, 3, 1, 2]),
  },
];

export function getAnimation(slug: string) {
  return ANIMATIONS.find((x) => x.slug === slug);
}
