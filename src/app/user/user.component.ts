import {Component} from '@angular/core';
import {DUMMY_USERS} from "./dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]

  get imageRath(){
    return 'assets/users/' + this.selectedUser.avatar

  }
}
