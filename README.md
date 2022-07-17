DAY1

1.Difference between HTTP1.1 and HTTP2

HTTP 1.1                                      

1.HTTP/1.1 loads resources one after the other, so if one resource cannot be loaded, it blocks all the other resources behind it.
2.HTTP1.1 is bit slower compared to HTTP2.
3.HTTP1.1 keeps all requests and responses in plain text format.
4.It compresses data by itself.
5.It uses requests resource Inlining for use getting multiple pages.

HTTP2

1.HTTP/2 is able to use a single TCP connection to send multiple streams of data at once so that no one resource blocks any other resource.
2.HTTP2 is much faster and more reliable than HTTP1.1.
3.HTTP2 works on the binary protocol.
4.It uses HPACK for data compression.
5.It uses PUSH frame by server that collects all multiple pages.

2.Objects and its internal representation in js

A JavaScript object is a collection of named values having state and behavior (properties and method)”.Objects are variables too. But objects can contain many values.
Object values are written as name : value pairs (name and value separated by a colon).

syntax:
var <object-name> = {key1: value1, key2: value2,... keyN: valueN};
Example:
var car = {Make: “Mercedes”, Model: “C-Class”, Color: “White”, Fuel: Diesel, Weight: “850kg”, Mileage: “8Kmpl”, Rating: 4.5};



