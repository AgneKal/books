import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BooksServiseService } from '../../services/books-servise.service';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-list-of-books',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent, ErrorComponent],
  templateUrl: './list-of-books.component.html',
  styleUrl: './list-of-books.component.css'
})
export class ListOfBooksComponent {
  
  public books: Book[] = [];
  public isLoading = false;
  public isError = false;

  public constructor(private bookService:BooksServiseService) {
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this.isError = false;
    this.bookService.loadData().subscribe({
      next: (data)=>{
      this.books = data;
      this.isLoading = false;
      this.isError = false;
    },
      error: (error) => {
        this.isLoading = false;
        this.isError = true;
      },
    })
  }

  public deleteRecord(id:string|null) {
    if (id != null){
      this.isLoading = true;
      this.bookService.deleteRecord(id).subscribe(()=>{
        this.loadData();
      })
    }
  }
  public closeError() {
    this.loadData();
  }
}
