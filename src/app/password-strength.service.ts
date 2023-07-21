import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  getStrength(password: string): string[] {
    const gray = 'gray';
    const red = 'red';
    const yellow = 'yellow';
    const green = 'green';
  
    if (password.length === 0) {
      return [gray, gray, gray];
    }
  
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[\W_]/.test(password);
  
    if (password.length < 8 || (!hasLetters && !hasNumbers && !hasSymbols)) {
      return [red, red, red];
    } else if (hasLetters && hasNumbers && hasSymbols) {
      return [green, green, green];
    } else if (hasLetters && hasNumbers) {
      return [yellow, yellow, gray];
    } else if (hasLetters && hasSymbols) {
      return [yellow,  yellow, gray];
    } else if (hasNumbers && hasSymbols) {
      return [ yellow, yellow, gray];
    } else if (hasLetters || hasNumbers || hasSymbols) {
      return [red, gray, gray];
    }
  
    return [gray, gray, gray];
  }
  
  
}
