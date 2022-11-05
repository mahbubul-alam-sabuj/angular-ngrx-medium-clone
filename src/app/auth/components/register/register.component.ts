import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  registerForm?: FormGroup;
  isSubmitting$?: Observable<boolean>;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.buildRegisterForm();
    this.initializeValues();
  }
  private buildRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSubmitting: ', this.isSubmitting$);
  }
  onRegisterFormSubmit(): void {
    this.store.dispatch(registerAction(this.registerForm?.value));
  }
}
