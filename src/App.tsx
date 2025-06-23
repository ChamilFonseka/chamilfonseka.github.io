import { useState } from "react";
import Intro from "./components/Intro";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <main>
      {loading ? (
        <Loader onLoadComplete={handleLoadComplete} />
      ) : (
        <Intro />
      )}
    </main>
  );
}

export default App;
