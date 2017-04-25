import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms'
import { ValidatorService } from './validator.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/first'

export interface IValidatableInput {
    
    success:boolean;
    error:boolean;
    validating:boolean;

    messages:any;
    errorMessage:string;

    fieldClass:any;
    control:FormControl;
    group:FormGroup;

}

export abstract class ValidatableInput implements ControlValueAccessor {
    private fb:FormBuilder;

    @Input() name:string = 'value';
    @Input() label:string = 'Validatable Input';
    @Input() default:any = '';

    @Input("http-error-msg") httpErrorMsg :string = 'An error has occurred';
    @Input("validating-msg") validatingMsg:string = 'Validating...';
    @Input("required-msg")   requiredMsg  :string = 'Required.';

    @Output()
    groupCreated:EventEmitter<FormGroup> = new EventEmitter();

    @Output()
    controlCreated:EventEmitter<FormControl> = new EventEmitter();

    private callback:any;
    private timeout:number = 2000;
    private timeoutCallback:any;

    success:boolean;
    error:boolean;
    validating:boolean;

    control:FormControl;
    group:FormGroup;
    groupClass:any;

    messages={};
    errorMessage:string;

    constructor() {}

    public writeValue(value:any) {
        console.log("ValidatableInput.writeValue",value);
    }

    public registerOnChange(fn:any) {
        console.log("ValidatableInput.registerOnChange",fn);
    }

    public registerOnTouched(fn:any) {
        console.log("ValidatableInput.registerOnTouched",fn);
    }

    protected init(validators) {
        console.log("ValidatableInput.init", this.default);
        this.control = new FormControl(this.default, validators, this.validateCall.bind(this));
        this.controlCreated.emit(this.control);

        this.group = new FormGroup({});
        this.group.addControl(this.name, this.control);
        this.groupCreated.emit(this.group);

        this.addMessage('required', this.requiredMsg);
        this.addMessage('httpError',this.httpErrorMsg);
        this.group.statusChanges.subscribe(status => this.updateValidation(status));
        this.updateValidation("");
    }

    protected addMessage(key:string, message:string) {
        this.messages[key] = message;
    }

    protected updateValidation(status) {
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

    private validateCall(c:AbstractControl): Observable<{[key : string] : any}> {
        return this.validateMethod(this.control).first();
    }

    private validateMethod(c:AbstractControl): Observable<{[key : string] : any}> {
        this.validating = true;
        return new Observable(observer => {
            clearTimeout(this.timeoutCallback);
            this.timeoutCallback = setTimeout(() => {
                this.validate(observer);
            },this.timeout);
        });
    }

    public abstract validate(observer:any);
}