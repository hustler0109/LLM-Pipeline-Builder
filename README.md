# LLM Pipeline Builder 

🔗 **Live Demo:** https://vector-shift-asgt.vercel.app/

VectorShift is a **visual pipeline builder** for constructing and validating **LLM-based workflows** using a node-based interface. Users can connect different pipeline components into a **Directed Acyclic Graph (DAG)** and validate the structure before execution.

The project focuses on **clear data flow, correctness, and explainability**, rather than hidden abstractions.

---

## 🚀 Features

- Node-based visual pipeline editor  
- Explicit **Input → Text → LLM → Output** flow  
- DAG validation (cycle detection)  
- Pipeline analysis on submission  
- Clean and minimal UI for clarity  

---

## 🏗️ High-Level System Architecture

[ User / Browser ]
↓
[ React Frontend UI ]
(Pipeline Builder)
↓
[ Graph State Manager ]
(Nodes + Edges Store)
↓
[ DAG Validation Engine ]
(Cycle Check, Counts)
↓
[ Pipeline Analysis Output ]
(Nodes | Edges | DAG Status)

**Explanation**
- The **UI** allows users to visually construct pipelines
- **Graph State** maintains nodes and edges
- **DAG Validator** ensures the pipeline is acyclic
- **Analysis Output** summarizes pipeline validity

---

## 🧠 LLM Pipeline Flow

[ Input Node ]
↓
[ Text / Prompt Node ]
↓
[ LLM Node ]
↓
[ Output Node ]


### Node Responsibilities
- **Input Node** – Entry point for data
- **Text Node** – Prompt or instruction formatting
- **LLM Node** – Represents model processing
- **Output Node** – Captures final result

---

## ✅ DAG Validation Logic

[ Submit Pipeline ]
↓
[ Collect Nodes & Edges ]
↓
[ Check for Cycles ]
┌───────────────┐
│ │
NO YES
│ │
↓ ↓
[ Valid DAG ] [ Invalid Pipeline ]
↓
[ Display Analysis ]


This guarantees:
- No infinite loops  
- Predictable execution order  
- Safe pipeline structure  

---

## 🧩 Component Responsibility Breakdown

[ UI Layer ]

Node creation

Edge connections

User interactions

[ State Management ]

Store nodes

Store edges

Track graph updates

[ Graph Logic ]

Validate connections

Enforce DAG constraints

[ Validation Engine ]

Cycle detection

Node & edge counting

Final verification

---

## 📊 Example Pipeline Analysis Output

Pipeline Analysis
Nodes: 4
Edges: 3
Is DAG: Yes ✅

---

## 🛠️ Tech Stack

- **Frontend:** React  
- **State & Graph Logic:** Custom DAG handling  
- **Deployment:** Vercel  
- **Architecture Pattern:** Directed Acyclic Graph (DAG)  

---

## 📦 Local Setup

```bash
git clone https://github.com/hustler0109/VectorShift-asgt.git
cd VectorShift-asgt
npm install
npm run dev
Then open:
http://localhost:3000

🎯 Design Philosophy
Explicit over implicit

Validation before execution

Visual clarity over configuration complexity

Explainable and inspectable pipelines

🔮 Future Enhancements
Pipeline execution engine

LLM provider integration

Save & load pipeline configurations

Export pipeline as JSON

Error highlighting for invalid connections

👤 Author
Shristy Joshi Thakur

Focus areas:

AI & LLM systems

Scalable architectures

Product-driven engineering


