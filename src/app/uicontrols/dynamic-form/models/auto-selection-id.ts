import { BxtFormModelBase, DynamicFormControlType } from '../form-base';

export class AutoSelectionIdModel extends BxtFormModelBase<number> {
    controlType = DynamicFormControlType.AutoSelectionId;
    dataSourceUrl: string;
    placeHolder: string;

    constructor(options) {
        super(options);
        this.dataSourceUrl = options.dataSourceUrl;
        this.placeHolder = options.placeHolder;
    }
}