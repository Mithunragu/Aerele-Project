package com.library.demo.service;

import com.library.demo.model.AddMemberModel;
import com.library.demo.model.Responses;

public interface AddMemberService {

	public Responses createMember(AddMemberModel result);

	public Responses login(AddMemberModel result);

	public Responses getAllMember();

	public Responses deleteAllMember(AddMemberModel result);

	public Responses updateAllMember(AddMemberModel result);

 	public Responses getoneMember(AddMemberModel result);

}
