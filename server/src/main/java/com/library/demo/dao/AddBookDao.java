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

import com.library.demo.model.AddBookModel;
import com.library.demo.model.Responses;
import com.library.demo.service.AddBookService;

@Component
public class AddBookDao implements AddBookService {

	Responses res = new Responses();
	String url = "jdbc:mysql://127.0.0.1:3306/library_management";
	String user = "root";
	String pass = "two5062001";

	@Override
	public Responses createBook(AddBookModel result) {

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setCreatedDate(date);
		result.setUpdatedDate(date);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String insertBookQuery = "INSERT INTO library_management.add_book"
						+ "(imagelink,title,author,quantity,rentfee,created_by,updated_date)VALUES('"+result.getImageLink()+"','"
						+ result.getTitle() + "','" + result.getAuthor() + "'," + result.getQuantity() + ","
						+ result.getRentFee() + ",'" + result.getCreatedDate() + "','" + result.getUpdatedDate() + "');"
						+ "";
             System.out.println(insertBookQuery);
				st.executeUpdate(insertBookQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Book Added successfully!");

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
	public Responses getAllBook() {

		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getallmemberQuery = "SELECT * FROM library_management.add_book;";

			System.out.println(getallmemberQuery);

			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getallmemberQuery);) {

				JSONArray jsonArray = new JSONArray();

				while (rs.next()) {

					JSONObject jsonobject = new JSONObject();

					jsonobject.put("bookId", rs.getString("book_id"));
					jsonobject.put("imageLink", rs.getString("imagelink"));
					jsonobject.put("title", rs.getString("title"));
					jsonobject.put("author", rs.getString("author"));
					jsonobject.put("quantity", rs.getInt("quantity"));
					jsonobject.put("rentFee", rs.getInt("rentfee"));
					jsonArray.add(jsonobject);

//					System.out.println(jsonArray);

				}
				
				res.setResponseMsg("Success");
				res.setResponseCode(200);
				res.setData("View All  Book Successfully!");
				res.setjData(jsonArray);


			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("Error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}

	@Override
	public Responses deleteAllBook(AddBookModel result) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String deleteQuery = "DELETE FROM library_management.add_book" + " WHERE book_id='" + result.getBookId()+ "';";

				System.out.println(deleteQuery);
				st.executeUpdate(deleteQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Book Deleted Successfully");

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
	public Responses updateAllBook(int bookId, AddBookModel result) {

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setUpdatedDate(date);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String updatebookQuery ="UPDATE library_management.add_book  SET "
						+ "imagelink ='"+result.getImageLink()+"' ,title ='"+result.getTitle()+"' ,author ='"+result.getAuthor()+"' ,quantity ="+result.getQuantity()+" ,rentfee ="+result.getRentFee()+" ,updated_date ='"+result.getUpdatedDate()+"' WHERE book_id = "+bookId+";";

				System.out.println(updatebookQuery);
				st.executeUpdate(updatebookQuery);

				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Updated Book Successfully");

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
	public Responses getoneBook(int bookId) {
		
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getoneQuery ="select * from  library_management.add_book where book_id ='" +bookId + "';";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getoneQuery);) {

				JSONArray jsonArray = new JSONArray();
					while (rs.next()) {

						JSONObject jsonobject = new JSONObject();
						jsonobject.put("imageLink",rs.getString("imagelink"));
						jsonobject.put("title", rs.getString("title"));
						jsonobject.put("author", rs.getString("author"));
						jsonobject.put("quantity", rs.getInt("quantity"));
						jsonobject.put("rentFee", rs.getInt("rentfee"));

						
						jsonArray.add(jsonobject);

						res.setResponseMsg("Success");
						res.setResponseCode(200);
						res.setData("View one Book Successfully!");
						res.setjData(jsonArray);
					}
			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("Error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return res;
	}

	

}
