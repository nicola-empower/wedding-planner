import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { vendors } from "@/lib/mockData";
import { Check, Star, MapPin, Phone, Mail, Globe, Users } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function VendorList() {
    return (
        <div className="space-y-4 mt-8">
            <h2 className="text-2xl font-serif font-semibold">Vendors</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {vendors.map((vendor) => (
                    <Dialog key={vendor.id}>
                        <DialogTrigger asChild>
                            <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-48 relative">
                                    <img
                                        src={vendor.image}
                                        alt={vendor.category}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {vendor.booked && (
                                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs flex items-center shadow-sm">
                                            <Check className="w-3 h-3 mr-1" /> Booked
                                        </div>
                                    )}
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{vendor.name}</CardTitle>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
                                        {vendor.rating}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">{vendor.category}</span>
                                        <span className="font-semibold">£{vendor.cost}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-serif text-primary">{vendor.name}</DialogTitle>
                                <DialogDescription className="text-base">
                                    {vendor.category} • £{vendor.cost}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="h-64 w-full rounded-md overflow-hidden">
                                    <img
                                        src={vendor.image}
                                        alt={vendor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {vendor.description}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                                        {vendor.location}
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-4 h-4 mr-2 text-primary" />
                                        {vendor.contact}
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-4 h-4 mr-2 text-primary" />
                                        {vendor.email}
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="w-4 h-4 mr-2 text-primary" />
                                        {vendor.website}
                                    </div>
                                    {vendor.capacity && (
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 mr-2 text-primary" />
                                            {vendor.capacity}
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-end mt-4">
                                    <Button className="w-full md:w-auto">Contact Vendor</Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
