import { LitElement } from 'lit';
/**
 * A base class for all components in the application.
 */
export declare class PlBase extends LitElement {
    /**
     * Checks if the current element is in light mode.
     * @returns True if the mode is light, false if dark.
     */
    isLightMode(): boolean;
    /**
     * Checks if the current element is in dark mode.
     * @returns True if the mode is dark, false if light.
     */
    isDarkMode(): boolean;
    /**
     * Checks if the current element is in a right-to-left (RTL) layout.
     * @returns True if the element is in RTL layout, false otherwise.
     */
    isRTL(): boolean;
    /**
     * Emits a custom event from the component.
     * @param eventName - The name of the event to emit.
     * @param detail - Optional detail object to include with the event.
     */
    protected _emitEvent<T>(eventName: string, detail?: T): void;
}
//# sourceMappingURL=pl-base.d.ts.map