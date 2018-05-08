import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextboxModel } from '../models/textbox';
import { ICallMyBrother } from '../form-base';


@Component({
    selector: 'df-textbox',
    templateUrl: './df-textbox.component.html',
    styles: ['.df-form-control {margin-top: 0rem; margin-bottom: 0rem;padding-top: 0rem;padding-bottom: 0rem; }']
})
export class DFTextboxComponent implements ICallMyBrother {
    @Input() model: TextboxModel;
    @Input() control: FormControl;

    @Output() CallMyBrother: EventEmitter<TextboxModel> = new EventEmitter<TextboxModel>();

    CallMyBrotherTest() {
        this.model.value = this.control.value;

        this.CallMyBrother.emit(this.model);
    }
}
