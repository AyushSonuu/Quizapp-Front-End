import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dynamicText: string = "Front End";
  private courses: string[] = ["Front End","Back End", "Databases", "Data Structures"];
  private index: number = 0;
  constructor() { }

  ngOnInit(): void {
    // You can update the dynamicText property here or through other events
    this.updateDynamicText();
  }

  updateDynamicText() {
    this.dynamicText = this.courses[this.index];
    this.index = (this.index+1)%this.courses.length;

    setTimeout(() => {
      this.updateDynamicText();
    }, 1000);
  }
}

