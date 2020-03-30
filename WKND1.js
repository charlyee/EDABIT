// ASSIGNMENT 1: Write a function that returns the first n vowels of a string.

function firstNVowels(s, n) {
    var regex = /[aeiou]/gi;
    var vowel = s.match(regex);
    var result = "";
    if(vowel.length >= n){
        for(var i = 0; i < n; i++){
             result += vowel[i];    
    } 
    return result;
    } else {
        return "invalid";                
        }
}




// ASSIGNMENT 2: Create a function that takes an integer n and reverses it

function rev(n) {
	n = n + "";
	return n.split('').reverse().join('');
}
console.log(rev(987654));  
// For some reason, i couldnt get the code to work for negative numbers. 
// I am still working on it but for now, i do not want to miss the submission deadline.
