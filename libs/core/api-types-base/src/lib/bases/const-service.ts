import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ConstService {
  private _URL = 'http://localhost:8081';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(http: HttpClient) {}

  get getURL(): string {
    return this._URL;
  }

  set setURL(URL: string) {
    this._URL = URL;
  }
}
