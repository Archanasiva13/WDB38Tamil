 var request=new XMLHttpRequest();
 request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
 request.send();
 request.onload=function()
 
    {
    var result=JSON.parse(request.response);
    console.log(result);
    //Flags as a output in the console
    var res=result.filter((ele)=>ele.currencies).map((ele)=>ele.flag);
    console.log(res);
    
    //getting countries names,regions,subregions and populations.
    for(i=0;i<result.length;i++)
    {
    console.log(result[i].name);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(result[i].population);

    } 
    //comparing two json have the same properties without order.
    var obj1={name:"person1",age:5};
    var obj2={age:5,name:"person1"};
    if(JSON.stringify(obj1)===(JSON.stringify(obj2)))
    {
       return false;

    }
    else 
    {
        return true;

    }
    }
   