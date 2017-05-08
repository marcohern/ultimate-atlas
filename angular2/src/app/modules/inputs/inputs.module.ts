import { NgModule,forwardRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { ErrorMessageService } from './error-message.service'
import { ValidatorService } from './validator.service'
import { UaValidators } from './ua-validators'

import { UaInput } from './ua-input/ua-input.component';
import { UaSelect } from './ua-select/ua-select.component';
import { UaQuickSelect } from './ua-quick-select/ua-quick-select.component';
import { UaQuickInput } from './ua-quick-input/ua-quick-input.component';
import { UaQuickTimeInput } from './ua-quick-time-input/ua-quick-time-input.component'

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        UaInput, UaSelect, UaQuickSelect, UaQuickInput, UaQuickTimeInput
    ],
    providers:[
        ValidatorService,
        ErrorMessageService,
        UaValidators
    ],
    exports:[
        UaInput, UaSelect, UaQuickSelect, UaQuickInput, UaQuickTimeInput
    ]
})
export class InputsModule {}