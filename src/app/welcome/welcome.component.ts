import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ListTodosComponent } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ListTodosComponent,RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  message = 'Some Welcome Message'
  name : string | undefined

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.message);
    this.name = this.route.snapshot.params['name']
  }

}
