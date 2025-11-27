import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guests } from "@/lib/mockData";
import { Check, X, Clock } from "lucide-react";

export function GuestList() {
return (
<div className="space-y-4 mt-8">
<h2 className="text-2xl font-serif font-semibold">Guest List</h2>
<Card>
<CardHeader>
<CardTitle>All Guests</CardTitle>
</CardHeader>
<CardContent>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-muted-foreground border-b">
<tr>
<th className="py-2">Name</th>
<th className="py-2">RSVP</th>
<th className="py-2">Table</th>
<th className="py-2">Dietary</th>
<th className="py-2">Gift</th>
</tr>
</thead>
<tbody>
{guests.map((guest) => (
<tr key={guest.id} className="border-b last:border-0">
<td className="py-3 font-medium">{guest.name}</td>
<td className="py-3">
{guest.rsvp === "accepted" && <span className="flex items-center text-green-600"><Check className="w-4 h-4 mr-1" /> Accepted</span>}
{guest.rsvp === "declined" && <span className="flex items-center text-red-600"><X className="w-4 h-4 mr-1" /> Declined</span>}
{guest.rsvp === "pending" && <span className="flex items-center text-yellow-600"><Clock className="w-4 h-4 mr-1" /> Pending</span>}
</td>
<td className="py-3">{guest.table || "-"}</td>
<td className="py-3">{guest.diet}</td>
<td className="py-3">{guest.gift || "-"}</td>
</tr>
))}
</tbody>
</table>
</div>
</CardContent>
</Card>
</div>
);
}
