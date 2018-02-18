import { Injectable } from '@angular/core';

@Injectable()
export class UserDetailsService {
  private user: any = {
    token: null,
    name: null
  };

  constructor() { }

  set accessToken(accessToken: string) {
    this.user.token = accessToken;
  }

  get accessToken(): string {
    return this.user.token;
  }

  set username(username: string) {
    this.user.name = username;
  }

  get username(): string {
    return this.user.name;
  }

}
