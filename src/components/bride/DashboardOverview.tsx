import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { budget, guests, tasks, weddingDetails } from "@/lib/mockData";
import { Calendar, CheckSquare, DollarSign, Users } from "lucide-react";

export function DashboardOverview() {
const completedTasks = tasks.filter((t) => t.completed).length;
const totalTasks = tasks.length;
const progress = Math.round((completedTasks / totalTasks) * 100);

const confirmedGuests = guests.filter((g) => g.rsvp === "accepted").length;

return (
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
<Card>
<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
<CardTitle className="text-sm font-medium">Total Budget</CardTitle>
<DollarSign className="h-4 w-4 text-muted-foreground" />
</CardHeader>
<CardContent>
<div className="text-2xl font-bold">£{budget.total.toLocaleString()}</div>
<p className="text-xs text-muted-foreground">
£{budget.paid.toLocaleString()} paid
</p>
</CardContent>
</Card>
<Card>
<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
<CardTitle className="text-sm font-medium">Guest Count</CardTitle>
<Users className="h-4 w-4 text-muted-foreground" />
</CardHeader>
<CardContent>
<div className="text-2xl font-bold">{confirmedGuests}</div>
<p className="text-xs text-muted-foreground">
{guests.length} invited
</p>
</CardContent>
</Card>
<Card>
<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
<CardTitle className="text-sm font-medium">Tasks</CardTitle>
<CheckSquare className="h-4 w-4 text-muted-foreground" />
</CardHeader>
<CardContent>
<div className="text-2xl font-bold">{progress}%</div>
<p className="text-xs text-muted-foreground">
{completedTasks} of {totalTasks} completed
</p>
</CardContent>
</Card>
<Card>
<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
<CardTitle className="text-sm font-medium">Days to Go</CardTitle>
<Calendar className="h-4 w-4 text-muted-foreground" />
</CardHeader>
<CardContent>
<div className="text-2xl font-bold">
    {Math.ceil((new Date(weddingDetails.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}
</div>
<p className="text-xs text-muted-foreground">
{new Date(weddingDetails.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
</p>
</CardContent>
</Card>
</div>
);
}
