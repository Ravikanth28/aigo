// Authored lesson content for the SQL course. All prose is original and written
// for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const SQL_CONTENT: Record<string, LessonContent> = {
  "sql/relational-model": {
    blocks: [
      { t: "h2", text: "The Relational Model" },
      { t: "p", text: "The relational model organizes data into tables (relations) of rows and columns. Relationships between tables are expressed through shared key values rather than pointers." },
      { t: "ul", items: [
        "**Primary key** — uniquely identifies each row.",
        "**Foreign key** — references a primary key in another table.",
        "**Schema** — the definition of tables, columns, and constraints.",
      ] },
      { t: "callout", variant: "note", text: "Data integrity comes from constraints — keys, NOT NULL, UNIQUE, and CHECK — enforced by the database itself." },
    ],
  },
  "sql/select-where": {
    blocks: [
      { t: "h2", text: "SELECT & WHERE" },
      { t: "p", text: "`SELECT` chooses which columns to return; `WHERE` filters which rows. Together they form the backbone of every query." },
      { t: "code", lang: "sql", code: "SELECT name, email\nFROM users\nWHERE country = 'IN' AND active = true;" },
      { t: "callout", variant: "tip", text: "WHERE filters rows before grouping; use HAVING to filter after aggregation." },
    ],
  },
  "sql/ordering-limiting": {
    blocks: [
      { t: "h2", text: "ORDER BY & LIMIT" },
      { t: "p", text: "`ORDER BY` sorts the result set; `LIMIT` (with `OFFSET`) returns a slice of it. This pair drives sorting and pagination." },
      { t: "code", lang: "sql", code: "SELECT title, views\nFROM posts\nORDER BY views DESC\nLIMIT 10 OFFSET 20; -- rows 21-30" },
      { t: "callout", variant: "warn", text: "Large OFFSET values are slow — the database still scans skipped rows. Prefer keyset (seek) pagination for deep pages." },
    ],
  },
  "sql/insert-update-delete": {
    blocks: [
      { t: "h2", text: "INSERT, UPDATE, DELETE" },
      { t: "p", text: "These statements modify data. Each should be written carefully — an UPDATE or DELETE without a WHERE clause changes every row." },
      { t: "code", lang: "sql", code: "INSERT INTO users (name, email) VALUES ('Aria', 'a@x.com');\nUPDATE users SET active = false WHERE last_login < '2025-01-01';\nDELETE FROM users WHERE id = 42;" },
      { t: "callout", variant: "warn", text: "Run the WHERE clause as a SELECT first to confirm the affected rows before an UPDATE or DELETE." },
    ],
  },
  "sql/data-types-sql": {
    blocks: [
      { t: "h2", text: "Data Types & Constraints" },
      { t: "p", text: "Choosing the right column type saves space and prevents invalid data. Constraints enforce rules at the schema level so the database rejects bad rows." },
      { t: "table", head: ["Type", "Use for"], rows: [
        ["INT / BIGINT", "whole numbers, IDs"],
        ["DECIMAL(p,s)", "money (exact)"],
        ["VARCHAR(n)", "bounded text"],
        ["TIMESTAMP", "date + time"],
        ["BOOLEAN", "true/false flags"],
      ] },
      { t: "callout", variant: "tip", text: "Use DECIMAL, never FLOAT, for money — floating point cannot represent values like 0.10 exactly." },
    ],
  },
  "sql/inner-join": {
    blocks: [
      { t: "h2", text: "INNER JOIN" },
      { t: "p", text: "An INNER JOIN returns only rows that have a match in both tables, combining columns from each based on a join condition." },
      { t: "code", lang: "sql", code: "SELECT o.id, u.name\nFROM orders o\nINNER JOIN users u ON u.id = o.user_id;" },
      { t: "callout", variant: "note", text: "Rows without a match on either side are excluded — that is what distinguishes INNER from OUTER joins." },
    ],
  },
  "sql/outer-joins": {
    blocks: [
      { t: "h2", text: "LEFT, RIGHT & FULL JOIN" },
      { t: "p", text: "Outer joins keep unmatched rows from one or both tables, filling missing columns with NULL." },
      { t: "ul", items: [
        "**LEFT JOIN** — all left rows, matched right rows or NULL.",
        "**RIGHT JOIN** — all right rows, matched left rows or NULL.",
        "**FULL JOIN** — all rows from both sides.",
      ] },
      { t: "code", lang: "sql", code: "SELECT u.name, o.id\nFROM users u\nLEFT JOIN orders o ON o.user_id = u.id; -- users with no orders show NULL" },
    ],
  },
  "sql/self-join": {
    blocks: [
      { t: "h2", text: "Self Joins" },
      { t: "p", text: "A self join joins a table to itself, using aliases to treat it as two tables. It is ideal for hierarchical data like employees and their managers." },
      { t: "code", lang: "sql", code: "SELECT e.name AS employee, m.name AS manager\nFROM employees e\nJOIN employees m ON e.manager_id = m.id;" },
    ],
  },
  "sql/cross-join": {
    blocks: [
      { t: "h2", text: "CROSS JOIN" },
      { t: "p", text: "A CROSS JOIN produces the Cartesian product — every row of the first table paired with every row of the second. It is useful for generating combinations." },
      { t: "callout", variant: "warn", text: "A cross join of two large tables explodes in size (N x M rows). Use it deliberately, never by accident from a missing join condition." },
    ],
  },
  "sql/set-operations": {
    blocks: [
      { t: "h2", text: "UNION, INTERSECT & EXCEPT" },
      { t: "p", text: "Set operations combine the results of two queries that share the same column shape." },
      { t: "table", head: ["Operator", "Returns"], rows: [
        ["UNION", "rows in either (dedup)"],
        ["UNION ALL", "rows in either (keep dups)"],
        ["INTERSECT", "rows in both"],
        ["EXCEPT", "rows in first but not second"],
      ] },
      { t: "callout", variant: "tip", text: "UNION ALL is faster than UNION because it skips the deduplication pass — use it when duplicates are impossible or acceptable." },
    ],
  },
  "sql/group-by": {
    blocks: [
      { t: "h2", text: "GROUP BY" },
      { t: "p", text: "`GROUP BY` collapses rows that share values into groups so aggregate functions produce one result per group." },
      { t: "code", lang: "sql", code: "SELECT country, COUNT(*) AS users\nFROM users\nGROUP BY country;" },
      { t: "callout", variant: "warn", text: "Every non-aggregated column in the SELECT must appear in GROUP BY, or the query is ambiguous." },
    ],
  },
  "sql/having": {
    blocks: [
      { t: "h2", text: "HAVING" },
      { t: "p", text: "`HAVING` filters groups after aggregation, whereas `WHERE` filters rows before grouping. Use HAVING to keep only groups meeting an aggregate condition." },
      { t: "code", lang: "sql", code: "SELECT country, COUNT(*) AS users\nFROM users\nGROUP BY country\nHAVING COUNT(*) > 100;" },
    ],
  },
  "sql/aggregate-functions": {
    blocks: [
      { t: "h2", text: "Aggregate Functions" },
      { t: "p", text: "Aggregate functions compute a single value over a set of rows: COUNT, SUM, AVG, MIN, and MAX are the core five." },
      { t: "callout", variant: "note", text: "Most aggregates ignore NULLs. Notably, COUNT(*) counts all rows while COUNT(column) skips NULLs in that column." },
    ],
  },
  "sql/subqueries": {
    blocks: [
      { t: "h2", text: "Subqueries" },
      { t: "p", text: "A subquery is a query nested inside another. It can return a scalar, a list for `IN`, or a derived table in the FROM clause." },
      { t: "code", lang: "sql", code: "SELECT name FROM users\nWHERE id IN (SELECT user_id FROM orders WHERE total > 1000);" },
      { t: "callout", variant: "tip", text: "A correlated subquery references the outer query and runs per row — often rewritable as a faster join." },
    ],
  },
  "sql/ctes": {
    blocks: [
      { t: "h2", text: "Common Table Expressions" },
      { t: "p", text: "A CTE (`WITH` clause) names a temporary result set, making complex queries readable and enabling recursion for hierarchical data." },
      { t: "code", lang: "sql", code: "WITH big_spenders AS (\n  SELECT user_id FROM orders GROUP BY user_id HAVING SUM(total) > 5000\n)\nSELECT u.name FROM users u JOIN big_spenders b ON b.user_id = u.id;" },
      { t: "callout", variant: "note", text: "Recursive CTEs can traverse trees and graphs — for example, an entire org chart from one query." },
    ],
  },
  "sql/intro-window-functions": {
    blocks: [
      { t: "h2", text: "Introduction to Window Functions" },
      { t: "p", text: "A window function computes across a set of rows related to the current row, without collapsing them like GROUP BY does. You keep every row and add a computed column." },
      { t: "code", lang: "sql", code: "SELECT name, department, salary,\n       AVG(salary) OVER (PARTITION BY department) AS dept_avg\nFROM employees;" },
      { t: "callout", variant: "tip", text: "The OVER clause defines the window: PARTITION BY groups it, ORDER BY orders it." },
    ],
  },
  "sql/ranking-functions": {
    blocks: [
      { t: "h2", text: "ROW_NUMBER, RANK & DENSE_RANK" },
      { t: "p", text: "These ranking functions assign positions within a partition; they differ in how they handle ties." },
      { t: "table", head: ["Function", "Ties", "Gaps"], rows: [
        ["ROW_NUMBER", "unique numbers", "n/a"],
        ["RANK", "same rank", "leaves gaps"],
        ["DENSE_RANK", "same rank", "no gaps"],
      ] },
      { t: "code", lang: "sql", code: "SELECT name, salary,\n  RANK() OVER (ORDER BY salary DESC) AS rnk\nFROM employees;" },
    ],
  },
  "sql/running-totals": {
    blocks: [
      { t: "h2", text: "Running Totals & Moving Averages" },
      { t: "p", text: "An ordered window with a frame lets you compute cumulative sums and moving averages — common in reporting and time-series analysis." },
      { t: "code", lang: "sql", code: "SELECT day, amount,\n  SUM(amount) OVER (ORDER BY day\n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\nFROM sales;" },
    ],
  },
  "sql/lag-lead": {
    blocks: [
      { t: "h2", text: "LAG & LEAD" },
      { t: "p", text: "`LAG` and `LEAD` access a value from a previous or following row within the window — perfect for computing day-over-day changes." },
      { t: "code", lang: "sql", code: "SELECT day, revenue,\n  revenue - LAG(revenue) OVER (ORDER BY day) AS change\nFROM daily;" },
    ],
  },
  "sql/sql-indexing": {
    blocks: [
      { t: "h2", text: "Indexes & Query Plans" },
      { t: "p", text: "An index is a sorted data structure (usually a B-tree) that lets the database find rows without scanning the whole table. Reading the query plan tells you whether an index is being used." },
      { t: "code", lang: "sql", code: "EXPLAIN SELECT * FROM users WHERE email = 'a@x.com';\n-- Look for 'Index Scan', not 'Seq Scan', on large tables." },
      { t: "callout", variant: "warn", text: "Indexes speed up reads but slow down writes and use storage. Index the columns you filter and join on, not every column." },
    ],
  },
  "sql/query-optimization": {
    blocks: [
      { t: "h2", text: "Query Optimization" },
      { t: "p", text: "Optimization means helping the planner do less work. The biggest wins come from good indexes, selective filters, and avoiding unnecessary scans." },
      { t: "ul", items: [
        "Select only needed columns — avoid `SELECT *`.",
        "Filter early and on indexed columns.",
        "Avoid functions on indexed columns in WHERE (they defeat the index).",
        "Read EXPLAIN ANALYZE to find the slow step.",
      ] },
    ],
  },
  "sql/normalization": {
    blocks: [
      { t: "h2", text: "Normalization" },
      { t: "p", text: "Normalization organizes tables to reduce redundancy and prevent update anomalies by splitting data into related tables." },
      { t: "ol", items: [
        "**1NF** — atomic column values, no repeating groups.",
        "**2NF** — no partial dependency on part of a composite key.",
        "**3NF** — no transitive dependency on non-key columns.",
      ] },
      { t: "callout", variant: "tip", text: "Normalize for correctness; denormalize selectively for read performance once you measure a real bottleneck." },
    ],
  },
  "sql/transactions-isolation": {
    blocks: [
      { t: "h2", text: "Transactions & Isolation Levels" },
      { t: "p", text: "A transaction groups statements into an atomic unit. Isolation levels control what concurrent transactions can see of each other, trading consistency against concurrency." },
      { t: "table", head: ["Level", "Prevents"], rows: [
        ["Read Uncommitted", "nothing"],
        ["Read Committed", "dirty reads"],
        ["Repeatable Read", "+ non-repeatable reads"],
        ["Serializable", "+ phantom reads"],
      ] },
      { t: "callout", variant: "note", text: "Higher isolation means fewer anomalies but more locking/aborts. Read Committed is the common default." },
    ],
  },
  "sql/second-highest-salary": {
    blocks: [
      { t: "h2", text: "Second Highest Salary" },
      { t: "p", text: "Find the second distinct salary. The subquery approach excludes the maximum, then takes the max of what remains; it returns NULL cleanly when there is no second value." },
      { t: "code", lang: "sql", code: "SELECT MAX(salary) AS SecondHighestSalary\nFROM employee\nWHERE salary < (SELECT MAX(salary) FROM employee);" },
      { t: "callout", variant: "tip", text: "Alternatively use DENSE_RANK() and filter for rank = 2 to generalize to the Nth highest." },
    ],
  },
  "sql/nth-highest-salary": {
    blocks: [
      { t: "h2", text: "Nth Highest Salary" },
      { t: "p", text: "Generalize the previous problem with a ranking function so the same query works for any N." },
      { t: "code", lang: "sql", code: "SELECT DISTINCT salary\nFROM (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n  FROM employee\n) t\nWHERE rnk = N;" },
    ],
  },
  "sql/duplicate-emails": {
    blocks: [
      { t: "h2", text: "Duplicate Emails" },
      { t: "p", text: "Group by the email and keep only groups appearing more than once — a direct use of GROUP BY with HAVING." },
      { t: "code", lang: "sql", code: "SELECT email\nFROM person\nGROUP BY email\nHAVING COUNT(*) > 1;" },
    ],
  },
  "sql/department-top-earners": {
    blocks: [
      { t: "h2", text: "Department Top Three Salaries" },
      { t: "p", text: "For each department, return employees among the top three distinct salaries. A window function partitioned by department makes this concise." },
      { t: "code", lang: "sql", code: "SELECT d.name AS Department, e.name AS Employee, e.salary\nFROM (\n  SELECT *, DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) AS rnk\n  FROM employee\n) e\nJOIN department d ON d.id = e.departmentId\nWHERE e.rnk <= 3;" },
    ],
  },
  "sql/consecutive-numbers": {
    blocks: [
      { t: "h2", text: "Consecutive Numbers" },
      { t: "p", text: "Find numbers appearing at least three times in a row. Compare each row to the next two using LEAD, or self-join on adjacent ids." },
      { t: "code", lang: "sql", code: "SELECT DISTINCT num AS ConsecutiveNums\nFROM (\n  SELECT num,\n    LEAD(num,1) OVER (ORDER BY id) AS n1,\n    LEAD(num,2) OVER (ORDER BY id) AS n2\n  FROM logs\n) t\nWHERE num = n1 AND num = n2;" },
    ],
  },
  "sql/rank-scores": {
    blocks: [
      { t: "h2", text: "Rank Scores" },
      { t: "p", text: "Rank scores from highest to lowest with no gaps between equal scores — exactly what DENSE_RANK provides." },
      { t: "code", lang: "sql", code: "SELECT score,\n  DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank'\nFROM scores;" },
    ],
  },
  "sql/trips-and-users": {
    blocks: [
      { t: "h2", text: "Trips and Users" },
      { t: "p", text: "Compute the daily cancellation rate for trips involving only unbanned users over a date range. The trick is joining out banned drivers and riders, then averaging a CASE flag per day." },
      { t: "code", lang: "sql", code: "SELECT request_at AS Day,\n  ROUND(AVG(CASE WHEN status <> 'completed' THEN 1 ELSE 0 END), 2) AS 'Cancellation Rate'\nFROM trips t\nWHERE client_id NOT IN (SELECT users_id FROM users WHERE banned='Yes')\n  AND driver_id NOT IN (SELECT users_id FROM users WHERE banned='Yes')\n  AND request_at BETWEEN '2013-10-01' AND '2013-10-03'\nGROUP BY request_at;" },
      { t: "callout", variant: "tip", text: "AVG of a 0/1 CASE expression is a clean way to compute a rate directly in SQL." },
    ],
  },
};
