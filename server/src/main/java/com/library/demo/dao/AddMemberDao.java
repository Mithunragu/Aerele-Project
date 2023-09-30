package com.library.demo.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;

import com.library.demo.model.AddMemberModel;
import com.library.demo.model.Responses;
import com.library.demo.service.AddMemberService;

@Component
public class AddMemberDao implements AddMemberService {

	Responses res = new Responses();

	String url = "jdbc:mysql://127.0.0.1:3306/library_management";
	String user = "root";
	String pass = "two5062001";

	@Override
	public Responses createMember(AddMemberModel result) {

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setCreatedDate(date);
		result.setUpdatedDate(date);
		result.setOutstandingDebt(0);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String insertQuery = "INSERT INTO library_management.user_details"
						+ "(member_id,fname,lname,age,email,phnumber,outstandingdebt,created_date,updated_date)" + "VALUES("
						+ result.getMemberId()+ ",'" + result.getfName() + "','" + result.getlName() + "'," + result.getAge()
						+ ",'" + result.getEmail() + "'," + result.getPhoneNumber() + "," + result.getOutstandingDebt()
						+ ",'" + result.getCreatedDate() + "','" + result.getUpdatedDate() + "');";

				st.executeUpdate(insertQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Member Added successfully!");

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseCode(500);
				res.setResponseMsg("Error");
				res.setData("Internal Server Error!");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return res;
	}

	@Override
	public Responses login(AddMemberModel result) {

		return res;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Responses getAllMember() {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getallmemberQuery = "SELECT * FROM library_management.user_details;";

			System.out.println(getallmemberQuery);

			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getallmemberQuery);) {

				JSONArray jsonArray = new JSONArray();

				while (rs.next()) {

					JSONObject jsonobject = new JSONObject();

					jsonobject.put("memberId", rs.getString("member_id"));
					jsonobject.put("fName", rs.getString("fname"));
					jsonobject.put("lName", rs.getString("lname"));
					jsonobject.put("age", rs.getInt("age"));
					jsonobject.put("email", rs.getString("email"));
					jsonobject.put("phoneNumber", rs.getLong("phnumber"));
					jsonobject.put("outstandingDebt", rs.getInt("outstandingdebt"));
					jsonArray.add(jsonobject);

//					System.out.println(jsonArray);

				}
				
				res.setResponseMsg("success");
				res.setResponseCode(200);
				res.setData("View All  Member Successfully!");
				res.setjData(jsonArray);


			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return res;
	}

	@Override
	public Responses deleteAllMember(AddMemberModel result) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String deleteQuery = "DELETE FROM library_management.user_details" + " WHERE email='" + result.getEmail() + "';";

				System.out.println(deleteQuery);
				st.executeUpdate(deleteQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Member Deleted Successfully");

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseCode(500);
				res.setResponseMsg("Error");
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		
		
		
		return res;
	}

	@Override
	public Responses updateAllMember(int memberId, AddMemberModel result) {

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setUpdatedDate(date);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String updateQuery = "UPDATE library_management.user_details SET "
						+ "fname ='"+result.getfName()+"',lname ='"+result.getlName()+"',age ="+result.getAge()+" ,email ='"+result.getEmail()+"',phnumber ="+result.getPhoneNumber()+",updated_date ='"+result.getUpdatedDate()+"' WHERE member_id ="+memberId+" ;"
						+ ""
						+ ""
						+ "";

				System.out.println(updateQuery);
				st.executeUpdate(updateQuery);

				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Updated Member Successfully");

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseCode(500);
				res.setResponseMsg("Error");
				res.setData("Internal Server Error!");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return res;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Responses getoneMember(int memberId) {
		System.out.println(memberId);
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getoneQuery ="select * from  library_management.user_details where member_id ='" +memberId + "';";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getoneQuery);) {

				JSONArray jsonArray = new JSONArray();

				
					while (rs.next()) {

						JSONObject jsonobject = new JSONObject();

						jsonobject.put("fName",rs.getString("fname"));
						jsonobject.put("lName", rs.getString("lname"));
						jsonobject.put("age", rs.getInt("age"));
						jsonobject.put("email", rs.getString("email"));
						jsonobject.put("phoneNumber", rs.getLong("phnumber"));

						
						jsonArray.add(jsonobject);

						res.setResponseMsg("success");
						res.setResponseCode(200);
						res.setData("View one Member Successfully!");
						res.setjData(jsonArray);
					}
				

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
		
		return res;
	}
		

}
