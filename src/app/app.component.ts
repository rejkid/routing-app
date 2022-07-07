import { Component } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  sentAt: Date;

  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    // Checking if we can subscribe to 'queryParams' in ctor of app.component
    this.activatedRoute.queryParams.subscribe((params) => {
    });
    this.sentAt  = new Date();
  }

  clickFirst(event: any) {

    //this.router.navigate(['/first-component'], { queryParams: { param: 'first' } });
    console.log(event);
  }
  clickFirstProg(event: any) {

    this.router.navigate(['/first-component'], { queryParams: { param: ['value1', 'value2', 'value3'] } });
    console.log(event);
  }
}
