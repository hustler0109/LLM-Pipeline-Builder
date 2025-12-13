// import { PipelineToolbar } from './toolbar';
// import { PipelineUI } from './ui';
// import { SubmitButton } from './submit';

// function App() {
//   return (
//     <div>
//       <PipelineToolbar />
//       <PipelineUI />
//       <SubmitButton />
//     </div>
//   );
// }

// export default App;


// frontend/src/App.js
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <PipelineToolbar />
      </header>

      <main className="app-main">
        <PipelineUI />
      </main>

      <footer className="app-footer">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
