import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact information', this.contactForm.value);
      // Send form data to your server here
      this.snackBar.open('Meldingen din har blitt mottat. Du kan forvente en response om sirka 3 dager', 'Close', {
        duration: 7000,
        panelClass: ['success-snackbar'],
      });
      this.contactForm.reset();
    } else {
      console.log('Form is not valid');
      this.snackBar.open('Invalid form! Please check your input.', 'Close', {
        duration: 7000,
        panelClass: ['invalid-form-snackbar'],
      });
    }
  }
}
