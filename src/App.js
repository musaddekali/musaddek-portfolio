import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import './assets/global-styles/app-global.css';
import Layout from "./components/Layout/Layout";
import { Home, NoPage, Portfolio } from './pages';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial='false'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App;
