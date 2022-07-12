import { Component } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { from, interval, Observable, of, map, scan, take, concatMap, timer } from 'rxjs';

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
    });

  }

  clickFirst(event: any) {

    //this.router.navigate(['/first-component'], { queryParams: { param: 'first' } });
    console.log(event);
  }
  clickFirstProg(event: any) {

    this.router.navigate(['/first-component'], { queryParams: { param: ['value1', 'value2', 'value3'] } });
    console.log(event);
  }

  ngOnInit(): void {
    this.test();
    /* This section is used for experimenting
    with rxjs functionality */

    /* Three subscribe handlers: next, error, complete*/
/*     let numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(take(4));
    takeFourNumbers.subscribe({
      next: (value: number) => {
        console.log(value);
      },
      error: (value: any) => {
        console.log(value);
      },
      complete: () => {
        console.log();
      }
    });
 */  }

  test()
  {
    /* This section is used for experimenting
    with rxjs functionality */

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map(ev =>
    //     interval(Math.random() * 2000).pipe(take(3))
    //   ),
    //   take(2)
    // );
    // const result = higherOrder.pipe(
    //   combineLatestAll()
    // );

    // const observables = [1, 5, 10].map(
    //   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
    // );


    // var s2 = of(6, 16, 26).pipe(
    //   map(v1=>
    //     of(5, 15, 25).pipe(
    //     map(v2=>[v1,v2])
    //     )), 
    //   combineLatestAll());
    // s2.subscribe(value => console.log(value))

    // var c1 = of(5, 15, 25);
    // var c2 = of(6, 16, 26);
    // var c3 = of(7, 17, 27);

    // var r2 = of(5, 15, 25).pipe(
    //   map(v1=>of(6, 16, 26).pipe(
    //     map(v2=>[v1,v2]))),
    //   combineLatestAll());//.pipe(combineLatestAll());


    // var r2 = of(5, 15, 25).pipe(
    //   map(v1 => of(6, 16, 26).pipe(
    //     map(v2 => of(7, 17, 27).pipe(
    //       map(v3 => [v1, v2, v3])
    //     )))),
    //   combineLatestAll());//.pipe(combineLatestAll());
    // r2.subscribe(e1 => {
    //   e1.forEach(e2 => {
    //     e2.subscribe(e3 => {
    //       console.log(e3);
    //     });
    //   })
    // });

    // var r2 = of(5, 15, 25).pipe(
    //   map(v1=>of(6, 16, 26).pipe(
    //     map(v2=>of(7, 17, 27).pipe(
    //       map(v3 => [v1,v2,v3]),
    //       toArray(),
    //   )))),
    //   combineLatestAll(),
    //   );    
    //   r2.subscribe(e1 => {
    //     e1.forEach(e2 => {
    //       e2.subscribe(e3 => {
    //         console.log(e3);
    //       });
    //     })
    //   });

    // Suggestion by ruth
    // let s3: Observable<number> = of(5, 15, 25);
    // let s4: Observable<number> = of(6, 16, 26);
    // let s5: Observable<number> = of(7, 17, 27);

    // const r1 = s3.pipe(
    //   map((v3: number) =>
    //     s4.pipe(
    //       mergeMap((v4: number) =>
    //         s5.pipe(
    //           reduce((acc: number[][], v5: number, i5: number) => {
    //             acc[i5] = [v3, v4, v5];
    //             return acc;
    //           }, [])
    //         )
    //       )
    //     )
    //   ),
    //   combineLatestAll()//reduce((acc: number[][], curr: number[][]) => [...acc, curr], [])
    // )
    // r1.subscribe(console.log);    



    // var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
    // var st = {name1: 'moe', name2: 'larry', name3: 'curly'};
    // var stooges = _.values(st);
    // var sorted = _.sortBy(stooges).reverse();
    // console.log();


    //     var some_fixed_value = 1;
    //     var f = new Function("return " + some_fixed_value);
    //     console.log(f());

        //var delay = 50;
        // 1. Tell TypeScript that `run` exists
    // interface Function {
    //   run(this: Function, delay: number): void;
    //   //  ^^^^^^^^^^^^^^−−−−−− 2. Tell TypeScript that `this` within the call will
    //   //                          be a function
    // }


    /* Start define new global function */
    // Solution 1 - define new global function
    // (Function.prototype as any).run = function (delay: number) {
    //   // some content;
    //   console.log("run has been called");
    // };

    // Solution 2 - define new global function
    // type myType = Function & { run: Function };

    // (Function.prototype as myType).run = function (delay: number) {
    //   //alert("Hello! I am an alert box!!");
    //   setTimeout(() => {  alert("World!"); }, delay);
    // };
    // (Function.prototype as any).run(2000);
    /* End define new global function */
    
    // Function.prototype.run = function (delay: number) {
    //   // some content;
    //   console.log("");
    // };
    // Experiment with toArray - one dimensional
    // var t2 = of(5, 15, 25).pipe(
    //   map(v2 => {
    //     return  [ v2]
    //   }), /*toArray()*/);
    //   t2.subscribe(console.log);



    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map(ev =>
    //      interval(Math.random() * 2000).pipe(take(3))
    //   ),
    //   take(2)
    // );
    // const result = higherOrder.pipe(
    //   combineLatestAll()
    // );

    // result.subscribe(x => console.log(x));



    //var s2 = of(6, 16, 26).pipe(map(v1 => of(5, 15, 25).pipe(map(v2 => [v2, v1]))), combineLatestAll());
    //s2.subscribe(console.log)
    // Experiment with toArray - two dimensional
    // var t1 = of(5, 15, 25).pipe(
    //   map(v1 => of(6, 16, 26).pipe(
    //     map(v2 => {
    //       return [v1, v2]
    //     })
    //   )),
    //   combineLatestAll()
    // );
    // t1.subscribe(console.log);

    // Experiment with mergeMap
    // const letters = of('a', 'b', 'c');
    // const result = letters.pipe(
    //   mergeMap(x => interval(1000).pipe(map(i => x + i))),
    // );
    // result.subscribe(
    //   x=>console.log(x)
    //   //x => x.subscribe(x=>console.log(x))
    //   );

    //     var t1 = of(5, 15, 25).pipe(
    //       map(v1 => of(6, 16, 26).pipe(
    //         mergeMap(v2 => {
    //           var r = [v1, v2];
    //           // var currentTime = new Date();
    //           // console.log(currentTime.toLocaleString()+":"+currentTime.getMilliseconds(), r);
    //         return r;//[v1, v2]
    //         })
    //         //, toArray(),
    //       )
    //       )
    //       //, combineLatestAll()
    //     );
    //     t1.subscribe(value => {
    //         value.subscribe(value => {
    // //             var currentTime = new Date();
    // //             console.log(currentTime.toLocaleString()+":"+currentTime.getMilliseconds(), value);
    //             console.log(value);
    //         })
    //     })
    //     console.log;

    // var t0 = of(5, 15, 25).pipe(
    //   map(v1=>of(6, 16, 26).pipe(
    //     map(v2=>of(7, 17, 27)),
    //     toArray()
    //     )));

    // Suggestion by Martin - the best
    // var t0 = of(5, 15, 25).pipe(
    //   map(v1=>of(6, 16, 26).pipe(
    //     map(v2=>of(7, 17, 27)),
    //     toArray()
    //     )));

    // var r3 = of(5, 15, 25).pipe(
    //   map(v1 => of(6, 16, 26).pipe(
    //     mergeMap(v2 => of(7, 17, 27).pipe(
    //       map(v3 => {
    //         return [v1, v2, v3]
    //       }),
    //       toArray()
    //     )),
    //   ),
    //   ),
    //   combineLatestAll()
    // );
    // r3.subscribe(console.log);


    // r3.subscribe(e1 => {
    //   e1.forEach(e2 => {
    //     console.log(e2);
    //   })
    // });


    // Test for 'reduce'
    // fromEvent(document, 'click').subscribe(event => {
    //   console.log();
    // })
    // const seed = 0;
    // const count = fromEvent(document, 'click').pipe(
    //   takeUntil(interval(5000)),
    //   mapTo(1),
    //   reduce((acc: number, one: number, index: number) => {
    //     console.log("index="+index)
    //     return (acc + one);
    //   }, seed)
    // )
    // // const ones = clicksInFiveSeconds.pipe(mapTo(1));
    // // const count = ones.pipe(reduce((acc, one) => acc + one, seed));
    // count.subscribe(x => {
    //   console.log(x)
    // });


    // Example of using toArray
    // const source = interval(1000);
    // const example = source.pipe(
    //   take(10),
    //   toArray()
    // );
    // const subscribe = example.subscribe(val => console.log(val));

    // var r3 = of(5, 15, 25)
    //   .pipe(
    //     mergeMap((v1) =>
    //       of(6, 16, 26).pipe(
    //         mergeMap((v2) => of(7, 17, 27).pipe(map((v3) => [v1, v2, v3])
    //         ))
    //       )
    //     )
    //   )
    // r3.subscribe(console.log);

    // Excersize for using interval
    // const letters = of('a', 'b', 'c');
    // const result = letters.pipe(
    //   map(x => interval(1000).pipe(take(4), map(i => x + i))),
    // );
    // result.subscribe(x => console.log(x));

    // const s1 = of(1, 2, 3).pipe(
    //   map(v1 =>
    //     of(100, 101, 102, 103, 104).pipe(
    //       map(v2 => [v1,v2])
    //     )
    //   ),
    //   combineLatestAll()
    // );
    // s1.subscribe(console.log);

    // const s1 = of(1, 2, 3)
    // s1.subscribe(value => {
    //   console.log("["+value+"]");
    //   process.stdout.write("some text");
    // });

    //const observables = of(1, 5, 10).pipe(startWith(0));
    // const observables = of(1, 5, 10).pipe(mergeMap(
    //     n => {
    //       return of(n).pipe((startWith(0), delay(n * 1000)))
    //     } // emit 0 and then emit n after n seconds
    //   ),
    //   toArray()
    //   /*share({connector: () => new ReplaySubject(0),
    //     resetOnComplete: false,
    //     resetOnRefCountZero: false})*/
    //     );

    // // Example of using toArray - more complicated
    // const observables = of(1, 5, 10).pipe(map(
    //   n => {
    //     return of(n).pipe(startWith(0), delay(n * 1000)).
    //     pipe(map(v1=>[n,v1]), toArray())
    //   } // emit 0 and then emit n after n seconds
    // ),

    // /*share({connector: () => new ReplaySubject(0),
    //   resetOnComplete: false,
    //   resetOnRefCountZero: false})*/
    //   );

    //     observables.subscribe(value =>{
    //       console.log(value);
    //     });

    // let v1Counter = 0;
    // observables.subscribe(v1 => {
    //   {
    //     console.info("value v1:" + v1 + " v1Counter:" + v1Counter++ + " 'Observable<number>' type")
    //     let v2Counter = 0;
    //     v1.subscribe((v2) => {
    //       console.info("value v2:" + v2 + " v2Counter"+v2Counter++ +" 'number' type")
    //     })
    //   }
    // });
    // const combined = observables.pipe(combineLatestAll(/*(value1, value2, value3, value4) => {
    //   return value1+value2+value3+value4
    // }*/));
    // combined.subscribe(value => {
    //   console.log("combined all:"+value)
    // });

    // v1Counter = 0;
    // setTimeout(function() {
    //   v1Counter = 0;
    //   observables.subscribe(v1 => {
    //     {
    //       console.info("value v1:" + v1 + " v1Counter:" + v1Counter++ + " 'Observable<number>' type")
    //       let v3Counter = 0;
    //       v1.subscribe((v2) => {
    //         console.info("value v3:" + v2 + " v2Counter"+v3Counter++ +" 'number' type")
    //       })
    //     }
    //   });
    // }, 20000);


    // v1Counter = 0;
    // observables.subscribe(v1 => {
    //   {
    //     console.info("value v1:" + v1 + " v1Counter:" + v1Counter++ + " 'Observable<number>' type")
    //     let v3Counter = 0;
    //     v1.subscribe((v2) => {
    //       console.info("value v3:" + v2 + " v2Counter"+v3Counter++ +" 'number' type")
    //     })
    //   }
    // });


    // Cold observable example
/*     const observer1 = {
      test: 1,
      next: (data: any) => console.log('Observer1 got a next value: ', data),
      error: (err: any) => console.error('Observer1 got an error: ' + err),
      complete: () => console.log('Observer1 got a complete notification'),
    };
    const observer2 = {
      test: 1,
      next: (data: any) => console.log('Observer2 got a next value: ', data),
      error: (err: any) => console.error('Observer2 got an error: ' + err),
      complete: () => console.log('Observer2 got a complete notification'),
    };
    const observable = new Observable(function (subscriber) {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 0);
    });


    observable.subscribe(observer1);
    observable.subscribe(observer2);
 */     
    // concatMap example
    const src = of(1, 2, 3);

    const result = src.pipe(
      map( (src :number) => src*10)
    )
    // const result = src.pipe(
    //    concatMap( src.subscribe(v => v*10))
    //  )
    result.subscribe(value => {
      console.log(value)
    });

    let srcObservable= of(1,2)
    let innerObservable= of('A','B','C','D')
    // For every number will emit 4 letters 
    srcObservable.pipe(
      concatMap( val => innerObservable/* interval(1000).pipe(take(4)) */)
    )    
    .subscribe(ret=> {
      console.log('Recd ' + ret);
    })
    
    
    // function as a property of an object literal.
    /*     var obj = {
          queryString: (value: string) => {
            alert(value);
          },
          eggs: true,
        };
        obj.queryString("here");
        let variable = obj.eggs;
     */
    // 'share' operator example - complicated
    /*    const source = interval(1000).pipe(take(3), share(
          {
            resetOnRefCountZero: () => timer(200),
            resetOnComplete: () => timer(100),
          },
        ));
         
         var currentTime = new Date();
        const subscriptionOne = source.subscribe(x => console.log(currentTime.toLocaleString()+":"+currentTime.getMilliseconds(), 'subscription 1: ', x));
        setTimeout(() => {
          subscriptionOne.unsubscribe();
          currentTime = new Date();
          console.log(currentTime.toLocaleString()+":"+currentTime.getMilliseconds(), "unsubscribe from subscription 1");
        }, 1300);
         
        setTimeout(() => {
          currentTime = new Date();
          source.subscribe(x => console.log(currentTime.toLocaleString()+":"+currentTime.getMilliseconds(), 'subscription 2: ', x))
          //console.log("value");
        }, 1700);
         
        setTimeout(() => {
          currentTime = new Date();
          source.subscribe(x => console.log(currentTime.toLocaleString()+":"+currentTime.getMilliseconds(), 'subscription 3: ', x))
          //console.log("value");
        }, 5000);
    
     */

    // Cold observable example
    /*     let stream$ = interval(1000).pipe(
          take(5)
        );
    
        stream$.subscribe({
          next: data => console.log("first: "+data),
          error: err => console.error(err),
          complete: () => console.log('first completed')
        })
    
        //subscriber 2: 1,2,3
        setTimeout(() => {
          stream$.subscribe({
            next: data => console.log("second: "+data),
            error: err => console.error(err),
            complete: () => console.log('second completed')
          })
        }, 2000);
     */

    // Hot observable example
    /*     let liveStreaming$ = interval(1000).pipe(
          take(5),
          share({connector: () => new ReplaySubject(1),
          resetOnComplete: false,})
          );
        
        liveStreaming$.subscribe({
          next: data => console.log('subscriber from first: ' + this.first++),
          error: err => console.log(err),
          complete: () => console.log('first completed')
        })
        
        setTimeout(() => {
          liveStreaming$.subscribe({
            next: data => console.log('subscriber from 2nd: ' + this.second++),
            error: err => console.log(err),
            complete: () => console.log('2nd  completed')
          })
        }, 3000) */


    // Hot observable example with connectable
    /*     let stream$ =
        interval(1000).pipe(
          take(4),
          share()
        );
        
        let connectableStream$ = connectable(stream$);
        
        setTimeout(() => {
          connectableStream$.subscribe(
            {
              next: data => console.log(data)
            })
        }, 2000);
        connectableStream$.connect();
    
     */

    // General example with using pipe and map
    /*
    numbers$
      .pipe(
        // Get the sum of the numbers coming in.
        scan((total: number, n: number) => n, 2),
        // Get the average by dividing the sum by the total number
        // received so var (which is 1 more than the zero-based index).
        //map((sum, index) => sum / (index + 1))
      )
      .subscribe(
        {
          next: (data: number) => console.log("OK"),
          error: (err) => {
            return console.log('Error');
          },
          complete: () => console.log("completed")
        });
        
        console.log('finito');
        */

    // 'scan' test using events
    // var clicks = fromEvent(document, 'click');
    // var ones = clicks.pipe(mapTo(1));
    // var seed = 0;
    // var count = ones.pipe(scan((acc, one) => acc + one, seed));
    // count.subscribe(x => console.log(x));

    // interface IMessagesOperation {
    //   (messages: number[]): number[];
    // }
    
    // let markThreadAsRead: Subject<any> = new Subject<any>();
    // const initialMessages: number[] = [];
    // //let newMessages: Subject<number> = new Subject<number>();
    // let messages: Observable<number[]>;
    // let updates: Subject<IMessagesOperation> = new Subject<any>();

    // let create: Subject<number> = new Subject<number>();
    // messages = updates
    //   .pipe(
    //     // Get the sum of the numbers coming in.
    //     scan((total: number[], operation: IMessagesOperation) => {
    //       let msgs = operation(total);
    //       return msgs;
    //     }, initialMessages),
    //     // Get the average by dividing the sum by the total number
    //     // received so var (which is 1 more than the zero-based index).
    //     //map((sum, index) => sum / (index + 1))
    //     // share({
    //     //   connector: () => new ReplaySubject(1),
    //     //   resetOnError: false,
    //     //   resetOnComplete: false,
    //     //   resetOnRefCountZero: false,
    //     // })
    //   )

    // create.pipe(map(function (message: number): IMessagesOperation {
    //   return (messages: number[]) => {
    //     return messages.concat(message);
    //   };
    // }))
    // .subscribe(updates);

    // //newMessages.subscribe(create);

    // markThreadAsRead.pipe(
    //   map( function (thread: number) : IMessagesOperation {
    //     return (messages: number[]) => {
    //       return messages.map( (message: number) => {
    //         // note that we're manipulating `message` directly here. Mutability
    //         // can be confusing and there are lots of reasons why you might want
    //         // to, say, copy the Message object or some other 'immutable' here
    //         console.log("Test");
    //         return message;
    //       });
    //     };
    //   }))
    //   .subscribe(updates);

    // const source = interval(1000).pipe(take(4), share({
    //   resetOnRefCountZero: () => timer(200),
    //   resetOnComplete: () => timer(100),
    //   resetOnError: false
    // }));
    // source.subscribe({
    //   next: (value) => {create.next(value)}
    // });

    // //timer(10000).subscribe(n => markThreadAsRead.next(20));

    // messages.subscribe(value => {
    //   console.log
    // });

    // 'scan' test
    // let numbers$ = from([4, 5, 6]);
    // const seed = 0;
    // const count$ = numbers$.pipe(mergeScan((acc, one) => of(acc + one), seed),);
    // count$.subscribe(x => console.log(x));

    // let numbers$ = from([4, 5, 6]);
    // const seed = 0;
    // const count$ = numbers$.pipe(scan((acc, one) => (acc + one), seed),);
    // count$.subscribe(x => console.log(x));

    // const click$ = fromEvent(document, 'click');
    // const one$ = click$.pipe(mapTo(1));
    // const seed = 0;
    // const count$ = one$.pipe(scan((acc, one) => {
    //   console.log("acc ",of(acc + one));
    //   return (acc + one);
    // }, seed));
    // count$.subscribe((x) => console.log(x));

    // one$.pipe(scan((acc, one) => {
    //   console.log("acc ",acc);
    //   return (acc + one);
    // }, seed),);

    // const click$ = fromEvent(document, 'click');
    // const one$ = click$.pipe(mapTo(1));
    // const seed = 0;
    // const count$ = one$.pipe(
    //   mergeScan((acc, one) => of(acc + one), seed),
    // );
    // count$.subscribe(x => console.log(x));


    // const click$ = fromEvent(document, 'click');
    // const count$ = click$.pipe(
    //   mergeScan((acc, one) => httpGetPage(acc.pageCursor+1).pipe(map(res=>{
    //     return {pageCusor:pageCursor++, contet.concat(res)}
    // })), {pageCursor:0,content:[]}),
    // );

    // 'scan' test
    // of([1, 2, 3]).subscribe(x => console.log(x));
    // from([1, 2, 3]).subscribe(x => console.log(x));

    // If you want to have return value about the first scan you have to save the 
    // return value of the pipe and extend it with an extra pipe.
/*     let numbers$ = from([4, 5, 6]);

    let val1 = numbers$
      .pipe(
        // Get the sum of the numbers coming in.
        scan((total, n) => {
          return total + n
        }, 0),

        // Get the average by dividing the sum by the total number
        // received so var (which is 1 more than the zero-based index).
        //map((sum, index) => sum / (index + 1))
      )

    val1.subscribe(x => console.log('value of the first scan is', x))
    val1.pipe(
      scan((total, n) => {
        return total + n
      }, 0)
    ).subscribe(x => console.log('value of the second scan is',x));
 */


    // let numbers$ = from([4, 5, 6]);

    // numbers$
    //   .pipe(
    //     // Get the sum of the numbers coming in.
    //     scan((total, n) => {
    //       return total + n
    //     }),
    //     scan((total, n) => {
    //       return total + n
    //     })
    //     // Get the average by dividing the sum by the total number
    //     // received so var (which is 1 more than the zero-based index).
    //     //map((sum, index) => sum / (index + 1))
    //   ).subscribe(x => console.log('value of the second scan is', x))


    // numbers$
    //   .pipe(
    //     // Get the sum of the numbers coming in.
    //     scan((total, n) => {
    //       return total + n
    //     }),
    //     // Get the average by dividing the sum by the total number
    //     // received so var (which is 1 more than the zero-based index).
    //     //map((sum, index) => sum / (index + 1))
    //   ),
    //   //.subscribe(console.log);

    // numbers$
    //   .pipe(
    //     // Get the sum of the numbers coming in.
    //     scan((total, n) => {
    //       return total + n
    //     }),
    //     // Get the average by dividing the sum by the total number
    //     // received so var (which is 1 more than the zero-based index).
    //     //map((sum, index) => sum / (index + 1))
    //   )
    // )
      //.subscribe(console.log);
      //merge(numbers$, numbers$).subscribe(console.log);

    // Examples of java script objects (arrays inside objects)
    //   var defaults = {
    //     backgroundcolor: '#000',
    //     color: '#fff',
    //     weekdays: ['sun','mon','tue','wed','thu','fri','sat']
    //    };

    // var defaults1:any = {

    //   backgroundcolor: '#000',
    //   color: '#fff',
    //   weekdays: [
    //     { 0: 'sun' },
    //     { 1: 'mon' },
    //     { 2: 'tue' },
    //     { 3: 'wed' },
    //     { 4: 'thu' },
    //     { 5: 'fri' },
    //     { 6: 'sat' }
    //   ]

    // };

    // console.log(defaults.backgroundcolor);
    // console.log(defaults.weekdays[3]);

    // const sumObserver = {
    //   sum: 1,
    //   next(value: number) {
    //     console.log('Own context next (value: number): ' + this);
    //     this.sum = this.sum + value;
    //   },
    //   error: () => {
    //     // We actually could just remove this method,
    //     // since we do not really care about errors right now.
    //     console.log('Outside `JdTestComponent` context: ' + this); // outside context
    //   },
    //   complete: function complete() {
    //     console.log('Own context `sumObserver`: ' + this); // own this-context.
    //   }
    // }
    // of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
    //   .subscribe(sumObserver);
  }
}

