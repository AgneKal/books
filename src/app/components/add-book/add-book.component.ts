import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../loading/loading.component';
import { BooksServiseService } from '../../services/books-servise.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, LoadingComponent, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  public author: string|null = null;
  public title: string|null = null;
  public year: number|null = null;
  public isReaded: string|null = null;
  public isLoading = false;
  public isError = false;

  public constructor (private bookService: BooksServiseService) {

  }
  public addBook(){
    if (this.author != null && this.title != null && this.year != null && this.isReaded != null){
      this.isLoading = true;
      this.bookService.addBook({
        author: this.author,
        title: this.title,
        year: this.year,
        isReaded: this.isReaded
      }).subscribe({
        next: ()=>{
        this.author = null;
        this.title = null;
        this.year = null;
        this.isReaded = null;
        this.isLoading = false;
      },
       error: (error) => {
        this.isLoading = false;
        this.isError = true;
       }
    })
    }
  }
}
