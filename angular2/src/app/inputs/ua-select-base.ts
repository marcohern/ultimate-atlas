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
            {value:1, text:"Bus/Metro"},
            {value:2, text:"Breakfast"},
            {value:3, text:"Lunch"},
            {value:4, text:"Dinner"},
            {value:5, text:"Snack"},
            {value:6, text:"Beer"},
        ];
    }

    change(changes) { super.change(changes); }
}