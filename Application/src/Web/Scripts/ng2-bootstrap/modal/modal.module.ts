import { NgModule } from '@angular/core';

import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.component';
import { ComponentsHelper } from '../utils/components-helper.service';
import { ModalComponent } from '../../app/components/ng2-modal.component';
import { AlertComponent } from '../../app/components/ng2-alert.component';
import { ConfirmComponent } from '../../app/components/ng2-confirm.component';

@NgModule({
    declarations: [ModalBackdropComponent, ModalDirective, ModalComponent, AlertComponent, ConfirmComponent],
    exports: [ModalBackdropComponent, ModalDirective, ModalComponent, AlertComponent, ConfirmComponent],
    entryComponents: [ModalBackdropComponent],
    providers: [ComponentsHelper]
})
export class ModalModule {
}
