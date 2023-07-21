import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from './password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() password: string = '';
  @Output() passwordChange = new EventEmitter<string>();
  @Input() passwordStrength: string[] = Array(3).fill('gray');

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.password = value;
      this.updateStrength();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateStrength() {
    if (this.password.trim().length === 0) {
      this.passwordStrength = ['gray', 'gray', 'gray'];
    } else {
      this.passwordStrength = this.passwordStrengthService.getStrength(this.password);
    }
  }
  

  setDisabledState(isDisabled: boolean): void {}
}
