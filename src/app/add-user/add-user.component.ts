import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input', {static: false}) public el: ElementRef;

  public user: string;

  constructor(private addUserService: UserService) { }

  ngOnInit() { }

  addUser(): void {
    const username = this.el.nativeElement.value;
    if (username) {
      // on utilise le service ici pour ajouter l'utilisateur;
      this.addUserService.addUser(username);
      this.el.nativeElement.value = '';
    }
  }

}
