import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServiseService {

public books: Book[] = [];

  constructor(private http: HttpClient) { }

  public addBook(item: Book) {
  this.books.push(item);
    return this.http.post("https://books-mybooks-default-rtdb.europe-west1.firebasedatabase.app/books.json", item);
  }

  public loadData() {
    return this.http
      .get<{[key:string]: Book}>("https://books-mybooks-default-rtdb.europe-west1.firebasedatabase.app/books.json")
      .pipe(
        map( (data):Book[] => {
          let books = [];
          for(let x in data) {
            books.push ({...data[x], id:x});
          }
          this.books = books;
          return books;
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
  }
}
