 function pricecalculate() {
    var Adult = parseInt(document.getElementById("adult").value);
    var dateI1 = document.getElementById("fromDate").value;  
    var dateI2 = document.getElementById("toDate").value;   
    var date1 = new Date(dateI1);  
    var date2 = new Date(dateI2);  
    var time_difference = date2.getTime() - date1.getTime();  
    var result = (time_difference / (1000 * 60 * 60 * 24))*Adult*1000;  
    return document.getElementById("price").value = result;  
  }  
  