// // // TextNode.js

// // import { useEffect, useRef, useState } from "react";
// // import BaseNode from "./BaseNode";

// // export const TextNode = ({ id, data }) => {
// //   const [text, setText] = useState(data?.text || "{{input}}");
// //   const [variables, setVariables] = useState([]);
// //   const textareaRef = useRef(null);

// //   // 🔹 Extract {{variables}} from text
// //   const extractVariables = (value) => {
// //     const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
// //     const matches = [...value.matchAll(regex)].map((m) => m[1]);
// //     setVariables([...new Set(matches)]);
// //   };

// //   // 🔹 Auto-resize textarea
// //   const autoResize = () => {
// //     const el = textareaRef.current;
// //     if (!el) return;
// //     el.style.height = "auto";
// //     el.style.height = el.scrollHeight + "px";
// //   };

// //   useEffect(() => {
// //     extractVariables(text);
// //     autoResize();
// //   }, [text]);

// //   return (
// //     <BaseNode
// //       title="Text"
// //       description="Dynamic text with variables"
// //       inputs={variables}
// //       outputs={[`${id}-output`]}
// //     >
// //       <textarea
// //         ref={textareaRef}
// //         value={text}
// //         onChange={(e) => setText(e.target.value)}
// //         placeholder="Enter text with {{variables}}"
// //         style={{
// //           width: "100%",
// //           resize: "none",
// //           overflow: "hidden",
// //         }}
// //       />
// //     </BaseNode>
// //   );
// // };

// // frontend/src/nodes/TextNode.js
// import { useEffect, useRef, useState } from "react";
// import BaseNode from "./BaseNode";

// export const TextNode = ({ id, data }) => {
//   const [text, setText] = useState(data?.text || "{{input}}");
//   const [inputs, setInputs] = useState([]);
//   const textareaRef = useRef(null);

//   // Extract {{variables}}
//   useEffect(() => {
//     const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
//     const matches = [...text.matchAll(regex)].map((m) => m[1]);
//     setInputs([...new Set(matches)]);
//   }, [text]);

//   // Auto-resize textarea
//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//       textareaRef.current.style.height =
//         textareaRef.current.scrollHeight + "px";
//     }
//   }, [text]);

//   return (
//     <BaseNode
//       title="Text"
//       description="Dynamic text with variables"
//       inputs={inputs}
//       outputs={[`${id}-output`]}
//     >
//       <textarea
//         ref={textareaRef}
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Use {{variables}}"
//         style={{
//           width: "100%",
//           resize: "none",
//           overflow: "hidden",
//         }}
//       />
//     </BaseNode>
//   );
// };

import { useEffect, useRef, useState } from "react";
import BaseNode from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [variableInputs, setVariableInputs] = useState([]);
  const textareaRef = useRef(null);

  // Extract {{variables}}
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)].map((m) => m[1]);
    setVariableInputs([...new Set(matches)]);
  }, [text]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <BaseNode
      title="Text"
      description="Dynamic text with variables"
      inputs={["input", ...variableInputs]}   // ✅ DEFAULT INPUT
      outputs={[`${id}-output`]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text. Use {{variables}}"
        style={{
          width: "100%",
          resize: "none",
          overflow: "hidden",
        }}
      />
    </BaseNode>
  );
};
