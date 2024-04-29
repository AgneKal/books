import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksServiseService } from '../services/books-servise.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  public author: string|null = null;
  public title: string|null = null;
  public year: number|null = null;
  public isReaded: string|null = null;

  public constructor (private bookService: BooksServiseService) {

  }
  public addBook(){
    if (this.author != null && this.title != null && this.year != null && this.isReaded != null){
      this.bookService.addBook({
        author: this.author,
        title: this.title,
        year: this.year,
        isReaded: this.isReaded
      }).subscribe(()=>{
        this.author = null;
        this.title = null;
        this.year = null;
        this.isReaded = null;
      })
    }
  }
}
