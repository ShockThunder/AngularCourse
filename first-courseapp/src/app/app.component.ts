import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-courseapp';
  nums: number[] = [];

  addNum(num: number): void{
    this.nums.push(num);
  }

}
