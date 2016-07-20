$(document).ready(function () {
	
	//Get canada.xml document
	var canadaFile;

	$.ajax({
		type: "GET",
		url: "canada.xml",
		dataType: "xml",
		success: function(data) {
			console.log(data)
		},
		error: function () {
			alert('error in calling xml file')
		}
	});
	//Convert to JSON
	//Console log
});
