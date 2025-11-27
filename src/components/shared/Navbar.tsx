"use client";

import Link from "next/link";
import { Menu, Heart, Sparkles } from "lucide-react";
import { weddingDetails } from "@/lib/mockData";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    type: "bride" | "guest";
}

export function Navbar({ type }: NavbarProps) {
    const links = type === "bride"
        ? [
            { href: "/bride", label: "Dashboard" },
            { href: "#vendors", label: "Vendors" },
            { href: "#guests", label: "Guests" },
            { href: "#beauty", label: "Beauty" },
            { href: "#budget", label: "Budget" }, // Added Budget
        ]
        : [
            { href: "/guest", label: "Home" },
            { href: "#schedule", label: "Schedule" },
            { href: "#menu", label: "Menu" },
            { href: "#seating", label: "Seating" },
        ];

    return (
        <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu (Sheet) - Now on the left or main menu trigger */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="mr-2">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle className="font-serif text-2xl text-primary">{weddingDetails.couple}</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col space-y-4 mt-8">
                                    {links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    {/* Add visible links to mobile menu as well for completeness */}
                                    {type === "bride" && (
                                        <Link href="#ai-stylist" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                                            AI Planner
                                        </Link>
                                    )}
                                    <Link href="#gallery" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                                        Gallery
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <Link href="/" className="flex items-center space-x-2 group">
                            <Heart className="w-5 h-5 text-accent fill-accent group-hover:scale-110 transition-transform" />
                            <span className="font-serif text-xl font-semibold text-foreground hidden sm:inline-block">{weddingDetails.couple}</span>
                        </Link>
                    </div>

                    {/* Right Side: Visible Links & Theme Switcher */}
                    <div className="flex items-center space-x-4">
                        {/* Always Visible Links */}
                        <div className="hidden md:flex items-center space-x-6 mr-4">
                            {type === "bride" && (
                                <Link
                                    href="#ai-stylist"
                                    className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    AI Planner
                                </Link>
                            )}
                            <Link
                                href="#gallery"
                                className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                            >
                                Gallery
                            </Link>
                        </div>

                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}
