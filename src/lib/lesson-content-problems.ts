// Authored solutions for iconic DSA problems. Original explanations.
import type { LessonContent } from "@/lib/lesson-content";

export const DSA_PROBLEMS: Record<string, LessonContent> = {
  "dsa/two-sum": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Given an array of integers `nums` and a target, return the indices of the two numbers that add up to the target. Exactly one solution exists and you may not use the same element twice.",
      },
      { t: "h2", text: "Brute force" },
      {
        t: "p",
        text: "Check every pair with two nested loops. Correct, but O(n²) time.",
      },
      { t: "h2", text: "Optimal: one-pass hash map" },
      {
        t: "p",
        text: "As you scan, for each number `x` you know its needed partner is `target - x`. Keep a map of value → index of everything seen so far; if the partner is already in the map, you are done. Each lookup is O(1), so the whole scan is O(n).",
      },
      {
        t: "code",
        lang: "python",
        code: `def two_sum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i
    return []`,
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "**Time O(n)**, **space O(n)** for the map. A single pass, storing at most `n` entries.",
      },
      {
        t: "callout",
        variant: "tip",
        text: "Check for the partner *before* inserting the current number so you never pair an element with itself.",
      },
    ],
  },

  "dsa/best-time-to-buy-sell-stock": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Given daily prices, buy on one day and sell on a later day to maximize profit. Return the best profit, or 0 if no profit is possible.",
      },
      { t: "h2", text: "Insight" },
      {
        t: "p",
        text: "For each day, the best sell profit is today's price minus the **cheapest price seen so far**. Track the running minimum and the best profit in a single pass.",
      },
      {
        t: "code",
        lang: "python",
        code: `def max_profit(prices):
    min_price = float("inf")
    best = 0
    for p in prices:
        min_price = min(min_price, p)
        best = max(best, p - min_price)
    return best`,
      },
      { t: "h2", text: "Complexity" },
      { t: "p", text: "**Time O(n)**, **space O(1)**." },
    ],
  },

  "dsa/contains-duplicate": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Return true if any value appears at least twice in the array, false if every element is distinct.",
      },
      { t: "h2", text: "Approach" },
      {
        t: "p",
        text: "Add elements to a hash set as you scan. The first time you try to add a value that is already present, you have found a duplicate.",
      },
      {
        t: "code",
        lang: "python",
        code: `def contains_duplicate(nums):
    seen = set()
    for x in nums:
        if x in seen:
            return True
        seen.add(x)
    return False`,
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "**Time O(n)**, **space O(n)**. Sorting first would trade space for O(n log n) time and O(1) extra space.",
      },
    ],
  },

  "dsa/valid-anagram": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Two strings are anagrams if one is a rearrangement of the other. Return whether `s` and `t` are anagrams.",
      },
      { t: "h2", text: "Approach: character counts" },
      {
        t: "p",
        text: "Anagrams have identical character frequencies. Count characters in `s`, subtract them for `t`, and check every count is zero. Lengths must match first.",
      },
      {
        t: "code",
        lang: "python",
        code: `from collections import Counter

def is_anagram(s, t):
    if len(s) != len(t):
        return False
    return Counter(s) == Counter(t)`,
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "**Time O(n)**, **space O(1)** for a fixed alphabet (at most 26 or 128 buckets).",
      },
    ],
  },

  "dsa/valid-palindrome": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "A phrase is a palindrome if, after lowercasing and dropping non-alphanumeric characters, it reads the same forward and backward. Return whether the input qualifies.",
      },
      { t: "h2", text: "Two pointers from both ends" },
      {
        t: "p",
        text: "Place one pointer at each end. Skip characters that are not alphanumeric, compare the rest case-insensitively, and move inward. A mismatch means it is not a palindrome.",
      },
      {
        t: "code",
        lang: "python",
        code: `def is_palindrome(s):
    i, j = 0, len(s) - 1
    while i < j:
        while i < j and not s[i].isalnum():
            i += 1
        while i < j and not s[j].isalnum():
            j -= 1
        if s[i].lower() != s[j].lower():
            return False
        i += 1; j -= 1
    return True`,
      },
      { t: "h2", text: "Complexity" },
      { t: "p", text: "**Time O(n)**, **space O(1)** — no cleaned copy needed." },
    ],
  },

  "dsa/3sum": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Find all unique triplets in the array that sum to zero. The result must not contain duplicate triplets.",
      },
      { t: "h2", text: "Sort, then two pointers" },
      {
        t: "p",
        text: "Sort the array. Fix each element `nums[i]` and use two pointers on the rest to find pairs that complete the sum to zero. Sorting makes duplicate-skipping easy and lets the pointers move predictably.",
      },
      {
        t: "code",
        lang: "python",
        code: `def three_sum(nums):
    nums.sort()
    res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue                      # skip duplicate anchors
        lo, hi = i + 1, len(nums) - 1
        while lo < hi:
            s = nums[i] + nums[lo] + nums[hi]
            if s < 0:
                lo += 1
            elif s > 0:
                hi -= 1
            else:
                res.append([nums[i], nums[lo], nums[hi]])
                lo += 1; hi -= 1
                while lo < hi and nums[lo] == nums[lo - 1]:
                    lo += 1               # skip duplicate pairs
    return res`,
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "**Time O(n²)** — an outer loop times a linear two-pointer scan. **Space O(1)** beyond the output (ignoring sort).",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Skipping duplicates at both the anchor and the pointers is what keeps the triplets unique. Miss either and you get repeats.",
      },
    ],
  },

  "dsa/valid-parentheses": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Given a string of brackets `()[]{}`, decide whether every opening bracket is closed by the correct type in the correct order.",
      },
      { t: "h2", text: "A stack of expected closers" },
      {
        t: "p",
        text: "Push opening brackets onto a stack. On a closing bracket, the top of the stack must be its matching opener; otherwise the string is invalid. The stack must be empty at the end.",
      },
      {
        t: "code",
        lang: "python",
        code: `def is_valid(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in s:
        if ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            stack.append(ch)
    return not stack`,
      },
      { t: "h2", text: "Complexity" },
      { t: "p", text: "**Time O(n)**, **space O(n)** in the worst case." },
    ],
  },

  "dsa/binary-search": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Given a sorted array and a target, return the target's index or -1 if it is absent.",
      },
      { t: "h2", text: "Approach" },
      {
        t: "p",
        text: "Maintain an inclusive `[lo, hi]` range. Compare the middle element to the target and discard the half that cannot contain it. Repeat until the range is empty.",
      },
      {
        t: "code",
        lang: "python",
        code: `def search(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = lo + (hi - lo) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1`,
      },
      { t: "h2", text: "Complexity" },
      { t: "p", text: "**Time O(log n)**, **space O(1)**." },
    ],
  },

  "dsa/reverse-linked-list": {
    blocks: [
      { t: "h2", text: "Problem" },
      { t: "p", text: "Reverse a singly linked list and return the new head." },
      { t: "h2", text: "Iterative pointer flipping" },
      {
        t: "p",
        text: "Walk the list once, reversing each node's `next` pointer to point at the previous node. Keep three references: previous, current, and the saved next.",
      },
      {
        t: "code",
        lang: "python",
        code: `def reverse_list(head):
    prev = None
    cur = head
    while cur:
        nxt = cur.next   # save
        cur.next = prev  # flip
        prev = cur       # advance
        cur = nxt
    return prev`,
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "**Time O(n)**, **space O(1)**. A recursive version is also O(n) time but uses O(n) stack space.",
      },
    ],
  },

  "dsa/climbing-stairs": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "You climb a staircase of `n` steps, taking 1 or 2 steps at a time. How many distinct ways can you reach the top?",
      },
      { t: "h2", text: "It's Fibonacci" },
      {
        t: "p",
        text: "To reach step `n` you came from step `n-1` (a 1-step) or step `n-2` (a 2-step), so `ways(n) = ways(n-1) + ways(n-2)`. Roll two variables forward instead of a full table.",
      },
      {
        t: "code",
        lang: "python",
        code: `def climb_stairs(n):
    a, b = 1, 1
    for _ in range(n):
        a, b = b, a + b
    return a`,
      },
      { t: "h2", text: "Complexity" },
      { t: "p", text: "**Time O(n)**, **space O(1)**." },
    ],
  },

  "dsa/house-robber": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Houses in a row hold cash. You cannot rob two adjacent houses. Maximize the total you can steal.",
      },
      { t: "h2", text: "DP over two choices" },
      {
        t: "p",
        text: "At each house you either skip it (keep the best up to the previous house) or rob it (its value plus the best up to two houses back). Track those two running totals.",
      },
      {
        t: "code",
        lang: "python",
        code: `def rob(nums):
    prev, cur = 0, 0
    for x in nums:
        prev, cur = cur, max(cur, prev + x)
    return cur`,
      },
      { t: "h2", text: "Complexity" },
      { t: "p", text: "**Time O(n)**, **space O(1)**." },
    ],
  },

  "dsa/coin-change": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Given coin denominations and an amount, return the fewest coins that sum to the amount, or -1 if it cannot be made.",
      },
      { t: "h2", text: "Bottom-up DP" },
      {
        t: "p",
        text: "Let `dp[x]` be the fewest coins to make amount `x`. For each amount, try every coin: `dp[x] = min(dp[x], dp[x - coin] + 1)`. Build from 0 up to the target.",
      },
      {
        t: "code",
        lang: "python",
        code: `def coin_change(coins, amount):
    dp = [0] + [float("inf")] * amount
    for x in range(1, amount + 1):
        for c in coins:
            if c <= x:
                dp[x] = min(dp[x], dp[x - c] + 1)
    return dp[amount] if dp[amount] != float("inf") else -1`,
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "**Time O(amount × coins)**, **space O(amount)**. A greedy approach fails in general — DP is required.",
      },
      {
        t: "callout",
        variant: "warn",
        text: "Greedy (always take the largest coin) is wrong for denominations like [1, 3, 4] and amount 6. Trust the DP.",
      },
    ],
  },

  "dsa/number-of-islands": {
    blocks: [
      { t: "h2", text: "Problem" },
      {
        t: "p",
        text: "Given a grid of '1' (land) and '0' (water), count the islands. Land cells connect horizontally and vertically.",
      },
      { t: "h2", text: "Flood fill each island" },
      {
        t: "p",
        text: "Scan the grid. When you hit unvisited land, that is a new island — run DFS/BFS to sink the entire connected landmass so you never count it again.",
      },
      {
        t: "code",
        lang: "python",
        code: `def num_islands(grid):
    rows, cols = len(grid), len(grid[0])
    count = 0

    def sink(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != "1":
            return
        grid[r][c] = "0"
        sink(r + 1, c); sink(r - 1, c)
        sink(r, c + 1); sink(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":
                count += 1
                sink(r, c)
    return count`,
      },
      { t: "h2", text: "Complexity" },
      {
        t: "p",
        text: "**Time O(rows × cols)** — each cell is visited once. **Space O(rows × cols)** worst case for the recursion stack.",
      },
    ],
  },
};
