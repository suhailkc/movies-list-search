import "./css/App.css";
import Navbar from "./components/Navbar";
import Favroites from "./pages/Favorites";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favroites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
