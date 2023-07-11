import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  //baseUrl = "https://localhost:7009/";

  baseUrl = "https://sanfyinhealth.azurewebsites.net/";

  getBaseUrl()
  {
    return this.baseUrl;

  }
}
