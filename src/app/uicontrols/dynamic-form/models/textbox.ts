import { BxtFormModelBase, DynamicFormControlType } from '../form-base';

export class TextboxModel extends BxtFormModelBase<string> {
  controlType = DynamicFormControlType.Textbox;
  type: string;
  placeHolder: string;
  maxlength: number;
  isMultipleLine: boolean;

  constructor(options) {
    super(options);
    this.type = options.type || 'text';
    this.placeHolder = options.placeHolder || '';
    this.maxlength = 50;
    this.isMultipleLine = false;
    if (options.isMultipleLine) {
      this.isMultipleLine = true;
      this.maxlength = 500;
    }
  }
}