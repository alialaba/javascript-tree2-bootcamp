let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);
let newString = myString.split('\,').join(' ');
console.log(newString);
// The split() method divides a String into an ordered list of substrings 
//substrings into an array, and returns the array.