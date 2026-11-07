import React from 'react';
import { randomColor } from '@/lib/colors';
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
import type { Template } from '../../../templates-data/templates-data';
import { Badge } from '@/components/badge/badge';

export interface TemplateCardProps {
    template: Template;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    const { effectiveTheme } = useTheme();
    return (
        <a href={`/templates/${template.slug}`}>
            <div className="flex h-80 w-full cursor-pointer flex-col rounded-[1.75rem] border-2 border-white/70 bg-card shadow-clay transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-pink-400 hover:shadow-clay-lg dark:border-white/10">
                <div
                    className="h-2 rounded-t-[1.6rem]"
                    style={{ backgroundColor: randomColor() }}
                ></div>
                <div className="overflow-hidden p-1">
                    <img
                        src={
                            effectiveTheme === 'dark'
                                ? template.imageDark
                                : template.image
                        }
                        alt={template.name}
                        className="size-full rounded-xl object-fill"
                    />
                </div>
                <div className="mt-2 flex items-center justify-between px-2">
                    <div className="flex items-center gap-1">
                        <h3 className="cursor-pointer text-base font-extrabold tracking-tight">
                            {template.name}
                        </h3>
                    </div>
                    <div className="flex h-full flex-col justify-start pt-1">
                        <Tooltip>
                            <TooltipTrigger className="mr-1">
                                <img
                                    src={
                                        databaseSecondaryLogoMap[
                                            template.diagram.databaseType
                                        ]
                                    }
                                    className="h-5 max-w-fit"
                                    alt="database"
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                {
                                    databaseTypeToLabelMap[
                                        template.diagram.databaseType
                                    ]
                                }
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex p-2 text-sm text-muted-foreground">
                    {template.shortDescription}
                </div>
                <div className="flex flex-wrap gap-1 p-2">
                    {template.tags.map((tag) => (
                        <Badge
                            variant="outline"
                            key={`${template.slug}_${tag}`}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </a>
    );
};
