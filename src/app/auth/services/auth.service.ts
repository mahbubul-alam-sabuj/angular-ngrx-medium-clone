import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../types/auth-response.interface';
import { RegisterRequest } from '../types/register-request.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequest): Observable<AuthResponse> {
    const url = environment.API_BASE_URL + '/users';
    return this.http.post<AuthResponse>(url, data);
  }
}
