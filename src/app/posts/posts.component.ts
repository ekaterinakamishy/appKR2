import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  author = [
    {
      name: "Ivan",
      surname: "Ivanov",
      date: "12.09.2005"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
