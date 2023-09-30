package com.library.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@PutMapping("/updateallmember/{memberId}")
	public ResponseEntity<Responses> updateAllMember(@PathVariable int memberId, @RequestBody AddMemberModel result) {
		return ResponseEntity.ok(dao.updateAllMember(memberId, result));
	}
	
	@GetMapping("/getonemember/{memberId}")
	public ResponseEntity<Responses> getoneMember(@PathVariable int memberId ){
		System.out.println(memberId);
		return ResponseEntity.ok(dao.getoneMember(memberId));
	}

}
