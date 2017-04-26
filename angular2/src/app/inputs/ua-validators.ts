import { Injectable } from '@angular/core'
import { AsyncValidatorFn, ValidationErrors, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { ValidatorService } from './validator.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class UaValidators {

    constructor(private vs:ValidatorService) {}

    usernameExists(except:string = null, typeTimeout:number=2000): AsyncValidatorFn {
        let timeout:any;
        return ((c:AbstractControl):Observable<ValidationErrors> => {
            return new Observable<ValidationErrors>(observer => {
                if (except == c.value) {
                    observer.next(null);
                } else {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        this.vs.checkUsername(c.value).subscribe(data => {
                            if (data.usernameExists) observer.next({usernameExists:true});
                            else observer.next(null);
                        }, error => {
                            observer.next({serverError:true});
                        });
                    }, typeTimeout);
                }
            }).first();
        });
    }

    userEmailExists(except:string = null, typeTimeout:number=2000): AsyncValidatorFn {
        let timeout:any;
        return ((c:AbstractControl):Observable<ValidationErrors> => {
            return new Observable<ValidationErrors>(observer => {
                if (except == c.value) {
                    observer.next(null);
                } else {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        this.vs.checkUserEmail(c.value).subscribe(data => {
                            if (data.userEmailExists) observer.next({usernameExists:true});
                            else observer.next(null);
                        }, error => {
                            observer.next({serverError:true});
                        });
                    }, typeTimeout);
                }
            }).first();
        });
    }

    requiresConfirm(fieldId:string): ValidatorFn {
        return ((c:AbstractControl):ValidationErrors | null => {
            let p:AbstractControl = c.root.get(fieldId);
            if (!p) return null;
            if (c.value != p.value) {
                return {requiresConfirm:true};
            }
            return null;
        });
    }
}