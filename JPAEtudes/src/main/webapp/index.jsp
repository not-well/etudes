<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" href="styles/index.css">
		
		<%
			Date date = new Date();
		%>
	</head>
	<body>
		<h1>Current time: <%=date%></h1>
	</body>
</html>