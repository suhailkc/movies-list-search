import "./css/App.css";
import Navbar from "./components/Navbar";
import Favroites from "./pages/Favorites";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favroites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
