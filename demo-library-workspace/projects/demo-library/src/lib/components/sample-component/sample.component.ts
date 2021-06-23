import { NgModule, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sample-component',
    templateUrl: './sample.component.html'
})
export class SampleComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}

@NgModule({
    declarations: [
        SampleComponent
    ],
    exports: [
        SampleComponent
    ]
})
export class SampleComponentModule { }