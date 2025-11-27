"use client";

import { useTheme, Theme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const themes: Theme[] = ["sage", "ocean", "rose", "lavender"];

    const cycleTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={cycleTheme}
            className="text-muted-foreground hover:text-primary transition-colors"
            title={`Current theme: ${theme}`}
        >
            <Palette className="h-5 w-5" />
            <span className="sr-only">Change Theme</span>
        </Button>
    );
}
