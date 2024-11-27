import { useState } from "react";
import { ChevronRight, ChevronDown, Terminal } from "lucide-react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-panel p-6 m-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Terminal className="w-6 h-6 text-console-cyan" />
          <h1 className="typing-container font-code text-xl">
            Symbolic Reasoning Prompt Generator
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          {["Home", "Templates", "Documentation", "About"].map((item) => (
            <button key={item} className="console-button">
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row gap-4 p-4">
        {/* Sidebar */}
        <aside className={`glass-panel p-4 md:w-64 animate-matrix-fade ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-console-cyan font-code">Categories</h2>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden console-button p-1"
            >
              {sidebarOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
          <ul className="space-y-2">
            {[
              "Mathematical Logic",
              "Abstract Algebra",
              "Set Theory",
              "Symbolic Systems",
              "Real-World Simulations"
            ].map((category) => (
              <li key={category}>
                <button className="w-full text-left console-button">
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Workspace */}
        <section className="flex-1 glass-panel p-6 animate-matrix-fade">
          <div className="space-y-6">
            <div>
              <label className="block text-console-cyan mb-2">Prompt Overview</label>
              <textarea 
                className="console-input w-full h-24"
                placeholder="Describe the purpose or goal of the prompt..."
              />
            </div>

            <div>
              <label className="block text-console-cyan mb-2">Domain Selection</label>
              <select className="console-input w-full">
                <option value="">Select domain...</option>
                <option value="infosec">Information Security</option>
                <option value="ethics">Ethics</option>
                <option value="ai">AI Systems</option>
                <option value="society">Societal Issues</option>
              </select>
            </div>

            <div>
              <label className="block text-console-cyan mb-2">Set Definitions</label>
              <textarea 
                className="console-input w-full h-32"
                placeholder="Define your sets and subsets here..."
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="console-button flex-1">
                Preview
              </button>
              <button className="console-button flex-1">
                Generate
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;