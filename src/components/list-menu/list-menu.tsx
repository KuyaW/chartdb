import React from 'react';
import { Link } from '@/components/link/link';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ListMenuItem {
    title: string;
    href: string;
    icon?: LucideIcon;
    selected?: boolean;
}
export interface ListMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ListMenuItem[];
}

export const ListMenu = React.forwardRef<HTMLDivElement, ListMenuProps>(
    ({ className, items }, ref) => {
        return (
            <div className={cn('flex flex-col gap-1', className)} ref={ref}>
                {items.map((item) => (
                    <Link
                        key={item.href}
                        className={cn(
                            'flex h-8 w-full items-center gap-2 rounded-xl px-2.5 text-sm transition-all hover:no-underline',
                            item.selected
                                ? 'bg-card font-bold text-primary shadow-clay-sm'
                                : 'text-muted-foreground hover:bg-card/70 hover:text-foreground'
                        )}
                        href={item.href}
                    >
                        {item.icon ? (
                            <item.icon
                                size="14"
                                strokeWidth={item.selected ? 2.4 : 2}
                            />
                        ) : null}
                        <span className="min-w-0 truncate">{item.title}</span>
                    </Link>
                ))}
            </div>
        );
    }
);

ListMenu.displayName = 'ListMenu';
