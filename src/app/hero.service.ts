import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './Product';
export const MY_HTTP_CLIENT = new InjectionToken<HttpClient>('MyHttpClient');
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  getHeroes(): Hero[] {
    return HEROES;
  }
  getProducts():Observable<Product[]>{
    const url = 'http://localhost:5000/api/v1/Catalog';
    return this.http.get(url).pipe(map((response: any) => response as Product[])
    );
  }
  constructor(private http: HttpClient) { }
}
