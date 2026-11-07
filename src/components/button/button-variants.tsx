import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground shadow-clay-button hover:-translate-y-px hover:brightness-105 active:shadow-clay-pressed',
                destructive:
                    'bg-destructive text-destructive-foreground shadow-clay-button hover:-translate-y-px hover:brightness-105 active:shadow-clay-pressed',
                outline:
                    'border border-white/70 bg-card text-foreground shadow-clay-sm hover:-translate-y-px hover:bg-card hover:shadow-clay dark:border-white/10',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-clay-sm hover:-translate-y-px hover:shadow-clay',
                ghost: 'text-foreground hover:bg-accent/80 hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-9 px-4 py-2',
                sm: 'h-8 rounded-xl px-3 text-xs',
                lg: 'h-11 rounded-2xl px-8',
                icon: 'size-9 rounded-xl',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);
