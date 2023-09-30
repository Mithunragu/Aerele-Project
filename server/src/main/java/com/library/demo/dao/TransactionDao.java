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
import com.library.demo.model.Responses;
import com.library.demo.model.TransactionModel;
import com.library.demo.service.TransactionService;

@Component
public class TransactionDao implements TransactionService {

	int totalPrice, outDebt, totalDebt, memberId;

	Responses res = new Responses();

	String url = "jdbc:mysql://127.0.0.1:3306/library_management";
	String user = "root";
	String pass = "two5062001";

	@Override
	public Responses issueBook(TransactionModel result) {

		ResultSet rs;
		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setTransDate(date);

		result.setFineAmount(0);

		try {

			System.out.println("Enterning Try-1");

			Class.forName("com.mysql.cj.jdbc.Driver");

			String priceQuery = "select rentfee from library_management.add_book where book_id = " + result.getBookId()
					+ "";// step-1

			String debtQuery = "select out_debt, member_id from library_management.transaction_details where member_id = "
					+ result.getMemberId() + ""; // step-2

			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					Statement st1 = conn.createStatement();
					Statement st2 = conn.createStatement();) {
				System.out.println("Enterning Try-2");
				rs = st.executeQuery(priceQuery);

				while (rs.next()) {
					System.out.println("Enterning While-1");
					totalPrice = rs.getInt("rentfee") * result.getDueDay(); // step-1
				}

				System.out.println(totalPrice);

				rs = st1.executeQuery(debtQuery);
				while (rs.next()) {
					System.out.println("Enterning While-2");
					outDebt = rs.getInt("out_debt");
					memberId = rs.getInt("member_id");
					System.out.println(outDebt);
					System.out.println(memberId);
				}

				System.out.println(outDebt);
				System.out.println(memberId);

				if (outDebt == 0 && memberId == 0) {
					System.out.println("Enterning If-1");
					String insertQuery = "INSERT INTO library_management.transaction_details"
							+ "(book_id,member_id,trans_date,due_day,out_debt,fine_amount,"
							+ "status,due_date,return_date)VALUES\r\n" + "(" + result.getBookId() + ","
							+ result.getMemberId() + "," + "'" + result.getTransDate() + "'," + result.getDueDay() + ","
							+ "" + totalPrice + "," + result.getFineAmount() + ",'" + result.getStatus() + "','"
							+ result.getDueDate() + "','" + result.getReturnDate() + "');";
					
					st2.executeUpdate(insertQuery);

					res.setResponseCode(200);
					res.setResponseMsg("Success");
					res.setData("Book Issued! And Your Debt Is " + totalPrice + "!");

				} else if (outDebt >= 0 && memberId != 0) {
					System.out.println("Enterning Else-If");
					totalDebt = totalPrice + outDebt;
					System.out.println(totalDebt);
					if (totalDebt > 500) {
						System.out.println("Entering If-2");
						res.setResponseCode(400);
						res.setResponseMsg("Error");
						res.setData("Outstanding Debt Has Reached It's Limit!");

					} else if (totalDebt > 0 && totalDebt <= 500) {
						System.out.println("Enterning Else-If2");
						String updateQuery = "Update library_management.transaction_details set out_debt = " + totalDebt
								+ " where member_id = " + memberId + ";";

						st2.executeUpdate(updateQuery);
						res.setResponseCode(200);
						res.setResponseMsg("Issued");
						res.setData("Book Issued! And Your Debt Is " + totalDebt + "!");
					}
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

	@SuppressWarnings("unchecked")
	@Override
	public Responses getAlltransactionList() {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getalltransactionQuery = "SELECT * FROM library_management.transaction_details;";

			System.out.println(getalltransactionQuery);

			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getalltransactionQuery);) {

				JSONArray jsonArray = new JSONArray();

				while (rs.next()) {

					JSONObject jsonobject = new JSONObject();

					jsonobject.put("tId", rs.getInt("t_id"));
					jsonobject.put("bookId", rs.getInt("book_id"));
					jsonobject.put("memberId", rs.getInt("member_id"));
					jsonobject.put("transDate", rs.getDate("trans_date"));
					jsonobject.put("dueDay", rs.getInt("due_day"));
					jsonobject.put("outstandingDebt", rs.getInt("out_debt"));
					jsonobject.put("fineAmount", rs.getInt("fine_amount"));
					jsonobject.put("status", rs.getString("status"));
					jsonobject.put("dueDate", rs.getDate("due_date"));
					jsonobject.put("returnDate", rs.getDate("return_date"));
					jsonArray.add(jsonobject);

//					System.out.println(jsonArray);

				}
				
				res.setResponseMsg("Success");
				res.setResponseCode(200);
				res.setData("View All  Transaction List!");
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
	public Responses deleteAllTransaction(TransactionModel result) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String deleteQuery = "DELETE FROM library_management.transaction_details" + " WHERE t_id='" + result.gettId() + "';";

				System.out.println(deleteQuery);
				st.executeUpdate(deleteQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Transaction Deleted Successfully");

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
