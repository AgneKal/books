import { Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ListOfBooksComponent } from './components/list-of-books/list-of-books.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

export const routes: Routes = [
    {path: 'books/new', component: AddBookComponent},
    {path: 'books', component: ListOfBooksComponent},
    {path: 'books/:id', component: EditBookComponent},
    {path: '', component: LoginFormComponent},
];
