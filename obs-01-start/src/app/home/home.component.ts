import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSub: Subscription;
  constructor() { }

  ngOnDestroy(): void {
    this.firstSub.unsubscribe();
  }

  ngOnInit() {
    // this.firstSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customInterval = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });

    this.firstSub = customInterval.subscribe(data => {
      console.log(data);
    })
  }


}
