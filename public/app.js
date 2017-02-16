// Scraping with Mongoose - App.js

$.getJSON("/news", function (data) {
	for (var i = 0; i < data.length; i++) {
		$("#newsContainer").append("<p data-id'" + data[i]._id + "'>" + data[i].title + "<br>" + data[i].articule + "<br>" + data[i].comments + "</p>");
	}
});

$(document).on("click", "p", function () {
	var specificID = $(this).attr("data-id");
	$(this).empty();

	$.ajax({
		method: "GET",
		url: "/news/" + specificID
	}).done(function (data) {
		console.log(data);

		$("#news").append("<h3>" + data.title + "</h3>");

		$("#news").append("<input id = 'titleInput' name='title'>");

		$("#news").append("<textarea id='bodyInput' name='body'></textarea>");

		$("#news").append("<button data-id='" + data._id + "' id='saveComment'Save</button>");

		if (data.comments) {
			$("#titleInput").val(data.news.comments);
			$("#bodyInput").val(data.news.body);
		}
	});
});

$(document).on("click", "#saveComment", function () {
	var specificID = $(this).attr("data-id");

	$.ajax({
		method: "POST",
		url: "/news/" + specificID,
		data: {
			title: $("#titleInput").val().trim(),
			body: $("#bodyInput").val().trim()
		}
	}).done(function (data) {
		console.log(data);
		$("#news").empty();
	});
	$("#titleInput").val("");
	$("#bodyInput").val("");
});
