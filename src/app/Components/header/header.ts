import { Component, signal } from '@angular/core';
import { UserService } from '../../Service/user';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {
  constructor(private userService: UserService) {

  }
  selectedNat = signal<string[]>([]);
  selectedGen = signal<string>("");

  filterWindow = false;

  nationalities = signal<string[]>([
    "AU", "BR", "CA", "CH", "DE",
    "DK", "ES", "FI", "FR", "GB",
    "IE", "IN", "IR", "MX", "NL",
    "NO", "NZ", "RS", "TR", "UA",
    "US"
  ]);

  filterWindowClick() {
    if (this.filterWindow) {
      this.filterWindow = false;
    }
    else {
      this.filterWindow = true;
    }
  }

  addGen(gender: string) {
    if (this.selectedGen() === gender) {
      this.selectedGen.set("");
    }
    else {
      this.selectedGen.set(gender);
    }
  }

  addNat(nation: string) {
    if (this.selectedNat().includes(nation)) {
      this.selectedNat.set(
        this.selectedNat().filter(nat => nat !== nation))
    }
    else {
      this.selectedNat.set([...this.selectedNat(), nation])
    }
  }

  applyFilter() {
    this.userService.genderFilter.set(this.selectedGen());
    this.userService.nationalityFilter.set(this.selectedNat());
    this.userService.users.set([]);
    this.userService.page = 1;
    this.userService.getUsers(50, 1);
    this.filterWindow = false
  }

  resetFilter() {
    this.selectedGen.set("")
    this.selectedNat.set([]);
    this.userService.users.set([]);
    this.userService.page = 1;
    this.userService.getUsers(50, 1);
    this.filterWindow = false
  }
}
