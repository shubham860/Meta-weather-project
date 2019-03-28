function latilongi() {
var location = document.getElementById('input').value;
var url ='https://www.metaweather.com/api/location/search/?query=' + location + '';

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
   if (request.readyState == 4 && request.status == 200) {
      var data = JSON.parse(request.responseText);
         console.log(data);

   }
 };
 request.open('GET',url,true);
 request.send();
 return true;
}


 function my(){
document.getElementById('text').value="";
}
