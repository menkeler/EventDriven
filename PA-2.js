var dates = {"January": 31,"Febuary": 28 ,"March":31,"April":30,"May":31,"June":30,
    "July":31,"August":31,"September":30,"October":31,"November":30,"December":30}; 
   
let month = prompt("Month 1-12");
let day = prompt("Start Day 1-7");
   if(month < 13 && day < 8 && month > 0 && day > 0){

       let honetag = document.getElementsByName("month");
       honetag[0].innerHTML = Object.keys(dates)[month-1];

       let tbody = document.getElementById("Calendar").getElementsByTagName("tbody")[0];
       let newRow =  tbody.insertRow();
       var current = 0;

       for(i = 1; i <= 999;i++){
           if(i != 1 && i % 7 == 1){
               newRow = tbody.insertRow(); 
           }
           let cellid =  newRow.insertCell();
           if(i % 7 == 1){
               cellid.setAttribute("style","border: 1px solid red;");
           }
           if(i >= day && current <= Object.values(dates)[month-1]-1){
           current++;
           cellid.innerText = current;
           }
           if(Object.values(dates)[month-1] == current && i % 7==0){
               break; 
           } 
       }
    }
   else{
    var hone = document.getElementsByName("error");
    hone[0].innerHTML= "Invalid Input";
    }