var weatherData;
var request = new XMLHttpRequest();
var days = 5;

loadData();

function loadData() {
    
    request.open('GET', 'https://api.weatherbit.io/v2.0/forecast/daily?city=Salt+Lake+City,UT&units=I&days'+days+'=5&key=4213c047b8ee4891a21221f69db65ecf');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    document.getElementById("place").innerHTML = weatherData.city_name;
    document.getElementById('content').innerHTML = div_holder;
    var div_holder="";
    for(var i=0; i<days;i++){
        div_holder += "<div id = 'day" + i + "'></div>";
        div_holder += "<div id = 'maxTemp" + i + "'></div>";
        div_holder += "<div id = 'minTemp" + i + "'></div>";
        div_holder += "<div id = 'conditions" + i + "'></div>";
    }

 document.getElementById('content').innerHTML=div_holder;
    for(var i=0; i<days;i++){
        var tempDate = new Date();
        tempDate.setDate(tempDate.getDate() + i);
    document.getElementById("day"+ i).innerHTML = (tempDate.getMonth()+1) + "/" + tempDate.getDate();
    document.getElementById("maxTemp" + i).innerHTML = weatherData.data[i].max_temp;
    document.getElementById("minTemp" + i).innerHTML = weatherData.data[i].min_temp;
    document.getElementById("conditions" + i).innerHTML = weatherData.data[i].weather.description;
    }
    $(document).ready(function(){
        var hit = false;
    
        $('#place').on('dblclick', function(){
            if(hit==false){
          $(this).html('My Home');
                hit=true;
            }
            else if (hit==true){
                $(this).html('Salt Lake City');
                hit=false;
            }
        })
    
        $('#conditions1').on('click', function(){
            $('#conditions1').html('<img src="http://www.clker.com/cliparts/d/e/a/b/12741125501689130202cloud-md.png" />');
        
        })
        $('#maxTemp0').on('mouseover', function(){
            $(this).html('Max Temp');
        })
        $('#maxTemp0').on('mouseout', function(){
            $(this).html(weatherData.data[0].max_temp);
        })
        $('#minTemp0').on('mouseover', function(){
            $(this).html('Min Temp');
        })
        $('#minTemp0').on('mouseout', function(){
            $(this).html(weatherData.data[0].min_temp);
        })

        $('#maxTemp1').on('mouseover', function(){
            $(this).html('Max Temp');
        })
        $('#maxTemp1').on('mouseout', function(){
            $(this).html(weatherData.data[1].max_temp);
        })
        $('#minTemp1').on('mouseover', function(){
            $(this).html('Min Temp');
        })
        $('#minTemp1').on('mouseout', function(){
            $(this).html(weatherData.data[1].min_temp);
        })

        $('#maxTemp2').on('mouseover', function(){
            $(this).html('Max Temp');
        })
        $('#maxTemp2').on('mouseout', function(){
            $(this).html(weatherData.data[2].max_temp);
        })
        $('#minTemp2').on('mouseover', function(){
            $(this).html('Min Temp');
        })
        $('#minTemp2').on('mouseout', function(){
            $(this).html(weatherData.data[2].min_temp);
        })

        $('#maxTemp3').on('mouseover', function(){
            $(this).html('Max Temp');
        })
        $('#maxTemp3').on('mouseout', function(){
            $(this).html(weatherData.data[3].max_temp);
        })
        $('#minTemp3').on('mouseover', function(){
            $(this).html('Min Temp');
        })
        $('#minTemp3').on('mouseout', function(){
            $(this).html(weatherData.data[3].min_temp);
        })

        $('#maxTemp4').on('mouseover', function(){
            $(this).html('Max Temp');
        })
        $('#maxTemp4').on('mouseout', function(){
            $(this).html(weatherData.data[4].max_temp);
        })
        $('#minTemp4').on('mouseover', function(){
            $(this).html('Min Temp');
        })
        $('#minTemp4').on('mouseout', function(){
            $(this).html(weatherData.data[4].min_temp);
        })

        $
    });
}

