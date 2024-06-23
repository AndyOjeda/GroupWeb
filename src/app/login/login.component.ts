import { Component, inject, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router} from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginUserRequest, LoginUserResponse } from '../DTO/LoginUserDTO';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  providers:[ApiService],
  imports: [ CheckboxModule ,RouterOutlet, ButtonModule, CardModule, DialogModule,
     InputTextModule, NgbDatepickerModule, DropdownModule, CommonModule, FormsModule, StyleClassModule, NavigationComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnChanges {

  @Input() data: LoginUserRequest | null = null;

  loginForm!: FormGroup;

  constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private readonly service: ApiService,
    private readonly authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.data){
      this.loginForm.patchValue({
        email: this.data.email,
        password: this.data.password
      });
    }
  }

  onSubmit() {
    if(this.loginForm.valid){
      
      this.authService.loginUser(this.loginForm.value).subscribe({
        next: (res) => {
          this.router.navigate(['user']);
        },
        error: (err) => {
          Swal.fire({
            title: 'Error',
            text: err,
            icon: 'error'
          })
        }
      });
      
      /*this.service.loginUser(this.loginForm.value).subscribe(
        response => {
          console.log("Success")
          this.router.navigateByUrl('/user')
        },
        error => {
          console.log("Error mi ciela", this.loginForm.value)
        }
      )
    }*/
    }
  }
}
