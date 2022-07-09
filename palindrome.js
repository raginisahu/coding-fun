const array = "abadfacvcazxyzyxz"
let currentChar = ''
for(let i =0 ; i < array.length; i ++) {
	currentChar = array[i];
	for(let j= i+1; j<array.length; j++) {
		if(currentChar == array[j]) {
			let palindrome = array.slice(i,j+1)
			let count = 0
			for(let k=0; k< palindrome.length ;k ++) {
				// console.log("inside palindrome loop",i+k,j-k,array[i+k],array[j-k])
				if(array[i+k] == array[j-k]) {
					// console.log("count",count)
					count++
				} else {
					break;
				} 
				if(palindrome.length-1 == k && palindrome.length == count)
					console.log("PALINDROM",palindrome);
			}
			
		}
	}

}
// console.log("Hey! your reverse String:", reverseStr);



