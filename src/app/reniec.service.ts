import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReniecService {
  baseUrl = `https://dniruc.apisperu.com/api/v1/dni/`;
  constructor(private http: HttpClient) { }

  consultarDNI(dni: string) {
    const url = `${this.baseUrl}${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1hZmViOTgxNzhAc29vbWJvLmNvbSJ9.JscTiUI3EnZWNv_KQBpL4rKj2IHamKUyKYycCjQrMLA`;
    return this.http.get(url);
  }
}