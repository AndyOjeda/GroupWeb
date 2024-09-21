import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ChangePasswordRequest } from '../DTO/ChangePasswordDTO';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  standalone: true,
  providers: [ApiService],
  imports: [NavigationComponent, CheckboxModule ,RouterOutlet, ButtonModule, CardModule, DialogModule,
    InputTextModule, NgbDatepickerModule, DropdownModule, CommonModule, FormsModule, StyleClassModule, NavigationComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnChanges {

  @Input() data: ChangePasswordRequest | null = null;

  changeForm!: FormGroup;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private readonly service: ApiService,
    private readonly authService: AuthService
  ){
    this.changeForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      repassword: new FormControl('', [Validators.required]),
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.data){
      this.changeForm.patchValue({
        email: this.data.email,
        password: this.data.password,
        repassword: this.data.repassword
      });
    }
  }

  onSubmit() {
    if (this.changeForm.valid) {
      const formValues = this.changeForm.value;

      if(formValues.password !== formValues.repassword){
        Swal.fire({
          title: 'Error',
          text: 'Las contraseñas no coinciden',
          icon: 'error'
        });
        return;
      }

      const user = {
        email: formValues.email,
        password: formValues.repassword
      }
      this.authService.updateUserPassword(user).subscribe({
        next: (res) => {
          Swal.fire({
          title: 'Success',
          text: "Se ha cambiado la contraseña exitosamente",
          icon: 'success'
        }).then(() => {
          this.router.navigate(['login']).then(() => {
            window.location.reload()
          });
        });
        },
        error: (err) => {
          Swal.fire({
            title: 'Error',
            text: err,
            icon: 'error'
          });
        }
      })
      return;
    }
    Swal.fire({
      title: 'Error',
      text: 'Formulario invalido, revise los campos nuevamente',
      icon: 'error'
    });
  }

}
