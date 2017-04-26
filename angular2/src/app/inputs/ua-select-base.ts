import { Component, OnInit, Input,ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { UaInputBase } from './ua-input-base'

export interface IOption {
  value:any;
  text:string;
}

export class UaSelectBase extends UaInputBase {

    protected options:IOption[];

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
    }

    change(changes) { super.change(changes); }
}