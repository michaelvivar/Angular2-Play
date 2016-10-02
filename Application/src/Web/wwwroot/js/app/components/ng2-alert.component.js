"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var modal_component_1 = require('../../ng2-bootstrap/modal/modal.component');
var AlertComponent = (function () {
    function AlertComponent() {
        this.title = "Alert!";
        this.close = new core_1.EventEmitter();
    }
    AlertComponent.prototype.show = function () {
        if (!this.Modal.isShown) {
            this.data = arguments[0];
            this.Modal.show();
        }
    };
    AlertComponent.prototype.hide = function () {
        if (this.Modal.isShown) {
            this.Modal.hide();
            this.close.emit(this.data);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AlertComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AlertComponent.prototype, "close", void 0);
    __decorate([
        core_1.ViewChild('Modal'), 
        __metadata('design:type', modal_component_1.ModalDirective)
    ], AlertComponent.prototype, "Modal", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'bs-alert',
            template: "\n        <div bsModal #Modal=\"bs-modal\" [config]=\"{backdrop: 'static', keyboard: false}\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-sm\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                <h4 class=\"modal-title\">{{ title }}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <ng-content></ng-content>\n                </div>\n                <div class=\"modal-footer\">\n                <button class=\"btn btn-primary\" (click)=\"hide()\">Close</button>\n                </div>\n            </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=ng2-alert.component.js.map