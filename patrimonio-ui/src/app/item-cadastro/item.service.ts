import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

  private itemUrl = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  public listar(): Observable<any[]> {
    return this.http.get<any[]>(this.itemUrl);
  }

  public adicionar(item: any): Observable<any> {
    return this.http.post(this.itemUrl, item);
  }

}
