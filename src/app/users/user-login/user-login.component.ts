import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private service: UserService) {
    const id = +this.activatedRoute.parent.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getUser(id).subscribe((user) => this.user = user);
  }

  ngOnInit() {
  }

}
