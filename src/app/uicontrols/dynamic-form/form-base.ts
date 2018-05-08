import { EventEmitter } from '@angular/core';

export class FormModelBase<T> {
    value: T;
    key: string;
    label: string;
    controlType: string;
    isRequired: boolean;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        order?: number,
        controlType?: string,
        isRequired?: boolean
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.controlType = options.controlType || '';
        this.isRequired = !!options.isRequired;
    }
}


export class BxtFormModelBase<T> extends FormModelBase<T> {
    isHidden: boolean;
    isReadonly: boolean;
    submitted: boolean;

    constructor(options) {

        super(options);

        this.isHidden = !!options.isHidden;
        this.isReadonly = !!options.isReadonly;
        this.submitted = !!options.submitted;
    }
}

export class BxtFormGroupModel {
    name: string;
    style: string;
    columns: number;
    fields: BxtFormModelBase<any>[];
}

export const DynamicFormControlType = {
    AutoSelectionId: 'AutoSelectionId',
    Textbox: 'Textbox',
    NormalSelection: 'NormalSelection'
}


export interface ICallMyBrother {
    CallMyBrother: EventEmitter<BxtFormModelBase<any>>;
}