import "./App.css";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-background">
      <Navbar />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;
