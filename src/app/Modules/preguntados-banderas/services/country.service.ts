import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = "https://restcountries.com/v3.1/all";

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.url);
  }

}
