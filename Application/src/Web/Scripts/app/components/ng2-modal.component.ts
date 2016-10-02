import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from '../../ng2-bootstrap/modal/modal.component';

@Component({
    selector: 'bs-modal',
    template: `
        <div bsModal #Modal="bs-modal" [config]="{backdrop: 'static'}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" aria-label="Close" (click)="hideModal()">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">{{ title }}</h4>
                </div>
                <div class="modal-body">
                    <ng-content></ng-content>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" (click)="btn()">{{ button }}</button>
                    <button class="btn btn-primary" (click)="hide()">Close</button>
                </div>
            </div>
            </div>
        </div>
    `
})
export class ModalComponent {
    @Input() title: string = '[Title]';
    @Input() button: string = 'Save';
    @Output() save = new EventEmitter();
    @Output() close = new EventEmitter();
    @ViewChild('Modal') public Modal: ModalDirective;
    
    public show() {
        if (!this.Modal.isShown) {
            this.Modal.show();
        }
    }

    public hide(data: number) {
        if (this.Modal.isShown) {
            this.Modal.hide();
            this.close.emit();
        }
    }

    public btn() {
        this.save.emit();
    }
}