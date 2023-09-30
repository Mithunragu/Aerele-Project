package com.library.demo.service;

import com.library.demo.model.Responses;
import com.library.demo.model.TransactionModel;

public interface TransactionService {

	public Responses issueBook(TransactionModel result);

	public Responses getAlltransactionList();

	public Responses deleteAllTransaction(TransactionModel result);

}
