import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Character from "./pages/Character";
import CharacterCardPages from "./pages/CharacterCardPages";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Storyboard from "./pages/Storyboard";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="character" element={<Character />} />
        <Route path="storyboard" element={<Storyboard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="character-card" element={<CharacterCardPages />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
