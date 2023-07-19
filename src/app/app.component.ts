import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password: string = '';
  strengthSections: string[] = Array(3).fill('gray');

  updateStrength() {
    if (this.password.length === 0) {
      this.strengthSections.fill('gray');
    } else if (this.password.length < 8) {
      this.strengthSections.fill('red');
    } else if (this.password.match(/^[a-zA-Z]+$/) || this.password.match(/^[0-9]+$/) || this.password.match(/^[\W_]+$/))  {
      this.strengthSections[0] = 'red';
      this.strengthSections[1] = 'gray';
      this.strengthSections[2] = 'gray';
    } else if (
      this.password.match(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/
      )
    ) {
      this.strengthSections.fill('green');
     
    } else {
      this.strengthSections[0] = 'yellow';
      this.strengthSections[1] = 'yellow';
      this.strengthSections[2] = 'gray';
    }
  }
}
