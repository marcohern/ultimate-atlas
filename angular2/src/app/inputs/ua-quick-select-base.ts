import { Component, OnInit, Input,ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { UaSelectBase, IOption } from './ua-select-base'

export interface IQuick {
    value:any;
    text:string;
    glyph:string;
    color:string;
}

export class UaQuickSelectBase extends UaSelectBase {

    protected quicks:IQuick[];

    constructor() { super() }

    init() {
        super.init();
        console.log("UaQuickSelectBase.init");

        this.quicks = [
            {value:1, text:"", glyph:"road"     , color:'primary'},
            {value:2, text:"", glyph:"cutlery"  , color:'success'},
            {value:3, text:"", glyph:"cutlery"  , color:'warning'},
            {value:4, text:"", glyph:"cutlery"  , color:'danger'},
            {value:5, text:"", glyph:"ice-lolly", color:'primary'},
            {value:6, text:"", glyph:"glass"    , color:'warning'}
        ];
    }

    onQuick(index, q:IOption) {
        this.value = q.value;
        this.propagateChange(this.value);
    }

    change(changes) { super.change(changes); }
}