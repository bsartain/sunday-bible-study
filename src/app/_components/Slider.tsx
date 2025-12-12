"use client";
import * as React from "react";
import "@/app/globals.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import remarkBreaks from "remark-breaks";

const Slider: React.FC<{ posts: any }> = ({ posts }) => {
  console.log("🚀 ~ Slider ~ posts:", posts);
  const [ref] = useKeenSlider<HTMLDivElement>();
  return (
    <div ref={ref} className="keen-slider mb-10">
      {posts
        ? posts.map((post: any) => {
            console.log("🚀 ~ Slider ~ post:", post);

            return (
              <div className="keen-slider__slide">
                <h2 className="mb-8 mt-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">{post.title}</h2>
                {/* <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>{post.content}</ReactMarkdown> */}
                <div
                  className="markdown-styles-module__lKAVtq__markdown"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br />") }}
                ></div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Slider;
