import React from "react";
import "./App.css";
import { Navbar } from "./components/nav/Navbar";

import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/notfound/Notfound";
import { Testimony } from "./pages/testimony/Testimony";
import { About } from "./pages/about/About";
import { Services } from "./pages/services/Services";
import { CallbackForm } from "./components/callback/CallbackForm";
import { Projects } from "./components/projects/Projects";
import { Features } from "./pages/features/Features";
import { Team } from "./pages/team/Team";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/63720" element={<Testimony />} />
            <Route path="/89292" element={<About />} />
            <Route path="/72820" element={<Services />} />
            <Route path="/89201" element={<CallbackForm />} />
            <Route path="/76282" element={<Projects />} />
            <Route path="/13262" element={<Features />} />
           <Route path="/71810" element={<Team />} />
            {/* Add more routes here as needed */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
