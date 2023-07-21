
import { Component } from '@angular/core';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-root',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class AppComponent {
  password: string = '';
  passwordStrength: string[] = ['gray', 'gray', 'gray']; 

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  updateStrength() {
    this.passwordStrength = this.passwordStrengthService.getStrength(this.password);
  }
}
