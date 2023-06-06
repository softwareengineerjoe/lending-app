import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import LearnMore from "./pages/LearnMore";
import SidePanelR from "./components/SidePanelR";
import SidePanelL from "./components/SidePanelL";
import Payment from "./pages/Payment/Payment";
import Card from "./pages/Payment/Card/Card";
import Apply from "./pages/BorrowNow/Apply";
import Cashout from "./pages/Cashout/Cashout";
import OTC from "./pages/Cashout/OTC/OTC";
import Cebuana from "./pages/Cashout/OTC/Cebuana/Cebuana";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Settings from "./pages/Settings";

export default function App() {
  const { pathname } = useLocation();
  const hideMainElement = ["/register", "/login", "/landing-page"].includes(pathname);
  return (
    <>
      <div className="min-h-full">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/transactions" element={<Navbar />} />
          <Route path="/learn-more" element={<Navbar />} />
          <Route path="/payment" element={<Navbar />} />
          <Route path="/payment/card" element={<Navbar />} />
          <Route path="/apply-loan" element={<Navbar />} />
          <Route path="/cashout" element={<Navbar />} />
          <Route path="/cashout/otc" element={<Navbar />} />
          <Route path="/cashout/otc/cebuana" element={<Navbar />} />
          <Route path="/otc" element={<Navbar />} />
          <Route path="/settings" element={<Navbar />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!hideMainElement && (
        <main>
          <div className="mx-auto w-7xl max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0 flex flex-row justify-between">
              <div>
                <Routes>
                  <Route path="/" element={<SidePanelL />} />
                  <Route path="/transactions" element={<SidePanelL />} />
                  <Route path="/learn-more" element={<SidePanelL />} />
                  <Route path="/payment" element={<SidePanelL />} />
                  <Route path="/payment/card" element={<SidePanelL />} />
                  <Route path="/apply-loan" element={<SidePanelL />} />
                  <Route path="/cashout" element={<SidePanelL />} />
                  <Route path="/cashout/otc" element={<SidePanelL />} />
                  <Route path="/cashout/otc/cebuana" element={<SidePanelL />} />
                  <Route path="/otc" element={<SidePanelL />} />
                  <Route path="/settings" element={<SidePanelL />} />
                </Routes>
              </div>
              <div className="max-w-2xl w-full px-2">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/learn-more" element={<LearnMore />} />
                  <Route path="/payment">
                    <Route index element={<Payment />} />
                    <Route path="card" element={<Card />} />
                  </Route>
                  <Route path="/apply-loan" element={<Apply />} />
                  <Route path="/cashout">
                    <Route index element={<Cashout />} />
                    <Route path="otc" element={<OTC />} />
                    <Route path="otc/cebuana" element={<Cebuana />} />
                  </Route>
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<SidePanelR />} />
                  <Route path="/transactions" element={<SidePanelR />} />
                  <Route path="/learn-more" element={<SidePanelR />} />
                  <Route path="/payment" element={<SidePanelR />} />
                  <Route path="/payment/card" element={<SidePanelR />} />
                  <Route path="/apply-loan" element={<SidePanelR />} />
                  <Route path="/cashout" element={<SidePanelR />} />
                  <Route path="/cashout/otc" element={<SidePanelR />} />
                  <Route path="/cashout/otc/cebuana" element={<SidePanelR />} />
                  <Route path="/otc" element={<SidePanelR />} />
                  <Route path="/settings" element={<SidePanelR />} />
                </Routes>
              </div>
            </div>
          </div>
        </main>)}
      </div>
    </>
  );
}
