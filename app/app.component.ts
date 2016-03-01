import {Component} from 'angular2/core';

@Component({

    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    greeting: string;
    constructor() {
        this.greeting = "gio";
    }

    greet() {
        alert("Hello, " + this.greeting);
    }

}