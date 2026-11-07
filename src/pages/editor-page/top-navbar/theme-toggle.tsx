import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/button/button';
import { useTheme } from '@/hooks/use-theme';
import { useTranslation } from 'react-i18next';

export const ThemeToggle: React.FC = () => {
    const { effectiveTheme, setTheme } = useTheme();
    const { t } = useTranslation();
    const isDark = effectiveTheme === 'dark';
    const label = t(isDark ? 'theme.light' : 'theme.dark');

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-xl"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={label}
            title={label}
        >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
    );
};
