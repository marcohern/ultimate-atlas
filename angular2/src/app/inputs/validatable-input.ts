import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { ValidatorService } from './validator.service'

export interface IValidatableInput {
    
    success:boolean;
    error:boolean;
    validating:boolean;


    messages:any;
    errorMessage:string;

    fieldClass:any;
    control:FormControl;
    group:FormGroup;

    getValidator():ValidatorService;

}

export class ValidatableInput {
    private vs:ValidatorService;
    private fb:FormBuilder;

    @Output() groupCreated = new EventEmitter();

    @Output() controlCreated = new EventEmitter();

    private callback:any;

    success:boolean;
    error:boolean;
    validating:boolean;

    control:FormControl;
    group:FormGroup;
    groupClass:any;

    messages:any;
    errorMessage:string;

    public getValidator():ValidatorService { return this.vs };

    protected construct(vs:ValidatorService, fb:FormBuilder) {
        this.vs = vs;
        this.fb = fb;
    }

    protected setMessages(messages) {
        this.messages = messages;
    }

    protected init(name:string,value:any, validators, url:string, callback:any) {
        this.control = this.fb.control(value, validators, this.validateCall.bind(this));
        this.controlCreated.emit(this.control);

        this.group = this.fb.group([]);
        this.group.addControl(name, this.control);
        this.groupCreated.emit(this.group);

        this.control.statusChanges.subscribe(status => this.updateValidation(status));
        this.updateValidation("");
    }

    protected updateValidation(status) {
        console.log("ValidatableInput.updateValidation",status);
        this.groupClass = [];
        this.error = false;
        this.success = false;
        this.errorMessage = '';
        if (this.control.dirty && this.control.invalid) {
        this.error = true;
        console.log(this.control.errors);
        for (let key in this.control.errors) {
            this.errorMessage += this.messages[key] + ' ';
        }
        this.groupClass.push('has-error');
        } else if (this.control.valid) {
            this.success = true;
            this.groupClass.push('has-success');
        }
    }

    private validateCall(c:AbstractControl) {

    }

    private validate(c:AbstractControl) {

    }
}