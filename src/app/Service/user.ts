import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { RandomUserResponse, User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  users = signal<User[]>([]);
  page = 1;
  isLoading: WritableSignal<boolean> = signal(false);

  genderFilter = signal<string>("");  
  nationalityFilter = signal<string[]>([]);

  async getUsers(results: number, page: number): Promise<void> {
  this.isLoading.set(true);

  let url = `https://randomuser.me/api/?results=${results}&page=${page}`;

  const gender = this.genderFilter();
  const natList = this.nationalityFilter();

  if (gender) {
    url += `&gender=${gender}`;
  }

  if (natList.length > 0) {
    url += `&nat=${natList.join(',')}`;
  }

  try {
    const resp = await firstValueFrom(
      this.http.get<RandomUserResponse>(url)
    );
    this.users.set([...this.users(), ...resp.results]);
    console.log(resp.results);
  } catch (error) {
    
  }

  this.page++;
  this.isLoading.set(false);
}
}