import { Navbar } from "@/components/shared/Navbar";
import { Gallery } from "@/components/shared/Gallery";
import { EventSchedule } from "@/components/guest/EventSchedule";
import { WeddingMenu } from "@/components/guest/WeddingMenu";
import { SeatingChart } from "@/components/guest/SeatingChart";

export default function GuestView() {
  return (
    <div className="min-h-screen">
      <Navbar type="guest" />
      <div className="p-4 max-w-md mx-auto pb-20">
        <h1 className="text-3xl font-serif text-primary mb-4 text-center mt-6">Welcome Guest</h1>
        <p className="text-muted-foreground mb-8 text-center">
          We are so excited to celebrate with you! Here is everything you need to know.
        </p>

        <div id="schedule" className="scroll-mt-20">
          <EventSchedule />
        </div>

        <div id="menu" className="scroll-mt-20">
          <WeddingMenu />
        </div>

        <div id="seating" className="scroll-mt-20">
          <SeatingChart />
        </div>

        <div id="gallery" className="scroll-mt-20">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
