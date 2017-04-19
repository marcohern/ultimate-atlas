import { ValidatorService } from './validator.service'

export interface IValidatableInput {
    success:boolean;
    error:boolean;
    validating:boolean;


    messages:any;
    errorMessage:string;

    getValidator():ValidatorService;
}

export class ValidatableInput {
    private vs:ValidatorService;
    success:boolean;
    error:boolean;
    validating:boolean;


    messages:any;
    errorMessage:string;

    getValidator():ValidatorService { return this.vs };
}