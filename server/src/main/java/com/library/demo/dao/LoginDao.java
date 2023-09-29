package com.library.demo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import org.springframework.stereotype.Component;
import com.library.demo.model.LoginModel;
import com.library.demo.model.Responses;
import com.library.demo.service.LoginService;

@Component
public class LoginDao implements LoginService {

	Responses res=new Responses();
	
	String url = "jdbc:mysql://127.0.0.1:3306/library_management";
	String user = "root";
	String pass = "two5062001";
	
	@Override
	public Responses login(LoginModel result) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String loginQuery = "SELECT * FROM library_management.librarian_table WHERE email='" +result.getEmail() + "' and password='"
					+ result.getPassword() + "'and passkey='"+result.getPassKey()+"' ;";
			
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					PreparedStatement st = conn.prepareStatement(loginQuery);
					ResultSet rs = st.executeQuery(loginQuery);) {

				if (rs.next()) {
					if (result.getEmail().equals(rs.getString("email")) && result.getPassword().equals(rs.getString("password")) && result.getPassKey().equals(rs.getString("passkey")) ) {
						res.setData("Welcome  Librarian");
						res.setResponseCode(200);
						res.setResponseMsg("Success");
					} 
				} else {
					res.setData("Invalid  Librarian");
					res.setResponseCode(500);
					res.setResponseMsg("Error");
				}
				
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

}
