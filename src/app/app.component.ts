import { Component } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';

  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    // Checking if we can subscribe to 'queryParams' in ctor of app.component
    this.activatedRoute.queryParams.subscribe((params) => {

      let paramMap = convertToParamMap(params);
      //let parameterArray = paramMap.keys;//.
      for (let index = 0; index < paramMap.keys.length; index++) {
        let key = paramMap.keys[index];
        const values = paramMap.getAll(key);
        const value = paramMap.get(key);
        console.log("Param:" + value);
      }
    });
  }

  clickFirst(event: any) {

    //this.router.navigate(['/first-component'], { queryParams: { param: 'first' } });
    console.log(event);
  }
}
