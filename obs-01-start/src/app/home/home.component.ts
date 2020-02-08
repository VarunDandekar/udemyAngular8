import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSub: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstSub = interval(1000).subscribe(count =>{
    //   console.log(count);
    // })

    const customObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 6) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("count"));
        }
        count++;
      }, 1000);
    });

    this.firstSub = customObs
      .pipe(
        filter(data => {
          return data > 0;
        }),
        map(data => {
          return "round" + data;
        })
      )
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          alert(err);
        },
        () => {
          console.log("completed");
        }
      );
  }

  ngOnDestroy() {
    this.firstSub.unsubscribe();
  }
}
