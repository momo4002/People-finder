import { Component, computed, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Service/user';

@Component({
  selector: 'app-random-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-user.html',
  styleUrl: './random-user.css'
})

export class RandomUser {
  users = computed(()=>this.userService.users());
  page = computed(()=>this.userService.page);
  isLoading = computed(()=>this.userService.isLoading());
  extendedDetails = false;
  selectedUser = signal<any | null>(null);
  

  constructor(private userService: UserService) {
    this.ladeMehr();
  }

  async ladeMehr() {
    await this.userService.getUsers(50, 1)
  }

  zeigeMehrDetails(){
    this.extendedDetails = true;
  }

  zeigeWenigerDetails(){
    this.extendedDetails = false;
  }


  zeigeDetails(user: any) {
  this.selectedUser.set(user);
  }

  schliesseDetails() {
  this.selectedUser.set(null);
  this.zeigeWenigerDetails();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const pos = (window.innerHeight + window.scrollY);
    const max = document.body.scrollHeight;

    if (pos >= max - 100) {
      this.ladeMehr();
    }
  }
}