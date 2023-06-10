import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    templateUrl: './lifecycle-hooks.component.html',
    styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy{
    @Input() myInput!: string;

    constructor() {
        console.log('Constructor called');
    }

    ngOnInit(): void {
        console.log('ngOnInit called');
    }
    ngAfterViewInit(): void {
        console.log('ngAfterViewInit called');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges called');
        console.log('changes', changes);
    }
    ngOnDestroy(): void {
        console.log('ngOnDestroy called');
    }
}
