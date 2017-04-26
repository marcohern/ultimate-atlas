import { Component, OnInit, Input,ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { UaInputBase } from './ua-input-base'

export interface IOption {
  value:any;
  text:string;
}

export class UaSelectBase extends UaInputBase {

    protected options:IOption[];
    protected quicks:IOption[];

    constructor() { super() }

    init() {
        super.init();
        console.log("UaSelectBase.init");

        this.options = [
            {value:1, text:"One"},
            {value:2, text:"Two"},
            {value:3, text:"Three"},
            {value:4, text:"Four"},
            {value:5, text:"Five"},
        ];

        this.quicks = [
            {value:1, text:"1"},
            {value:2, text:"2"},
            {value:3, text:"3"}
        ];
    }

    onQuick(index, q:IOption) {
        this.value = q.value;
        this.propagateChange(this.value);
    }

    change(changes) { super.change(changes); }

    public load(options:any[], quicks:any[]) {
        this.options = <IOption[]>options;
        this.quicks = <IOption[]>quicks;
    }
}