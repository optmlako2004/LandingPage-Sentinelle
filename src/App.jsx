import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Changelog from './pages/Changelog';
import ApiReference from './pages/ApiReference';
import Status from './pages/Status';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import CGU from './pages/CGU';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/api-reference" element={<ApiReference />} />
        <Route path="/status" element={<Status />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/cgu" element={<CGU />} />
      </Route>
    </Routes>
  );
}

export default App;
