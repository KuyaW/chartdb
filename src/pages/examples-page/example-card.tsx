import React, { useRef } from 'react';
import type { Example } from './examples-data/examples-data';
import { randomColor } from '@/lib/colors';
import { Import } from 'lucide-react';
import { Label } from '@/components/label/label';
import { Button } from '@/components/button/button';
import {
    databaseSecondaryLogoMap,
    databaseTypeToLabelMap,
} from '@/lib/databases';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/tooltip/tooltip';
import { useTheme } from '@/hooks/use-theme';
import { Spinner } from '@/components/spinner/spinner';

export interface ExampleCardProps {
    example: Example;
    utilizeExample: () => void;
    loading: boolean;
}

export const ExampleCard: React.FC<ExampleCardProps> = ({
    example,
    utilizeExample,
    loading,
}) => {
    const { effectiveTheme } = useTheme();
    const color = useRef(randomColor());

    return (
        <div
            onClick={utilizeExample}
            className="flex h-96 w-full cursor-pointer flex-col rounded-[1.75rem] border-2 border-white/70 bg-card shadow-clay transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-pink-400 hover:shadow-clay-lg dark:border-white/10"
        >
            <div
                className="h-4 rounded-t-[1.6rem]"
                style={{ backgroundColor: color.current }}
            ></div>
            <div className="flex h-12 items-center justify-between bg-muted/80 px-3">
                <div className="flex items-center gap-2">
                    <Tooltip>
                        <TooltipTrigger className="mr-1">
                            <img
                                src={
                                    databaseSecondaryLogoMap[
                                        example.diagram.databaseType
                                    ]
                                }
                                className="h-5 max-w-fit"
                                alt="database"
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            {
                                databaseTypeToLabelMap[
                                    example.diagram.databaseType
                                ]
                            }
                        </TooltipContent>
                    </Tooltip>
                    <Label className="cursor-pointer text-base font-extrabold tracking-tight">
                        {example.name}
                    </Label>
                </div>
                <div className="flex flex-row">
                    {loading ? (
                        <Spinner className="size-5" />
                    ) : (
                        <Button
                            variant="ghost"
                            className="size-9 p-0 text-slate-500 hover:bg-primary-foreground hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                        >
                            <Import className="size-5" />
                        </Button>
                    )}
                </div>
            </div>
            <div className="grow overflow-hidden">
                <img
                    src={
                        effectiveTheme === 'dark'
                            ? example.imageDark
                            : example.image
                    }
                    alt={example.name}
                    className="w-fit object-cover"
                />
            </div>
            <div className="flex p-3 text-base text-muted-foreground">
                {example.description}
            </div>
        </div>
    );
};
