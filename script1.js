 var request=new XMLHttpRequest();
 request.open("GET","myresume.json");
 request.send();
 request.onload=function()
 {
     var resume=JSON.parse(request.response);
     var contact = [{"first_name": "","last_name": "","email": "","address":"","contact": ""}];
     var Education=[{"InstitutionName": "","passedout":"","Marks":""}];
     var workexperience=[{"start-date": "","end-date": "","position": "","company":""}];            
     var projects= [{"title": "","description":"","technologies":""}];
     var skills = [{"skill1":"","skill2":""}];
}
    


