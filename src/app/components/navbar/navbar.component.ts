import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  iconDescription: string = '';
  showDescriptionFlag: boolean = false;

  showDescription(description: string) {
    this.iconDescription = description;
    this.showDescriptionFlag = true;
  }

  hideDescription() {
    this.showDescriptionFlag = false;
  }

}
