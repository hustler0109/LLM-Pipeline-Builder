// // frontend/src/nodes/BaseNode.js
// import { Handle, Position } from "reactflow";

// export default function BaseNode({
//   title,
//   description,
//   inputs = [],
//   outputs = [],
//   children,
//   style = {},
//   handleOffset = 40,
//   handleSpacing = 20,
// }) {
//   return (
//     <div className="node" style={style}>
//       <div className="node-header">
//         <strong>{title}</strong>
//         {description && (
//           <div className="node-description">{description}</div>
//         )}
//       </div>

//       {/* Input Handles */}
//       {inputs.map((id, index) => (
//         <Handle
//           key={id}
//           type="target"
//           position={Position.Left}
//           id={id}
//           style={{ top: handleOffset + index * handleSpacing }}
//         />
//       ))}

//       <div className="node-body">{children}</div>

//       {/* Output Handles */}
//       {outputs.map((id, index) => (
//         <Handle
//           key={id}
//           type="source"
//           position={Position.Right}
//           id={id}
//           style={{ top: handleOffset + index * handleSpacing }}
//         />
//       ))}
//     </div>
//   );
// }


// frontend/src/nodes/BaseNode.js
import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  description,

  // core capabilities
  inputs = [],
  outputs = [],

  // UI + behavior
  children,
  style = {},
  showHeader = true,
  showDescription = true,

  // layout control
  handleOffset = 40,
  handleSpacing = 20,

  // behavior flags
  readOnly = false,
  passThrough = false,
  collapsible = false,
}) {
  return (
    <div className="node" style={style}>
      {/* Header */}
      {showHeader && (
        <div className="node-header">
          <strong>{title}</strong>
          {showDescription && description && (
            <div className="node-description">{description}</div>
          )}
        </div>
      )}

      {/* Multiple INPUT handles */}
      {inputs.map((id, index) => (
        <Handle
          key={`in-${id}`}
          type="target"
          position={Position.Left}
          id={id}
          style={{ top: handleOffset + index * handleSpacing }}
        />
      ))}

      {/* Custom UI */}
      <div className="node-body">
        {children}
        {readOnly && <div className="node-hint">Read only</div>}
      </div>

      {/* Multiple / zero OUTPUT handles */}
      {outputs.map((id, index) => (
        <Handle
          key={`out-${id}`}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: handleOffset + index * handleSpacing }}
        />
      ))}

      {/* Optional footer */}
      {passThrough && (
        <div className="node-footer">Pass-through enabled</div>
      )}
    </div>
  );
}
