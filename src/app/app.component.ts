import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddBookComponent, EditBookComponent, ListOfBooksComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'books';
}
