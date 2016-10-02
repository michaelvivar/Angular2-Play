import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from '../../ng2-bootstrap/modal/modal.component';

@Component({
    selector: 'bs-confirm',
    template: `
        <div bsModal #Modal="bs-modal" [config]="{backdrop: 'static', keyboard: false}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">{{ title }}</h4>
                </div>
                <div class="modal-body">
                    <ng-content></ng-content>
                </div>
                <div class="modal-footer">
                <button class="btn btn-primary" (click)="hide(1)">Ok</button>
                <button class="btn btn-primary" (click)="hide(0)">Close</button>
                </div>
            </div>
            </div>
        </div>
    `
})
export class ConfirmComponent {
    @Input() title: string = "Confirm!";
    @Output() close = new EventEmitter();
    @Output() ok = new EventEmitter();
    @ViewChild('Modal') public Modal: ModalDirective;

    private data: any;

    public show() {
        if (!this.Modal.isShown) {
            this.data = arguments[0];
            this.Modal.show();
        }
    }

    public hide(data: number) {
        if (this.Modal.isShown) {
            this.Modal.hide();
            if (data == 1)
                this.ok.emit(this.data);
            else
                this.close.emit(this.data);
        }
    }
}