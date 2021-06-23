import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { environment } from '../../environments/environment'

import { Computer} from "../interfaces/computer";

@Injectable()
export class ComputerService {

  private readonly headers: HttpHeaders; // NOT SURE IF I NEED THIS, SEEMS TO WORK FINE WHEN IT'S COMMENTED OUT IN CONSTRUCTOR
  private readonly apiEndpoint: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.apiEndpoint = environment.apiEndpoint;
  }

  public getAllComputers() {
    return this.http.get(this.apiEndpoint + 'computer/', {headers: this.headers});
  }

  public getComputerViewModel(id: number) {
    return this.http.get(this.apiEndpoint + 'computer/' + id, {headers: this.headers});
  }

  public updateComputer(computer: Computer) {
    return this.http.put(this.apiEndpoint + 'computer/' + computer.id, computer, {headers: this.headers});
  }

  public addComputer(computer: Computer) {
    return this.http.post(this.apiEndpoint + 'computer/' + computer.id, computer, {headers: this.headers});
  }

  public deleteComputer(computerId: number) {
    return this.http.delete(this.apiEndpoint + 'computer/' + computerId, {headers: this.headers});
  }
}
