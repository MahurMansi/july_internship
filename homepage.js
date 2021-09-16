function couponId()
{
    document.getElementById('coupon').style.visibility = "visible"
}
function hide()
{
    document.getElementById('coupon').style.visibility = "hidden"
}
function promo()
{
    document.getElementById('promo').style.visibility = "hidden"
}
  function p()
  {
document.getElementById('p').style.visibility = "visible"


  }
  var city = [ "--Select Location--","Mumbai ","Goa","Uttar Pradesh " ,"Uttarakhand","kolkata","Delhi","Himachal Pradesh"]
  function getCity(){
    for(i=0;i<city.length;i++){
        var element = document.createElement('option');
        var text = document.createTextNode(city[i]);
        element.appendChild(text);
        element.value=city[i];
        document.getElementsByClassName('btn btn dropdown-toggle')[0].appendChild(element)
    }
} 
var city = [ "--Select Restaurants--","Pizza Hut ","The Big Chill Bakery","Anandam " ,"The Pizza Box ","Pahalwan Dhaba","Da Mexican Pizza"]
function getRestro(){
    for(i=0;i<city.length;i++){
        var element = document.createElement('option');
        var text = document.createTextNode(city[i]);
        element.appendChild(text);
        element.value=city[i];
        document.getElementsByClassName('btn btn dropdown-toggle')[1].appendChild(element)
    }
} 
function changeMode(){
    var mybody = document.body;
    // if body have class mydark it will remove the class else add
    mybody.classList.toggle("mydark");
}