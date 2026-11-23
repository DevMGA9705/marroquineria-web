import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import LocationPage from './pages/LocationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/producto/:slug" element={<ProductDetailPage />} />
            <Route path="/novedades" element={<AnnouncementsPage />} />
            <Route path="/ubicacion" element={<LocationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;