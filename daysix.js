//3.Write a “person” class to hold all the details.
class Person {
    constructor(name, age, qualification){
        this.name = name;
        this.age = age; 
        this.qualification = qualification;
    }
    introduceself()
  {
  console.log("Hi! I'm " +" "+ this.name +" "+ "my age is"+" "+ this.age+" "+ "degree" +" "+this.qualification);  
  }
    }
const person1 = new Person("john", "25", "B.sc");
const person2 = new Person("joe", "24", "B.E");
const person3 = new Person("jovin", "26", "B.com");
const person4 = new Person("jaya", "23", "M.E");
const person5 = new Person("joepaul", "22", "B.Tech");
console.log(person1.name+" "+person1.age+" "+person1.qualification);
console.log(person2.name+" "+person2.age+" "+person2.qualification);
console.log(person3.name+" "+person3.age+" "+person3.qualification);
console.log(person4.name+" "+person4.age+" "+person4.qualification);
console.log(person5.name+" "+person5.age+" "+person5.qualification);
person1.introduceself();
person2.introduceself();
person3.introduceself();
person4.introduceself();
person5.introduceself();

//4.write a class to calculate the uber price.
let baseFee = .44;
let cities = ["Chennai", "Bangalore", "Delhi" ];
let uberRates = [10, 12, 15];
let customerName = "John";
let customerCity = "Chennai";
console.log("Hello"+" "+customerName+ ", welcome to the Uber");
function getRate(customerCity) {
    function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee;
    return finalRate;
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)));
}
getRate(customerCity);

//1.class movie
//a.Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, 
//and a String representing the rating as its arguments, and sets the respective class properties to these values.
class movie
{
constructor (title,studio,rating)
{
  this.title=title;
  this.studio=studio;
  this.rating=rating;
}
newmovie()
{
console.log("Movie name"+" "+this.title+" "+"from"+" "+this.studio+" "+"got rating"+" "+this.rating);
}

}
const a=new movie("Harrypotter","Warner Bros","4.9");
console.log(a.title+" "+a.studio+" "+a.rating);
a.newmovie();

//b.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
class movie
{
constructor (title,studio,rating)
{
  this.title=title;
  this.studio=studio;
  this.rating="PG";
 }
newmovie()
{
console.log("Movie name"+" "+this.title+" "+"from"+" "+this.studio+" "+"got rating"+" "+this.rating);
}

}
const b=new movie("Harrypotter","Warner Bros");
console.log(b.title+" "+b.studio+" "+b.rating);
b.newmovie();

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". 
//You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie[] 
{
getPG(Movie[] mov) 
{
 Movie[] pgMov = new Movie[mov.length];
 var newArrayIndex = 0;
 for (var i = 0; i < mov.length; i++) {
 if (mov[i].rating.equals("PG")) 
 {
 pgMov[newArrayIndex] = mov[i];
 newArrayIndex++;
 }
 }
 return pgMov;
}
}

//d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie
{
constructor (title,studio,rating)
{
  this.title=title;
  this.studio=studio;
  this.rating=rating;
}
newmovie()
{
console.log("Movie name"+" "+this.title+" "+"from"+" "+this.studio+" "+"got rating"+" "+this.rating);
}
}
const mov=new movie("Casino Royale","Eon Productions","PG-13");
console.log(mov.title+" "+mov.studio+" "+mov.rating);
mov.newmovie();

//2.class :circle

class Circle
{
   
    constructor(r,c)
    {
        var radius = 0.0;
        const color = null;
        this.radius = 1.0;
        this.color = "red";
        this.radius = r;
        this.color = "Blue";
        this.color = c;
    }
    getRadius()
    {
        return this.radius;
    }
    setRadius(newRadius)
    {
        this.radius = newRadius;
    }
    getColor()
    {
        return this.color;
    }
    setColor(newColor)
    {
        this.color = newColor;
    }
    getArea()
    {
        return this.radius * this.radius * 3.141592653589793;
    }
}
        var c1 = new Circle();
        console.log("The circle has radius of " + c1.getRadius());
        console.log("and area of " + c1.getArea());
        var c2 = new Circle(2.5);
        console.log("The circle has radius of " + c2.getRadius());
        console.log("and area of " + c2.getArea());
        var c3 = new Circle(0.5);
        c3.setColor("Green");
        console.log("The circle has radius of " + c3.getRadius());
        console.log("and area of " + c3.getArea());
        console.log("color is: " + c3.getColor());
        var c5 = new Circle();
        c5.setRadius(500.0);
        console.log("radius is: " + c5.getRadius());
        c5.setColor("Yellow");
        console.log("color is: " + c5.getColor());
        Main.main([]);
    


