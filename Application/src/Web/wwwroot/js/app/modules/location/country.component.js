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
var location_service_1 = require('./location.service');
var modal_component_1 = require('../../../ng2-bootstrap/modal/modal.component');
var forms_1 = require('@angular/forms');
var Country;
(function (Country) {
    var MainComponent = (function () {
        function MainComponent(service) {
            this.service = service;
            this.type = 1;
            this.modal = { title: '', button: '' };
            this.data = [];
        }
        MainComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.service.getCountries().subscribe(function (res) { return _this.data = res.json(); });
        };
        MainComponent.prototype.delete = function (id) {
            var _this = this;
            this.service.deleteCountry(id).subscribe(function (res) {
                _this.data.splice(_this.data.findIndex(function (o) { return o.id == id; }), 1);
            });
        };
        MainComponent.prototype.add = function (country) {
            var _this = this;
            country.type = this.type;
            country.id = 0;
            this.service.addCountry(country).subscribe(function (res) {
                _this.data.unshift(res.json());
                _this.Modal.hide();
            });
        };
        MainComponent.prototype.update = function (country) {
            var _this = this;
            this.service.updateCountry(country).subscribe(function (res) {
                //this.data.sort((a, b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0));
                _this.service.getCountries().subscribe(function (res) { return _this.data = res.json(); });
                _this.Modal.hide();
            });
        };
        MainComponent.prototype.save = function () {
            var country = this.Form.myForm.value;
            country.type = this.type;
            if (this.modal.button == 'Save')
                this.add(country);
            else if (this.modal.button == 'Update')
                this.update(country);
        };
        MainComponent.prototype.open = function (item) {
            if (arguments.length == 0) {
                this.modal.title = 'Add Country';
                this.modal.button = 'Save';
                this.Form.myForm.reset();
            }
            else {
                this.modal.title = 'Edit Country';
                this.modal.button = 'Update';
                this.Form.data(item);
            }
            this.Modal.show();
        };
        __decorate([
            core_1.ViewChild('Form'), 
            __metadata('design:type', FormComponent)
        ], MainComponent.prototype, "Form", void 0);
        __decorate([
            core_1.ViewChild('Modal'), 
            __metadata('design:type', modal_component_1.ModalDirective)
        ], MainComponent.prototype, "Modal", void 0);
        MainComponent = __decorate([
            core_1.Component({
                template: "\n                <table width=\"100%\">\n                    <tr>\n                        <td><h2>Countries</h2></td>\n                        <td width=\"70\"><button (click)=\"open()\" class=\"btn btn-primary\">Add New</button></td>\n                    </tr>\n                </table>\n                <div>\n                    <table class=\"table table-bordered\">\n                        <tbody>\n                            <tr>\n                                <td colspan=\"2\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-filter\"></span></span>\n                                        <input type=\"text\" placeholder=\"Filter\" [(ngModel)]=\"term\" class=\"form-control col-md-3\" />\n                                    </div>\n                                </td>\n                            <tr>\n                            <tr *ngFor=\"let item of data | filter:term\">\n                                <td width=\"31\" class=\"text-center\"><a (click)=\"confirm.show(item.id)\" class=\"glyphicon glyphicon-trash\"></a></td>\n                                <td><a (click)=\"open(item)\">{{ item.name }}</a><span class=\"pull-right col-md-6\">Code: {{ item.code }}</span></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <bs-modal #Modal [title]=\"modal.title\" [button]=\"modal.button\" (save)=\"save()\">\n                    <form-country #Form></form-country>\n                </bs-modal>\n                <bs-confirm #confirm (ok)=\"delete($event)\">Are you sure you want to delete a record?</bs-confirm>\n            ",
            }), 
            __metadata('design:paramtypes', [location_service_1.CountryService])
        ], MainComponent);
        return MainComponent;
    }());
    Country.MainComponent = MainComponent;
    var FormComponent = (function () {
        function FormComponent() {
        }
        FormComponent.prototype.data = function (arg) {
            if (arguments.length == 1) {
                this.country = arguments[0];
                this.myForm.controls['id'].setValue(this.country.id);
                this.myForm.controls['name'].setValue(this.country.name);
                this.myForm.controls['code'].setValue(this.country.code);
            }
        };
        FormComponent.prototype.ngOnInit = function () {
            this.myForm = new forms_1.FormGroup({
                id: new forms_1.FormControl('0'),
                name: new forms_1.FormControl('', [forms_1.Validators.required]),
                code: new forms_1.FormControl('', [forms_1.Validators.required])
            });
        };
        FormComponent = __decorate([
            core_1.Component({
                selector: 'form-country',
                template: "\n            <form class=\"form\" [formGroup]=\"myForm\">\n                <input type=\"hidden\" formControlName=\"id\" />\n                <div class=\"form-group col-md-8 col-md-offset-2\">\n                    <label class=\"control-label\">Name: </label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" />\n                </div>\n                <div class=\"form-group col-md-8 col-md-offset-2\">\n                    <label class=\"control-label\">Code: </label>\n                    <input type=\"text\" formControlName=\"code\" class=\"form-control\" />\n                </div>\n            </form>\n            <div class=\"clearfix\"></div>\n        "
            }), 
            __metadata('design:paramtypes', [])
        ], FormComponent);
        return FormComponent;
    }());
    Country.FormComponent = FormComponent;
})(Country = exports.Country || (exports.Country = {}));
//# sourceMappingURL=country.component.js.map