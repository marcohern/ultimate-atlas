import { Component, OnInit, Input,ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { UaSelectBase, IOption } from './ua-select-base'

export interface IQuick {
    value:any;
    text:string;
    glyph:string;
}

export class UaQuickSelectBase extends UaSelectBase {

    protected quicks:IQuick[];

    constructor() { super() }

    init() {
        super.init();
        console.log("UaQuickSelectBase.init");

        this.quicks = [
            {value:1, text:"One"   , glyph:"ok"},
            {value:3, text:"Three", glyph:"ok"},
            {value:5, text:"Five" , glyph:"ok"}
        ];
    }

    onQuick(index, q:IOption) {
        this.value = q.value;
        this.propagateChange(this.value);
    }

    change(changes) { super.change(changes); }
}