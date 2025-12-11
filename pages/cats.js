import matter from "gray-matter";
import catsMarkdown from "../content/cats.md";

const catsData = matter(catsMarkdown);

export default function CatsPage() {
  const { title, date, cats } = catsData.data;
  const content = catsData.content;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{title}</h1>
      <p>
        <em>{new Date(date).toLocaleDateString()}</em>
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} /> {/* Basic render; use remark for better Markdown */}
      <h2>Famous Cats:</h2>
      <ul>
        {cats.map((cat, i) => (
          <li key={i}>
            <strong>{cat.name}</strong>: {cat.description}
          </li>
        ))}
      </ul>
      <p>This page is built with Next.js, and content is managed in Decap CMS.</p>
    </div>
  );
}
