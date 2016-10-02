import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from './location.service';
import { ModalDirective } from '../../../ng2-bootstrap/modal/modal.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export module Country {
    @Component({
        template: `
                <table width="100%">
                    <tr>
                        <td><h2>Countries</h2></td>
                        <td width="70"><button (click)="open()" class="btn btn-primary">Add New</button></td>
                    </tr>
                </table>
                <div>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td colspan="2">
                                    <div class="input-group">
                                        <span class="input-group-addon"><span class="glyphicon glyphicon-filter"></span></span>
                                        <input type="text" placeholder="Filter" [(ngModel)]="term" class="form-control col-md-3" />
                                    </div>
                                </td>
                            <tr>
                            <tr *ngFor="let item of data | filter:term">
                                <td width="31" class="text-center"><a (click)="confirm.show(item.id)" class="glyphicon glyphicon-trash"></a></td>
                                <td><a (click)="open(item)">{{ item.name }}</a><span class="pull-right col-md-6">Code: {{ item.code }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <bs-modal #Modal [title]="modal.title" [button]="modal.button" (save)="save()">
                    <form-country #Form></form-country>
                </bs-modal>
                <bs-confirm #confirm (ok)="delete($event)">Are you sure you want to delete a record?</bs-confirm>
            `,
    })
    export class MainComponent implements OnInit {
        constructor(private service: CountryService) { }

        private type: number = 1;

        @ViewChild('Form') Form: FormComponent;
        @ViewChild('Modal') Modal: ModalDirective;

        modal = { title: '', button: '' };

        ngOnInit() {
            this.service.getCountries().subscribe(res => this.data = res.json());
        }

        delete(id: number) {
            this.service.deleteCountry(id).subscribe(res => {
                this.data.splice(this.data.findIndex(o => o.id == id), 1);
            });
        }

        add(country: ICountry) {
            country.type = this.type;
            country.id = 0;
            this.service.addCountry(country).subscribe(res => {
                this.data.unshift(res.json());
                this.Modal.hide();
            });
        }

        update(country: ICountry) {
            
            this.service.updateCountry(country).subscribe(res => {
                //this.data.sort((a, b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0));
                this.service.getCountries().subscribe(res => this.data = res.json());
                this.Modal.hide();
            });
        }

        save() {
            let country: ICountry = this.Form.myForm.value;
            country.type = this.type;
            if (this.modal.button == 'Save')
                this.add(country);
            else if (this.modal.button == 'Update')
                this.update(country);
        }

        open(item?: ICountry) {
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
        }

        private data: ICountry[] = [];
    }

    @Component({
        selector: 'form-country',
        template: `
            <form class="form" [formGroup]="myForm">
                <input type="hidden" formControlName="id" />
                <div class="form-group col-md-8 col-md-offset-2">
                    <label class="control-label">Name: </label>
                    <input type="text" formControlName="name" class="form-control" />
                </div>
                <div class="form-group col-md-8 col-md-offset-2">
                    <label class="control-label">Code: </label>
                    <input type="text" formControlName="code" class="form-control" />
                </div>
            </form>
            <div class="clearfix"></div>
        `
    })
    export class FormComponent {
        country: ICountry;
        myForm: FormGroup;

        data(arg?: any) {
            if (arguments.length == 1) {
                this.country = arguments[0];
                this.myForm.controls['id'].setValue(this.country.id);
                this.myForm.controls['name'].setValue(this.country.name);
                this.myForm.controls['code'].setValue(this.country.code);
            }
        }

        ngOnInit() {
            this.myForm = new FormGroup({
                id: new FormControl('0'),
                name: new FormControl('', [Validators.required]),
                code: new FormControl('', [Validators.required])
            });
        }
    }
}