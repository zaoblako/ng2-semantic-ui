import { OnInit, ElementRef, Renderer2, EventEmitter, ViewContainerRef, AfterViewInit } from "@angular/core";
import { IDynamicClasses, SuiComponentFactory } from "../../../misc/util/index";
import { TransitionController } from "../../transition/index";
import { ModalControls, ModalResult } from "../classes/modal-controls";
import { ModalConfig, ModalSize } from "../classes/modal-config";
export declare class SuiModal<T, U> implements OnInit, AfterViewInit {
    private _renderer;
    private _element;
    private _componentFactory;
    isClosable: boolean;
    closeResult: U;
    controls: ModalControls<T, U>;
    readonly approve: ModalResult<T>;
    readonly deny: ModalResult<U>;
    onApprove: EventEmitter<T>;
    onDeny: EventEmitter<U>;
    onDismiss: EventEmitter<void>;
    private _modalElement;
    size: ModalSize;
    private _isFullScreen;
    isFullScreen: boolean;
    isBasic: boolean;
    private _mustScroll;
    private _mustAlwaysScroll;
    mustScroll: boolean;
    private _isInverted;
    isInverted: boolean;
    transitionController: TransitionController;
    transition: string;
    transitionDuration: number;
    dimBackground: boolean;
    private _isClosing;
    templateSibling: ViewContainerRef;
    private _originalContainer?;
    readonly dynamicClasses: IDynamicClasses;
    constructor(_renderer: Renderer2, _element: ElementRef, _componentFactory: SuiComponentFactory);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    loadConfig<V>(config: ModalConfig<V, T, U>): void;
    private dismiss(callback?);
    close(): void;
    private updateScroll();
    onClick(e: MouseEvent): void;
    onDocumentKeyUp(e: KeyboardEvent): void;
    onDocumentResize(): void;
}
