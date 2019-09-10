import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject(
    ['Jacques Célair', 'Yves Haderrapé', 'Elie Coptaire']
  );

  addUser(name: string): void {
    this.users.value.push(name);
    this.users.next(this.users.value);
  }

  constructor() { }
}
