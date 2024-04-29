import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';

export const routes: Routes = [
    {path: 'books/new', component: AddBookComponent},
    {path: 'books', component: ListOfBooksComponent},
    {path: 'books/:id', component: EditBookComponent},
    {path: '', component: ListOfBooksComponent},
];
