import {Input, Output, EventEmitter } from '@angular/core'
import { UaInputBase } from './ua-input-base'

export interface UaQuickButton {
    label:string;
    value:any;
    glyph:string;
    color:string;
}

export class UaQuickInputBase extends UaInputBase {
    @Input()
    buttons:UaQuickButton[] = [];

    @Output()
    clickButton = new EventEmitter();

    constructor() { super() }

    onClickButton(btn, $event) {
        console.log("UaQuickInputBase.onClickButton",btn,$event);
        this.clickButton.emit(btn);
    }
}