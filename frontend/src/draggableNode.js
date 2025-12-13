// frontend/src/nodes/DraggableNode.js
export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({
        nodeType,
        label,
      })
    );
    event.dataTransfer.effectAllowed = "move";
    event.target.style.cursor = "grabbing";
  };

  return (
    <div
      className={`draggable-node ${type}`}
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={(e) => (e.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "8px",
        backgroundColor: "#1c2536",
      }}
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
