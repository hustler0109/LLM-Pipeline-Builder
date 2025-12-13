import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  /* -----------------------------
     State
  ----------------------------- */
  nodes: [],
  edges: [],
  nodeIDs: {},

  /* -----------------------------
     Helpers
  ----------------------------- */
  getNodeID: (type) => {
    const nodeIDs = { ...get().nodeIDs };

    if (!nodeIDs[type]) {
      nodeIDs[type] = 0;
    }

    nodeIDs[type] += 1;
    set({ nodeIDs });

    return `${type}-${nodeIDs[type]}`;
  },

  /* -----------------------------
     Node actions
  ----------------------------- */
  addNode: (node) => {
    set((state) => ({
      nodes: [...state.nodes, node],
    }));
  },

  onNodesChange: (changes) => {
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    }));
  },

  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                [fieldName]: fieldValue,
              },
            }
          : node
      ),
    }));
  },

  /* -----------------------------
     Edge actions
  ----------------------------- */
  onEdgesChange: (changes) => {
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));
  },

  onConnect: (connection) => {
    set((state) => ({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
            width: 20,
            height: 20,
          },
        },
        state.edges
      ),
    }));
  },
}));
