import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControlType, BxtFormModelBase } from './form-base';
import { ICallMyBrother } from './form-base';


@Component({
    selector: 'dynamic-form-control',
    templateUrl: './dynamic-form-element.component.html'
})
export class DynamicFormElementComponent implements ICallMyBrother {
    types = DynamicFormControlType;
    @Input() model: BxtFormModelBase<any>;
    @Input() form: FormGroup;
    get control() { return this.form.controls[this.model.key]; }
    @Output() CallMyBrother: EventEmitter<BxtFormModelBase<any>> = new EventEmitter<BxtFormModelBase<any>>();
    constructor() { }

    CallMyBrotherTest(m) {
         this.CallMyBrother.emit(m);
    }

}
