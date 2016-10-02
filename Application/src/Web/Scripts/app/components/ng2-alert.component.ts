import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from '../../ng2-bootstrap/modal/modal.component';

@Component({
    selector: 'bs-alert',
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
                <button class="btn btn-primary" (click)="hide()">Close</button>
                </div>
            </div>
            </div>
        </div>
    `
})
export class AlertComponent {
    @Input() title: string = "Alert!";
    @Output() close = new EventEmitter();
    @ViewChild('Modal') public Modal: ModalDirective;

    private data: any;

    public show() {
        if (!this.Modal.isShown) {
            this.data = arguments[0];
            this.Modal.show();
        }
    }

    public hide() {
        if (this.Modal.isShown) {
            this.Modal.hide();
            this.close.emit(this.data);
        }
    }
}