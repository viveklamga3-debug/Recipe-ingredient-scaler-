/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ScalerTool } from './pages/ScalerTool';
import { HowItWorks } from './pages/HowItWorks';
import { CookingTips } from './pages/CookingTips';
import { MastersRecipes } from './pages/MastersRecipes';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="scaler" element={<ScalerTool />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="tips" element={<CookingTips />} />
            <Route path="recipes" element={<MastersRecipes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
