import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../models/book';
import { BooksServiseService } from '../services/books-servise.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-of-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-of-books.component.html',
  styleUrl: './list-of-books.component.css'
})
export class ListOfBooksComponent {
  
  public books: Book[] = [];

  public constructor(private bookService:BooksServiseService) {
    this.loadData();
  }

  private loadData() {
    this.bookService.loadData().subscribe((data)=>{
      this.books = [];
      for (let x in data){
        this.books.push({...data[x], id:x});
      }
    })
  }

  public deleteRecord(id:string|null) {
    if (id != null){
      this.bookService.deleteRecord(id).subscribe(()=>{
        this.loadData();
      })
    }
  }
}
