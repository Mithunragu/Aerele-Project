package com.library.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.library.demo.dao.TransactionDao;
import com.library.demo.model.AddMemberModel;
import com.library.demo.model.Responses;
import com.library.demo.model.TransactionModel;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class TransactionController {

	@Autowired
	private TransactionDao dao;

	@PostMapping("/issuebook")
	public ResponseEntity<Responses> issueBook(@RequestBody TransactionModel result) {
		return ResponseEntity.ok(dao.issueBook(result));
	}
	
	@GetMapping("/getalltransactionList")
	public ResponseEntity<Responses> getAlltransactionList() {
		return ResponseEntity.ok(dao.getAlltransactionList());
	}
	
	@PostMapping("/deletealltransaction")
	public ResponseEntity<Responses> deleteAllTransaction(@RequestBody TransactionModel result) {
		return ResponseEntity.ok(dao.deleteAllTransaction(result));
	}

}
