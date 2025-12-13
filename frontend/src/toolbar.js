// frontend/src/toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="pipeline-toolbar">
      <div className="pipeline-toolbar-items">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
      </div>
    </div>
  );
};
