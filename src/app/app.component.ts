import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ListOfBooksComponent } from './components/list-of-books/list-of-books.component';
import { NavigationComponent } from './components/navigation/navigation.component';

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
