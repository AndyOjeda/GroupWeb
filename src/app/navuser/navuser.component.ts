import { Component, OnInit, computed } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { User } from '../models/model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navuser',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navuser.component.html',
  styleUrls: ['./navuser.component.css']
})
export class NavuserComponent  {

  userName: string= 'User';

  user = computed(() => this.authService.currentUser());

  constructor(private apiService: ApiService, private readonly authService: AuthService) { }

  getUserName(): string | undefined {
    const userData = this.user();
    return userData?.name
  }

}

