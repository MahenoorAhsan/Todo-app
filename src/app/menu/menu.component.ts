import { CommonModule } from '@angular/common';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit ,} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  IsUserLoggedIn : boolean = false

  constructor(public  hardcodedAuthenticatedService :HardcodedAuthenticationService){

  }
  ngOnInit(): void {
    //this.IsUserLoggedIn=this.hardcodedAuthenticatedService.isUserLoggedIn()
  }

}
