package com.library.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.demo.dao.AddBookDao;
import com.library.demo.model.AddBookModel;
import com.library.demo.model.AddMemberModel;
import com.library.demo.model.Responses;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AddBookController {

	
	@Autowired
	private AddBookDao dao;
	
	@PostMapping("/create")
	public ResponseEntity<Responses> createBook(@RequestBody AddBookModel result) {
		return ResponseEntity.ok(dao.createBook(result));
	}
	
	@GetMapping("/getallbook")
	public ResponseEntity<Responses> getAllBook() {
		return ResponseEntity.ok(dao.getAllBook());
	}
	@PostMapping("/deleteallbook")
	public ResponseEntity<Responses> deleteAllBook(@RequestBody AddBookModel result) {
		return ResponseEntity.ok(dao.deleteAllBook(result));
	}
	@PutMapping("/updateallbook")
	public ResponseEntity<Responses> updateAllBook(@RequestBody AddBookModel result) {
		return ResponseEntity.ok(dao.updateAllBook(result));
	}
	
	
}
