import Link from "next/link";
import { Heart, Users } from "lucide-react";
import { VideoHeader } from "@/components/shared/VideoHeader";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <VideoHeader />

      <div className="flex-1 flex flex-col items-center justify-center p-8 -mt-20 z-30 relative">
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Bride View Card */}
          <Link
            href="/bride"
            className="group relative overflow-hidden rounded-xl border border-border bg-card/95 backdrop-blur-sm p-8 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center gap-4 shadow-lg"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-serif font-semibold">Bride & Groom</h2>
            <p className="text-muted-foreground">
              Plan your perfect day. Manage vendors, guests, budget, and more.
            </p>
          </Link>

          {/* Guest View Card */}
          <Link
            href="/guest"
            className="group relative overflow-hidden rounded-xl border border-border bg-card/95 backdrop-blur-sm p-8 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center gap-4 shadow-lg"
          >
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-2xl font-serif font-semibold">Guest View</h2>
            <p className="text-muted-foreground">
              View wedding details, RSVP, and share your photos with the couple.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
