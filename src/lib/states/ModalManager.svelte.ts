
export interface ModalManager<Args extends any[]> {
    show(...args: Args): void;
    hide(): void;
    isActive(): boolean;
}
