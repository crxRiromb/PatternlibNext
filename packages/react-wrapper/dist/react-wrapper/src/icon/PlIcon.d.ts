import { default as React } from 'react';

interface PlIconProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * The name of the icon to display.
     * @default 'globe'
     */
    iconName?: string;
    /**
     * The alternative text for the icon.
     * @default ''
     */
    alt?: string;
}
export declare const PlIcon: React.FC<PlIconProps>;
export {};
