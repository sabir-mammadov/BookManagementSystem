import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: any = {};

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(id)
        .subscribe(book => this.book = book);
    }
  }

  onSubmit(): void {
    if (this.book.id) {
      this.bookService.updateBook(this.book)
        .subscribe(() => this.goBack());
    } else {
      this.bookService.addBook(this.book)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    // Go back
  }
}
