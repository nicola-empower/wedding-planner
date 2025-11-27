import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guests } from "@/lib/mockData";
import { Search } from "lucide-react";

export function SeatingChart() {
    // Group guests by table
    const tables = guests.reduce((acc, guest) => {
        const table = guest.table ? String(guest.table) : "Unassigned";
        if (!acc[table]) acc[table] = [];
        acc[table].push(guest);
        return acc;
    }, {} as Record<string, typeof guests>);

    return (
        <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">Find Your Seat</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(tables).map(([table, tableGuests]) => (
                    <Card key={table}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">
                                {table === "Head Table" ? "Head Table" : `Table ${table}`}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                                {tableGuests.map((guest) => (
                                    <li key={guest.id}>{guest.name}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
