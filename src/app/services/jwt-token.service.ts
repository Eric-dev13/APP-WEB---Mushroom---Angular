import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export interface  DecodeToken {
  sub: string,
  iat: number,
  exp: number
 
}

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  jwtToken!: string;
  decodedToken!:DecodeToken

  constructor() {
  }

  setToken(token: string): void {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
    this.decodedToken = jwtDecode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwtDecode(this.jwtToken);
  }

  getUser(): string|null {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.sub : null;
  }

  // getEmailId() {
  //   this.decodeToken();
  //   return this.decodedToken ? this.decodedToken.email : null;
  // }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number|null = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
