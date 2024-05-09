import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../models/book';
import { catchError, map, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BooksServiseService {

  public books: Book[] = [];
  public onBooksCountChange = new EventEmitter();
  public onStatusChange = new EventEmitter<number>();

  constructor(private http: HttpClient, private authService: AuthService) { }

  public addBook(item: Book) {
  this.books.push(item);
    return this.http.post(`https://books-mybooks-default-rtdb.europe-west1.firebasedatabase.app/books.json`, item)
      .pipe (
      tap(() => this.onBooksCountChange.emit())
    );
  }

  public loadData() {
    return this.http
      .get<{[key:string]: Book}>(`https://books-mybooks-default-rtdb.europe-west1.firebasedatabase.app/books.json`)
      .pipe(
        map( (data):Book[] => {
          let books = [];
          for(let x in data) {
            books.push ({...data[x], id:x});
          }
          return books;
        }),
        tap((data)=> {
        this.books = data;
        this.onStatusChange.emit(0);
        }),
        catchError((err, c) => {
          this.onStatusChange.emit(1);
          throw 'klaida';
        })
      );
  }

  public loadRecord(id:string) {
    return this.http.get<Book>(`https://books-mybooks-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`);
  }

  public updateRecord(item: Book) {
    return this.http.patch(`https://books-mybooks-default-rtdb.europe-west1.firebasedatabase.app/books/${item.id}.json`, item)
  }

  public deleteRecord(id:string) {
    return this.http.delete(`https://books-mybooks-default-rtdb.europe-west1.firebasedatabase.app/books/${id}.json`)
      .pipe (
        tap(() => this.onBooksCountChange.emit())
      );
  }
}
