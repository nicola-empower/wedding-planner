import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { menu } from "@/lib/mockData";
import { Utensils } from "lucide-react";

export function WeddingMenu() {
    return (
        <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">The Menu</h2>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Utensils className="w-5 h-5 mr-2" /> Wedding Breakfast
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-serif text-lg font-medium text-primary mb-2">Starters</h3>
                        <ul className="space-y-2">
                            {menu.starters.map((item, i) => (
                                <li key={i}>
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-muted-foreground">{item.description}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg font-medium text-primary mb-2">Mains</h3>
                        <ul className="space-y-2">
                            {menu.mains.map((item, i) => (
                                <li key={i}>
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-muted-foreground">{item.description}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg font-medium text-primary mb-2">Desserts</h3>
                        <ul className="space-y-2">
                            {menu.desserts.map((item, i) => (
                                <li key={i}>
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-muted-foreground">{item.description}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
