// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
//
// export default function BlogPost() {
//     const { slug } = useParams();
//     const [content, setContent] = useState<string>("Loading...");
//
//     useEffect(() => {
//         fetch(`/blog/${slug}.md`)
//             .then((res) => {
//                 if (!res.ok) throw new Error("Not found");
//                 return res.text();
//             })
//             .then(setContent)
//             .catch(() => setContent("Blog post not found."));
//     }, [slug]);
//
//     return (
//         <main className="prose prose-invert max-w-3xl mx-auto px-4 py-8">
//             <ReactMarkdown>{content}</ReactMarkdown>
//         </main>
//     );
// }
