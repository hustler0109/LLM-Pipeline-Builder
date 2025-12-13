// // InputNode.js

// import { useState } from "react";
// import BaseNode from "./BaseNode";

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(
//     data?.inputName || id.replace("customInput-", "input_")
//   );
//   const [inputType, setInputType] = useState(
//     data?.inputType || "Text"
//   );

//   return (
//     <BaseNode
//       title="Input"
//       outputs={[`${id}-value`]}
//     >
//       <div className="node-field">
//         <label>
//           Name
//           <input
//             type="text"
//             value={currName}
//             onChange={(e) => setCurrName(e.target.value)}
//           />
//         </label>
//       </div>

//       <div className="node-field">
//         <label>
//           Type
//           <select
//             value={inputType}
//             onChange={(e) => setInputType(e.target.value)}
//           >
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//     </BaseNode>
//   );
// };

// frontend/src/nodes/InputNode.js
import { useState } from "react";
import BaseNode from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [type, setType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      description="Pipeline entry point"
      outputs={[`${id}-value`]}
    >
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Type
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};

