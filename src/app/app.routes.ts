import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ListOfBooksComponent } from './list-of-books/list-of-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';

export const routes: Routes = [
    {path: 'addBook', component: AddBookComponent},
    {path: 'listOfBooks', component: ListOfBooksComponent},
    {path: 'edit/:id', component: EditBookComponent},
];
