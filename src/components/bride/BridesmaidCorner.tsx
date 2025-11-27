"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Palette, Sparkles, Loader2, HeartHandshake, Info } from "lucide-react";
import { generatePalette, generateWeddingWisdom } from "@/app/actions";
import { weddingDetails } from "@/lib/mockData";

interface Color {
    name: string;
    hex: string;
    reason: string;
}

interface PaletteResult {
    season: string;
    analysis: string;
    palette: Color[];
}

export function BridesmaidCorner() {
    const [loading, setLoading] = useState(false);
    const [wisdomLoading, setWisdomLoading] = useState(false);
    const [wisdom, setWisdom] = useState<string | null>(null);

    // Form State
    const [skinTone, setSkinTone] = useState("Medium");
    const [hairColor, setHairColor] = useState("Brunette");
    const [eyeColor, setEyeColor] = useState("Brown");
    const [preferences, setPreferences] = useState("");
    const [avoids, setAvoids] = useState("");

    const [result, setResult] = useState<PaletteResult | null>(null);

    const handleGenerate = async () => {
        setLoading(true);
        const data = await generatePalette(
            "Sage Green & Gold Wedding",
            skinTone,
            hairColor,
            eyeColor,
            preferences,
            avoids
        );
        if (data) {
            setResult(data);
        }
        setLoading(false);
    };

    const handleWisdom = async () => {
        setWisdomLoading(true);
        const text = await generateWeddingWisdom();
        setWisdom(text);
        setWisdomLoading(false);
    };

    return (
        <div className="space-y-6 mt-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif font-semibold">AI Style & Wisdom</h2>
            </div>

            {/* AI Stylist Card */}
            <Card className="border-primary/20 shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                        <Sparkles className="w-5 h-5 mr-2 text-primary" />
                        Advanced AI Stylist
                    </CardTitle>
                    <CardDescription>
                        Get a personalised colour palette based on your features and preferences.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="skinTone">Skin Tone</Label>
                            <select
                                id="skinTone"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={skinTone}
                                onChange={(e) => setSkinTone(e.target.value)}
                            >
                                <option>Fair</option>
                                <option>Light</option>
                                <option>Medium</option>
                                <option>Olive</option>
                                <option>Tan</option>
                                <option>Deep</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="hairColor">Hair Colour</Label>
                            <select
                                id="hairColor"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={hairColor}
                                onChange={(e) => setHairColor(e.target.value)}
                            >
                                <option>Blonde</option>
                                <option>Brunette</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Grey/Silver</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="eyeColor">Eye Colour</Label>
                            <select
                                id="eyeColor"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={eyeColor}
                                onChange={(e) => setEyeColor(e.target.value)}
                            >
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Hazel</option>
                                <option>Brown</option>
                                <option>Grey</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="preferences">I love...</Label>
                            <Input
                                id="preferences"
                                placeholder="e.g. Pastels, Jewel tones"
                                value={preferences}
                                onChange={(e) => setPreferences(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="avoids">Please avoid...</Label>
                            <Input
                                id="avoids"
                                placeholder="e.g. Orange, Neon"
                                value={avoids}
                                onChange={(e) => setAvoids(e.target.value)}
                            />
                        </div>
                    </div>

                    <Button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full md:w-auto"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Designing...
                            </>
                        ) : (
                            <>
                                <Palette className="w-4 h-4 mr-2" /> Generate My Palette
                            </>
                        )}
                    </Button>

                    {result && (
                        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="font-serif text-lg font-semibold text-primary">
                                        {result.season} Palette
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{result.analysis}</p>
                                    <p className="text-xs text-muted-foreground/80 mt-1 italic">
                                        Analysis based on standard colour theory. Wedding etiquette filters applied (No White/Black/Red).
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {result.palette.map((color, index) => (
                                    <div key={index} className="space-y-2 group">
                                        <div
                                            className="h-24 rounded-md shadow-sm border border-border transition-transform group-hover:scale-105"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <div className="text-center">
                                            <p className="font-medium text-sm">{color.name}</p>
                                            <p className="text-xs text-muted-foreground uppercase">{color.hex}</p>
                                        </div>
                                        <p className="text-xs text-muted-foreground text-center italic opacity-0 group-hover:opacity-100 transition-opacity">
                                            {color.reason}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Wedding Wisdom Card */}
            <Card className="bg-stone-50 border-stone-200">
                <CardHeader>
                    <CardTitle className="flex items-center text-lg text-stone-700">
                        <HeartHandshake className="w-5 h-5 mr-2" /> Wedding Wisdom
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="flex-1">
                            {wisdom ? (
                                <p className="text-stone-600 italic font-serif text-lg leading-relaxed">
                                    &quot;{wisdom}&quot;
                                </p>
                            ) : (
                                <p className="text-stone-500 text-sm">
                                    Feeling overwhelmed? Ask for a little piece of advice to keep you grounded.
                                </p>
                            )}
                        </div>
                        <Button
                            variant="outline"
                            onClick={handleWisdom}
                            disabled={wisdomLoading}
                            className="border-stone-300 text-stone-600 hover:bg-stone-100"
                        >
                            {wisdomLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Get Advice"}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Dress Styles (Keep existing) */}
            <Card>
                <CardHeader>
                    <CardTitle>Dress Inspiration</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-64 rounded-md overflow-hidden relative group">
                            <img
                                src="/sage green bridesmaid.jpg"
                                alt="Bridesmaid Dress Style A"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-2 text-center text-sm backdrop-blur-sm">
                                Classic Sage
                            </div>
                        </div>
                        <div className="h-64 rounded-md overflow-hidden relative group">
                            <img
                                src="/gold bridesmaid.jpg"
                                alt="Bridesmaid Dress Style B"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-2 text-center text-sm backdrop-blur-sm">
                                Modern Gold
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
