import { Component, OnInit, Input,ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { UaInputBase } from './ua-input-base'

export interface IOption {
  value:any;
  text:string;
}

export class UaSelectBase extends UaInputBase {

    @Input()
    public options:IOption[] = [];

    constructor() { super() }

    init() {
        super.init();
        //console.log("UaSelectBase.init");
    }

    change(changes) { super.change(changes); }
}