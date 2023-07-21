import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getStrength(password: string): string[] {
    if (password.length === 0) {
        return ['gray', 'gray', 'gray'];
      } else if (password.length < 8) {
        return ['red', 'red', 'red'];
      }  else if (password.match(/^[a-zA-Z]+$/) || password.match(/^[0-9]+$/) || password.match(/^[\W_]+$/)) {
        return ['red', 'gray', 'gray'];
      } else if (password.match(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).+$/
      )
    )  {
        return ['green', 'green', 'green'];
      } else {
        return ['yellow', 'yellow', 'gray'];
      }
  }
}
