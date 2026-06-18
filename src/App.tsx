import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Machines from './pages/Machines';
import Grinders from './pages/Grinders';
import MachineCategory from './pages/MachineCategory';
import GrinderCategory from './pages/GrinderCategory';
import AccessoryCategory from './pages/AccessoryCategory';
import Accessories from './pages/Accessories';
import ProductDetail from './pages/ProductDetail';
import Coffee from './pages/Coffee';
import CoffeeDetail from './pages/CoffeeDetail';
import Tea from './pages/Tea';
import TeaDetail from './pages/TeaDetail';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <LoadingScreen>
      <ScrollToTop />
      <CustomCursor />
      <Navigation />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Machines */}
          <Route path="/machines" element={<Machines />} />
          <Route path="/machines/commercial" element={<MachineCategory />} />
          <Route path="/machines/multi-use" element={<MachineCategory />} />
          <Route path="/machines/home" element={<MachineCategory />} />
          <Route path="/machines/:slug" element={<ProductDetail />} />
          {/* Grinders */}
          <Route path="/grinders" element={<Grinders />} />
          <Route path="/grinders/on-demand" element={<GrinderCategory />} />
          <Route path="/grinders/single-dose" element={<GrinderCategory />} />
          <Route path="/grinders/:slug" element={<ProductDetail />} />
          {/* Accessories */}
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/tampers" element={<AccessoryCategory />} />
          <Route path="/accessories/cups" element={<AccessoryCategory />} />
          <Route path="/accessories/scales" element={<AccessoryCategory />} />
          <Route path="/accessories/hand-grinders" element={<AccessoryCategory />} />
          {/* Coffee & Tea */}
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/coffee/:slug" element={<CoffeeDetail />} />
          <Route path="/tea" element={<Tea />} />
          <Route path="/tea/:slug" element={<TeaDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </LoadingScreen>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
