import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      let paramMap = convertToParamMap(params);
      for (let index = 0; index < paramMap.keys.length; index++) {
        let key = paramMap.keys[index];
        const values = paramMap.getAll(key);
        const value = paramMap.get(key); // get single value
        console.log(key + " has " + values.length + " value(s)");
        for (let index = 0; index < values.length; index++) {
          const element = values[index];
          console.log(key + ":" + values[index]);
        }
      }
    });
  }

}
