function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

function postToGoogle() {
  var field1 = $("#nameField").val();
  var field2 = $("#emailField").val();
  var field3 = $("#mobField").val();
  //var field4 = $("#cinema option:selected").text();

if(field1 == ""){
alert('Please Fill Your Name');
document.getElementById("nameField").focus();
return false;
}
if(field2 == ""){
alert('Please Fill Your Email');
document.getElementById("emailField").focus();
return false;
}
if(field3 == "" || field3.length > 12 || field3.length < 10){
alert('Please Fill Your Mobile Number');
document.getElementById("mobField").focus();
return false;
}




    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfy3ZeztXJ8cDbRk8cKV65Jp-0j4cz7E9CmIx93zXBxEv140g/formResponse?",
data: {"entry.90391935": field1, "entry.2087298110": field2, "entry.620120297": field3},
        type: "POST",
        dataType: "xml",
        success: function(d)
{
},
error: function(x, y, z)
{
  window.location.href = "https://www.fullstackacademy.com/software-engineering-immersive";
}
    });
return false;
}
