import {Component} from 'angular2/core';


@Component({
    selector: 'greeter',
    template: `<h2>{{greeting}}</h2>`
})
export class GreeterComponent{
    greeting = "Greetings, fellow Hobbits";
}