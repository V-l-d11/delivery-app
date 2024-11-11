import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiUserDeliveryHomeService {
  private readonly _http = inject(HttpClient);
}
