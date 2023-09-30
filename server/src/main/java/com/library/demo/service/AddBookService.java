package com.library.demo.service;

import com.library.demo.model.AddBookModel;
import com.library.demo.model.Responses;

public interface AddBookService {

	public Responses createBook(AddBookModel result);

	public Responses getAllBook();

	public Responses deleteAllBook(AddBookModel result);

	public Responses updateAllBook(int bookId,AddBookModel result);

	public Responses getoneBook(int bookId);


}
	