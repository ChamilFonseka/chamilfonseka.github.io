import { useState } from "react";
import Intro from "./components/Intro";
import Loader from "./components/Loader";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <main className="w-full max-w-7xl min-h-dvh mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-8 lg:py-16">
      {loading ? (
        <Loader onLoadComplete={handleLoadComplete} />
      ) : (
        <>
          <Intro />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
        </>
      )}
    </main>
  );
}

export default App;
