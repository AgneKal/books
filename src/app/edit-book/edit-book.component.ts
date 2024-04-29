import { Component } from '@angular/core';
import { BooksServiseService } from '../services/books-servise.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
  public id:string;
  public author:string|null = null;
  public title:string|null = null;
  public year:number|null = null;
  public isReaded:string|null = null;

  constructor(private route:ActivatedRoute, private router:Router, private bookService: BooksServiseService){
    this.id = this.route.snapshot.params['id'];
    this.bookService.loadRecord(this.id).subscribe((data)=>{
      this.author = data.author;
      this.title = data.title;
      this.year = data.year;
      this.isReaded = data.isReaded;
    })
  }

  public updateRecord(){
    if(this.author != null && this.title != null && this.year != null && this.isReaded != null) {
      const record: Book = {
        id: this.id,
        author: this.author,
        title: this.title,
        year: this.year,
        isReaded: this.isReaded,
      }
      this.bookService.updateRecord(record).subscribe(()=>{
        this.router.navigate(['books']);
      })
    }
  }

}
