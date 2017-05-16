import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { UaSelectBase, IOption } from './ua-select-base';

export interface IQuick {
    value: any;
    text: string;
    glyph: string;
    color: string;
}

export class UaQuickSelectBase extends UaSelectBase {

    @Input()
    public quicks: IQuick[] = [];

    constructor() { super(); }

    init() {
        super.init();
        //console.log("UaQuickSelectBase.init");
    }

    onQuick(index, q: IOption) {
        this.value = q.value;
        this.propagateChange(this.value);
    }

    change(changes) { super.change(changes); }
}