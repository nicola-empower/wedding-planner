import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { schedule } from "@/lib/mockData";
import { Clock, MapPin } from "lucide-react";

export function EventSchedule() {
    return (
        <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">Order of the Day</h2>
            <div className="space-y-4">
                {schedule.map((item, index) => (
                    <Card key={index}>
                        <CardContent className="flex items-center p-4">
                            <div className="shrink-0 w-16 text-center border-r pr-4 mr-4">
                                <span className="block text-lg font-bold text-primary">{item.time}</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{item.event}</h3>
                                <div className="flex items-center text-sm text-muted-foreground mt-1">
                                    <MapPin className="w-3 h-3 mr-1" /> {item.location}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
