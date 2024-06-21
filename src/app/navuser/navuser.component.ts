import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { User } from '../models/model';

@Component({
  selector: 'app-navuser',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navuser.component.html',
  styleUrls: ['./navuser.component.css']
})
export class NavuserComponent  {

  userName: string= 'User';

  constructor(private apiService: ApiService) { }


}

