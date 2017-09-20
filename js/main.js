$(document).ready(function() {
	var url,latitutde,longitude,contry,city,temprature,celsius,fahrenheit,weatherparam;
	if(navigator.geolocation){		navigator.geolocation.getCurrentPosition(function(pos){
			var lat=pos.coords.latitude;
			var lon=pos.coords.longitude;
 url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=b25ca364bc04acd2ca3e3aa725eb7097&units=metric";
			$.ajax({
		url: url,
		type: 'GET', 
		dataType: 'json',
		success: function(data) { 
      console.log(JSON.stringify(data));
      city=data.name;
      contry=data.sys.country;
      temprature=data.main.temp;
      celsius=temprature;
      fahrenheit=celsius*1.8+32;
      var icon=data.weather[0].icon;
      weatherparam=data.weather[0].main;
 $('.iconpic>img').attr('src','http://openweathermap.org/img/w/'+icon+'.png');
      $('.city').html(city);
      $('.country').html(contry);
      $('.temp').html(temprature+"&#8451;");
				},
		error: function(err) { alert(err); }
	});
		});
	}
	else{
		$('.weather').html("geolocation is not supported by your browser.");
	}
  $('.toggle .btn').click(function(){
    if($('.toggle').attr('id')=='c'){
   $('.temp').html(fahrenheit+"&#8457;");
      $('.toggle').attr('id','f');
    }
   else if($('.toggle').attr('id')=='f'){
      $('.temp').html(celsius+"&#8451;");
      $('.toggle').attr('id','c');
    }
  });
});
