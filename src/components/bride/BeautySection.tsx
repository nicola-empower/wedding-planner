import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles } from "lucide-react";

export function BeautySection() {
return (
<div className="space-y-4 mt-8">
<h2 className="text-2xl font-serif font-semibold">Beauty Prep</h2>
<div className="grid gap-4 md:grid-cols-2">
<Card>
<CardHeader>
<CardTitle className="flex items-center">
<Scissors className="w-5 h-5 mr-2" /> Hair & Makeup
</CardTitle>
</CardHeader>
<CardContent>
<div className="space-y-2">
<div className="flex justify-between items-center border-b pb-2">
<span>Trial with Sarah</span>
<span className="text-muted-foreground text-sm">Jan 15, 2026</span>
</div>
<div className="flex justify-between items-center border-b pb-2">
<span>Wedding Day Glam</span>
<span className="text-muted-foreground text-sm">Aug 15, 2026</span>
</div>
</div>
</CardContent>
</Card>
<Card>
<CardHeader>
<CardTitle className="flex items-center">
<Sparkles className="w-5 h-5 mr-2" /> Nails
</CardTitle>
</CardHeader>
<CardContent>
<div className="space-y-2">
<div className="flex justify-between items-center border-b pb-2">
<span>Manicure Appointment</span>
<span className="text-muted-foreground text-sm">Aug 13, 2026</span>
</div>
</div>
</CardContent>
</Card>
</div>
</div>
);
}
