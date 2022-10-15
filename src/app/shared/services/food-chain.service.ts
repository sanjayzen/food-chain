import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { EventDetails } from '../interfaces/event-details';
import { Injectable } from '@angular/core';
import { MaterialCollectionForm } from '../interfaces/material-collection-form';
import { UserDetails } from '../interfaces/user-details';

@Injectable({
  providedIn: 'root'
})
export class FoodChainService {
  
  token: string = "";
  httpHeaders = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  })
  baseURL = "https://foodtrackerrcmmveuapi-foodtrackerrcmmv.azuremicroservices.io";
  //baseURL = "http://localhost:8080"
  constructor(private http: HttpClient, private auth: AuthenticationService) {
    if(this.auth.isAuthorized()) {
      this.token = this.auth.getUserToken();
    }
  }

  // POST API to save the material collection form details, used by supplier. 
  saveMaterialFormDetails(materialFormDetails: MaterialCollectionForm): Observable<any> {
    const url = `${this.baseURL}/save/materialInfo`;
    return this.http.post(url, materialFormDetails);
  }

  // GET API to fetch the list of All Retailers
  getRetailerList():Observable<UserDetails[]> {
    const url = `${this.baseURL}/getRetailerList`;
    return this.http.get<UserDetails[]>(url);
  }

  // GET API to fetch the list of All Farmers
  getFarmerList():Observable<UserDetails[]> {
    const url = `${this.baseURL}/getFarmerList`;
    return this.http.get<UserDetails[]>(url);
  }

  //GET API to fetch the list of all Events along with their batchIds
  getBatchId():Observable<EventDetails[]> {
    const url = `${this.baseURL}/getBatchId`;
    return this.http.get<EventDetails[]>(url);
  }

  //GET API to add Batch ID, used by barcode scanner
  getProductDetails():Observable<EventDetails[]> {
    const url = `${this.baseURL}/getBatchId`;
    return this.http.get<EventDetails[]>(url);
  }

  
  
}
