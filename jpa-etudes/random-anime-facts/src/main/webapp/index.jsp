<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.util.Random"%>
<%@ page import="com.fasterxml.jackson.databind.ObjectMapper" %>
<%@ page import="java.net.URL" %>
<%@ page import="io.github.wellvergton.bean.AllAnimes" %>
<%@ page import="io.github.wellvergton.bean.Anime"%>
<%@ page import="io.github.wellvergton.bean.AnimeData"%>

<%!
	ObjectMapper mapper = new ObjectMapper();
	Random random = new Random();
	String baseUrl = "https://anime-facts-rest-api.herokuapp.com/api/v1/";
	boolean success = true;
	AllAnimes allAnimes;
	Anime randomAnime;
	AnimeData randomAnimeData;
	int randomNumber;
%>

<%
	try {		
		allAnimes = mapper.readValue(new URL(baseUrl), AllAnimes.class);
		
		randomNumber = random.nextInt(allAnimes.getData().size());
		
		randomAnime = allAnimes.getData().get(randomNumber);
		randomAnimeData = mapper.readValue(new URL(baseUrl + randomAnime.getAnime_name()), AnimeData.class);
		
		randomNumber = random.nextInt(randomAnimeData.getData().size());
		
		request.setAttribute("animeName", randomAnime.getAnime_name());
		request.setAttribute("animeImg", randomAnime.getAnime_img());
		request.setAttribute("fact", randomAnimeData.getData().get(randomNumber).getFact());
	} catch (Exception e) {
		success = false;
	}
%>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Random Anime Facts</title>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma-rtl.min.css">
	</head>
	<body>
		<div class="columns is-centered">
			<div class="column is-one-fifth">
				<div class="card mt-6">
					<div class="card-header">
						<p class="card-header-title is-centered">${animeName}</p>
					</div>
					<div class="card-image">
						<figure class="image">
							<img src="${animeImg}" />
						</figure>
					</div>
					<div class="card-content">
						<div class="content">
							${fact}
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>