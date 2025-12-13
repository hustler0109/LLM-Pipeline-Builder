// // LLMNode.js

// import BaseNode from "./BaseNode";

// export const LLMNode = ({ id }) => {
//   return (
//     <BaseNode
//       title="LLM"
//       description="Large Language Model"
//       inputs={[`${id}-system`, `${id}-prompt`]}
//       outputs={[`${id}-response`]}
//     >
//       <div className="node-description">
//         This is a LLM.
//       </div>
//     </BaseNode>
//   );
// };

// frontend/src/nodes/LLMNode.js
import BaseNode from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      description="Large Language Model"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
    >
      <div>This node represents an LLM.</div>
    </BaseNode>
  );
};
