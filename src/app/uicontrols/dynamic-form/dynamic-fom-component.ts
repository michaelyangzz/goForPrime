import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicFormControlType, BxtFormModelBase, BxtFormGroupModel } from './form-base';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from './dynamic-form.service';
import { ICallMyBrother } from './form-base';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-fom-component.html'
})
export class DynamicFormComponent implements OnInit, ICallMyBrother {
    @Input() groups: BxtFormGroupModel[] = [];
    form: FormGroup;
    @Output() formChanged = new EventEmitter<FormGroup>();
    @Output() CallMyBrother: EventEmitter<BxtFormModelBase<any>> = new EventEmitter<BxtFormModelBase<any>>();
    constructor(private dfs: DynamicFormService) { }

    ngOnInit() {
        let data: BxtFormModelBase<any>[] = [];

        this.groups.forEach(x => {
            x.fields.forEach(y => {
                data.push(y);
            })
        });
        this.form = this.dfs.toFormGroup(data);

        this.formChanged.emit(this.form);
    }

    onSubmit() {

    }

    CallMyBrotherTest(m) {
        this.CallMyBrother.emit(m);
    }
}