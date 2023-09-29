package com.library.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.library.demo.dao.AddMemberDao;
import com.library.demo.model.AddMemberModel;
import com.library.demo.model.Responses;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AddMemberController {

	@Autowired
	private AddMemberDao dao;

	@PostMapping("/insert")
	public ResponseEntity<Responses> createMember(@RequestBody AddMemberModel result) {
		return ResponseEntity.ok(dao.createMember(result));
	}

	@GetMapping("/getallmember")
	public ResponseEntity<Responses> getAllMember() {
		return ResponseEntity.ok(dao.getAllMember());
	}

	@PostMapping("/deleteallmember")
	public ResponseEntity<Responses> deleteAllMember(@RequestBody AddMemberModel result) {
		return ResponseEntity.ok(dao.deleteAllMember(result));
	}
	
	@PutMapping("/updateallmember")
	public ResponseEntity<Responses> updateAllMember(@RequestBody AddMemberModel result) {
		return ResponseEntity.ok(dao.updateAllMember(result));
	}
	
	@GetMapping("/getonemember")
	public ResponseEntity<Responses> getoneMember(@RequestBody AddMemberModel result ){
		return ResponseEntity.ok(dao.getoneMember(result));
	}

}
