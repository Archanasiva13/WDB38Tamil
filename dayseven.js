var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
//1.Get all the countries from the Asia continent /region using the Filter function
    var res=result.filter((ele)=>ele.region=="Asia");
    console.log(res);
//2.Get all the countries with a population of less than 2 lakhs using Filter function
    var res=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
    console.log(res);
//3.Print the following details name, capital, flag using forEach function
    result.forEach(myfunction);
    function myfunction(ele)
    {
      console.log(ele.name);
      console.log(ele.capital);
      console.log(ele.flag);   
    }
//4.Print the total population of countries using reduce function
    var res=result.filter((ele)=>ele.latlng).map((ele)=>ele.population);
    var res1=res.reduce((acc,ele)=>(acc+ele),0);    
    console.log(res1);
//5.Print the country which uses US Dollars as currency.
    var res=result.filter((ele)=>ele.currencies).map((ele)=>ele.symbol=="$");
    console.log(res);
    } 






