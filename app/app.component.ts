import {Component} from 'angular2/core';
import {GreeterComponent} from './greeter.component';

@Component({
    selector: 'my-app',
    template: `
        <div id="page-header">
            <h1>Angular2-Seed</h1>
            <greeter></greeter>
        </div>
        `,
    directives: [GreeterComponent]
})
export class AppComponent { }