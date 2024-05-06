import { Component } from '@angular/core';
import { BooksServiseService } from '../../services/books-servise.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public count:number = 0;
  public isError = false;
  public isLoggedIn = false;

  constructor (private booksService: BooksServiseService, private authService: AuthService){
    if (this.authService.isLoggedIn) {
      this.loadCount();
    }
    this.booksService.onBooksCountChange
    .subscribe(() => this.loadCount());
        this.booksService.onStatusChange.subscribe((status) => {
      if (status === 0) {
        this.isError = false;
      } else {
        this.isError = true;
      }
    });
    this.authService.onUserStatusChange.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn === true) {
        this.loadCount();
      }
    });

  }

  private loadCount(){
    this.booksService.loadData()
    .subscribe((data) => {
      this.count = data.length;
      this.isError = false;
    });
  }
}
