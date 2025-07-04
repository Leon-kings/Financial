import React from "react";
import { Hero } from "../../components/hero/Hero";
import { About } from "../about/About";
import { FactsSection } from "../facts/Facts";
import { Features } from "../features/Features";
import { Services } from "../services/Services";
import { CallbackForm } from "../../components/callback/CallbackForm";
import { Projects } from "../../components/projects/Projects";
import { Team } from "../team/Team";
import { Testimony } from "../testimony/Testimony";
import { FinancialFeatureSection } from "../features/FinancialFeatures";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FactsSection />
      <Features />
      <Services />
      <CallbackForm />
      <Projects />
      <Team />
      <Testimony />
      <FinancialFeatureSection/>
    </>
  );
};

