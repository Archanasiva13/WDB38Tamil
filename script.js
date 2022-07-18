 var request=new XMLHttpRequest();
 request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
 request.send();
 request.onload=function()
 {
     var result=JSON.parse(request.response);
    
     for(var i=0;i<result.length;i++)
     {
     console.log(result[i].name);
     }

     for(let i in result)
     {
     console.log(result[i].capital);
     }
     for (const name of result) 
     {
        console.log(name);
     }
     result.forEach(name=>console.log(name));
}


