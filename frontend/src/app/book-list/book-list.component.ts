import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: any[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(
        books => this.books = books,
        error => this.errorMessage = 'Could not retrieve books'
      );
  }
  

  addBook(): void {
    // Add book
  }
}
