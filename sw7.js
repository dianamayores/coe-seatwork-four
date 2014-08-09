var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

mostFrequent(arr1);


/*jshint multistr:true */

var arr1= [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var letter = "a";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < arr1.length; i++) {
	if (arr1[i] === "a") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (letter.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}