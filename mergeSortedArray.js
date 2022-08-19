const a =[2,3,4,5,6]
const b = [5,6,7,8]

const sorted=[]; let aIndex =0, bIndex=0;

while(aIndex < a.length && bIndex<b.length) {
	if(a[aIndex] > b[bIndex]) {
		sorted.push(b[bIndex])
		bIndex ++
	} else {
		sorted.push(a[aIndex])
		aIndex++
	}
}
if(aIndex < a.length) {
	sorted.splice(sorted.length,0, ...a.slice(aIndex))
} 
else if(bIndex < b.length) {
	sorted.splice(sorted.length,0, ...b.slice(bIndex))
}

console.log(sorted,'sorted array')
