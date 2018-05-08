import { Injectable } from '@angular/core';
import { BxtFormModelBase } from './form-base';
import { AutoSelectionIdModel } from './models/auto-selection-id';
import { TextboxModel } from './models/textbox';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BxtFormGroupModel } from './form-base';


@Injectable()
export class DynamicFormService {
    getGroups(): BxtFormGroupModel[] {
        return [
            {
                name: 'Group1',
                style: 'horizontal-ribbon dark',
                columns: 2,
                fields:
                    [
                        new TextboxModel({
                            label: 'From Location1',
                            key: 'fromLocationkey1',
                            type: 'text',
                            placeHolder:'ttttt',
                            isRequired: true
                        }),
                        new AutoSelectionIdModel({
                            label: 'From Location2',
                            key: 'fromLocationkey2',
                            dataSourceUrl:'/transaction/custom/1/fromlocations',
                            // dataSourceUrl: 'system/location/autocomplete',
                            placeHolder:'xxxxxxx',
                            isRequired: true
                        }),
                        new TextboxModel({
                            label: 'From Location3',
                            key: 'fromLocationkey3',
                            placeHolder:'ttttt',
                            type: 'text',
                            isRequired: true
                        })
                    ]

            },
            {
                name: 'Group2',
                style: 'horizontal-ribbon dark',
                columns: 2,
                fields:
                    [
                        new AutoSelectionIdModel({
                            label: 'License plate',
                            key: 'Carrier11',
                            dataSourceUrl: 'system/carrier/autocomplete',
                            placeHolder:'ytutyutyu',
                            isRequired: true
                        }),
                        new TextboxModel({
                            label: 'Trailer number',
                            key: 'fromLocationkey5',
                            type: 'text',
                            isRequired: true
                        }),
                        new TextboxModel({
                            label: 'Document nr.',
                            key: 'fromLocationkey56',
                            type: 'text',
                            isRequired: true
                        }),
                        new TextboxModel({
                            label: 'Notes',
                            key: 'Notes1',
                            type: 'text',
                            isMultipleLine: true,
                            placeHolder:'Please Enter the Notes',
                            isRequired: true
                        })
                    ]
            }
        ];
    }

    toFormGroup(items: BxtFormModelBase<any>[]) {
        let group: any = {};

        items.forEach(item => {
            group[item.key] = item.isRequired ? new FormControl(item.value || '', Validators.required)
                : new FormControl(item.value || '');


        });
        return new FormGroup(group);
    }
}
