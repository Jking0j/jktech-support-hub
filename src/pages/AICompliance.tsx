import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIComplianceHero from "@/components/AIComplianceHero";
import AIComplianceProblem from "@/components/AIComplianceProblem";
import AIComplianceDeliverables from "@/components/AIComplianceDeliverables";
import AIComplianceProcess from "@/components/AIComplianceProcess";
import AICompliancePricing from "@/components/AICompliancePricing";
import AIComplianceScope from "@/components/AIComplianceScope";
import AIComplianceContact from "@/components/AIComplianceContact";

const AICompliance = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "AI Compliance Audit for Allied Health | JKTechSolutions";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AIComplianceHero />
        <AIComplianceProblem />
        <AIComplianceDeliverables />
        <AIComplianceProcess />
        <AICompliancePricing />
        <AIComplianceScope />
        <AIComplianceContact />
      </main>
      <Footer />
    </div>
  );
};

export default AICompliance;
