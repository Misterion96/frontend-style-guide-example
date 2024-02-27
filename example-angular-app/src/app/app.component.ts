import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'g-app-root',
    templateUrl: './app.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public title: string = 'general-angular-app';

    @Output('change')
    public someChange: EventEmitter<void> = new EventEmitter<void>();

    test(): any {}

    test2(): any {}
}
