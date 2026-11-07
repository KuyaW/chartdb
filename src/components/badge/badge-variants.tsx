import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2',
    {
        variants: {
            variant: {
                default:
                    'border-transparent bg-primary text-primary-foreground shadow-clay-sm hover:bg-primary/90',
                secondary:
                    'border-transparent bg-secondary text-secondary-foreground shadow-clay-sm hover:bg-secondary/80',
                destructive:
                    'border-transparent bg-destructive text-destructive-foreground shadow-clay-sm hover:bg-destructive/90',
                outline:
                    'border-border/80 bg-card/80 text-foreground shadow-clay-sm',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);
