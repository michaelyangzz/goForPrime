import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DataSourceHelper } from 'core/datasource/datasource.helper';
import { FormControl } from '@angular/forms';
import { AutoCompleteService } from 'services/autocomplete/autocomplete.service';
import { AutoSelectionIdModel } from '../models/auto-selection-id';


@Component({
    selector: 'df-auto-selection-id',
    templateUrl: './df-auto-selection-id.component.html',
    styles: ['.df-form-control {margin-top: 0rem; margin-bottom: 0rem;padding-top: 0rem;padding-bottom: 0rem; }']
})
export class DFAutoSelectionIdComponent implements OnInit {

    @Input() model: AutoSelectionIdModel;
    @Input() control: FormControl;
    @Output() onSelectionChanged: EventEmitter<number> = new EventEmitter<number>();

    autoCompleteDataSource: DataSource;
    constructor(private s: AutoCompleteService) {

    }

    ngOnInit(): void {
        this.constructDataSource();
    }

    constructDataSource() {
        const ac = this.s.autoCompleteLocationSearch.bind(this.s);
        const bk = this.s.getById.bind(this.s);
        this.autoCompleteDataSource = DataSourceHelper.createAutoCompleteDataSourceUrl(this.model.dataSourceUrl, ac, bk);
    }

    selectionChanged(event) {
        if (event.selectedItem) {
            this.onSelectionChanged.emit(event.selectedItem);
        }
    }
}
