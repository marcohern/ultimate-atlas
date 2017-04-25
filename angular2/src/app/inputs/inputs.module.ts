import { NgModule,forwardRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { NameInput } from './name-input/name-input.component'
import { PasswordInput } from './password-input/password-input.component'
import { UserEmailInput } from './user-email/user-email-input.component'
import { UsernameInput } from './username/username-input.component'

import { ErrorMessageService } from './error-message.service'
import { ValidatorService } from './validator.service'
import { UaInput } from './ua-input/ua-input.component'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        NameInput, PasswordInput, UserEmailInput, UsernameInput, UaInput
    ],
    providers:[
        ValidatorService,
        ErrorMessageService
    ],
    exports: [UsernameInput,UserEmailInput,PasswordInput,NameInput,UaInput]
})
export class InputsModule {}