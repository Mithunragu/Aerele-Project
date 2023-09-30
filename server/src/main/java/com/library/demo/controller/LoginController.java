package com.library.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.library.demo.dao.AddMemberDao;
import com.library.demo.dao.LoginDao;
import com.library.demo.model.LoginModel;
import com.library.demo.model.Responses;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class LoginController {
	
	@Autowired
	private LoginDao dao;
	
	@PostMapping("/logins")
	public ResponseEntity<Responses> login(@RequestBody LoginModel result) {
		return ResponseEntity.ok(dao.login(result));
	}
	
	

}
