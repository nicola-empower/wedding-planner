import { Navbar } from "@/components/shared/Navbar";
import { DashboardOverview } from "@/components/bride/DashboardOverview";
import { VendorList } from "@/components/bride/VendorList";
import { GuestList } from "@/components/bride/GuestList";
import { BridesmaidCorner } from "@/components/bride/BridesmaidCorner";
import { BeautySection } from "@/components/bride/BeautySection";
import { Gallery } from "@/components/shared/Gallery";
import { BudgetTracker } from "@/components/bride/BudgetTracker";

export default function BrideDashboard() {
  return (
    <div className="min-h-screen">
      <Navbar type="bride" />
      <div className="p-8 pb-20 max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-primary mb-4">Bride Dashboard</h1>
        <p className="text-muted-foreground mb-8">Welcome to your wedding planning center.</p>

        <DashboardOverview />
        <BudgetTracker />

        <div id="vendors" className="scroll-mt-20">
          <VendorList />
        </div>

        <div id="guests" className="scroll-mt-20">
          <GuestList />
        </div>

        <div id="ai-stylist" className="scroll-mt-20">
          <BridesmaidCorner />
        </div>

        <div id="beauty" className="scroll-mt-20">
          <BeautySection />
        </div>

        <div id="gallery" className="scroll-mt-20">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
