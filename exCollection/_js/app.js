$(document).ready(function () {

  /*Global Array*/
  var divisionArray = [];

  /*Divison Constructor*/
  function division(name, capital) {
    this.type = "province";
    this.name = name;
    this.capital = capital;
  }//division

	$.ajax({
		type: "GET",
		url: "canada.xml",
		dataType: "xml",
    async: true,
		success: getDivision, 
		error: function () {
			alert('error in calling xml file')
		}
	});

  function getDivision(xml) {
  /*
  * Gets the xml object
  * Converts it into a division object
  * Finall, lays out the object into the hmtl file
  */
    $(xml).find('division').each(function() {
      var test = new division($(this).find('name').text(),
                              $(this).find('capital').text()
                             );
      divisionArray.push(test);
    });
    
   //Layout the objects to html file
   $.each(divisionArray, function(index, value) {
    $('#out').append(value.name + ', ' + value.capital + '<br>');
   });
  }//function

});
