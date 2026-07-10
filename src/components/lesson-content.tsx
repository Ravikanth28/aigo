import { Fragment, type ReactNode } from "react";
import type { Block } from "@/lib/lesson-content";

// Parse a tiny inline markup subset: **bold** and `code`.
function inline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      nodes.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    } else {
      nodes.push(<code key={key++}>{tok.slice(1, -1)}</code>);
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{inline(block.text)}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((it, i) => (
            <li key={i}>{inline(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((it, i) => (
            <li key={i}>{inline(it)}</li>
          ))}
        </ol>
      );
    case "code":
      return (
        <pre>
          <code>{block.code}</code>
        </pre>
      );
    case "callout":
      return (
        <div className={`lesson-callout lesson-callout-${block.variant}`}>
          {inline(block.text)}
        </div>
      );
    case "table":
      return (
        <table>
          <thead>
            <tr>
              {block.head.map((h, i) => (
                <th key={i}>{inline(h)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{inline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
  }
}

export function LessonContentView({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-lesson mt-6 space-y-4">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}
