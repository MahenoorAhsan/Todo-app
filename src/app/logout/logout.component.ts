import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService){}

  ngOnInit(): void {
      this.hardcodedAuthenticationService.logout();
  }

}
