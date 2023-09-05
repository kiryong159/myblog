"use client";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ViewContents({ content }) {
  return (
    <ReactMarkdown
      className="whitespace-pre-line markdown w-full"
      components={{
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={tomorrow}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

//해당페이지 gtp로 작성 했음 전혀이해못했음. 나중에 확인하도록

/* 

"use client";
import React from "react"; // React 라이브러리를 가져옵니다.
import ReactMarkdown from "react-markdown"; // ReactMarkdown 라이브러리를 가져옵니다.
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // 코드 강조 표시를 위한 SyntaxHighlighter 컴포넌트를 가져옵니다.
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"; // tomorrow 테마를 가져옵니다.

// ViewContents 함수형 컴포넌트를 정의합니다. content라는 프롭을 받습니다.
export default function ViewContents({ content }) {
  return (
    <ReactMarkdown
      className="whitespace-pre-line markdown"
      components={{
        // ReactMarkdown 컴포넌트의 코드 블록을 사용자 정의합니다.
        code: ({ node, inline, className, children, ...props }) => {
          // 코드 블록의 클래스 이름에서 언어 정보를 추출합니다.
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            // 코드 블록이 한 줄로 작성되지 않고 언어 정보를 찾은 경우 SyntaxHighlighter를 사용하여 코드 강조 표시를 합니다.
            <SyntaxHighlighter
              style={tomorrow} // tomorrow 테마를 사용합니다.
              language={match[1]} // 언어 정보를 전달합니다.
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              {...props}
            />
          ) : (
            // 코드 블록이 한 줄로 작성되거나 언어 정보를 찾지 못한 경우 그냥 <code> 태그로 렌더링합니다.
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

*/
