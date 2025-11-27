import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { budget } from "@/lib/mockData";
import { DollarSign, TrendingUp, AlertCircle } from "lucide-react";

export function BudgetTracker() {
    const totalPaid = budget.breakdown.reduce((acc, item) => acc + item.paid, 0);
    const totalDue = budget.breakdown.reduce((acc, item) => acc + item.due, 0);
    const totalActual = budget.breakdown.reduce((acc, item) => acc + item.actual, 0);
    const percentagePaid = Math.round((totalPaid / totalActual) * 100);

    return (
        <div className="space-y-6 mt-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-semibold">Budget Tracker</h2>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-primary">Total Budget</CardTitle>
                        <DollarSign className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">£{budget.total.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            Estimated: £{budget.estimated.toLocaleString()}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-700">£{totalPaid.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            {percentagePaid}% of total
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Remaining Due</CardTitle>
                        <AlertCircle className="h-4 w-4 text-rose-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-rose-600">£{totalDue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                            Outstanding balance
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Detailed Breakdown */}
            <Card>
                <CardHeader>
                    <CardTitle>Category Breakdown</CardTitle>
                    <CardDescription>Track your spending across all categories.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {budget.breakdown.map((item, index) => {
                            const percent = Math.min(Math.round((item.paid / item.actual) * 100), 100);
                            return (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="font-medium">{item.category}</div>
                                        <div className="text-muted-foreground">
                                            £{item.paid.toLocaleString()} / £{item.actual.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all duration-500"
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>{percent}% Paid</span>
                                        <span>£{item.due.toLocaleString()} Due</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
