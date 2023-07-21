import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input.component';
import { PasswordStrengthService } from './password-strength.service';

@NgModule({
  declarations: [AppComponent, PasswordInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [PasswordStrengthService], 
  bootstrap: [AppComponent]
})
export class AppModule {}

