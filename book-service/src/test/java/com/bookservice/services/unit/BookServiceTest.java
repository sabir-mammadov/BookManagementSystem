package com.bookservice.services.unit;

import com.bookservice.model.Book;
import com.bookservice.repository.BookRepository;
import com.bookservice.service.BookService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiceTest {

    @Autowired
    private BookService bookService;

    @MockBean
    private BookRepository bookRepository;

    @Test
    public void addBookTest() {
        Book book = new Book("Book Title", "Book Author", "ISBN");
        Mockito.when(bookRepository.save(book)).thenReturn(book);
        assertEquals(book, bookService.createBook(book));
    }
}
