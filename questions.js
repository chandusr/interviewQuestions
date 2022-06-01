

// smallest and second smallest value from array

let arr = [123,3,65,7,26,87,3,9];
let smallest = arr[0], secondSmallest = arr[0];
for(let i=0; i < arr.length ; i++) {
    if(arr[i]<smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    }
    if(arr[i]<secondSmallest && arr[i]>smallest) {
        secondSmallest = arr[i];
    }
}
console.log('Smallest number: ', smallest)
console.log('Second Smallest number: ', secondSmallest);


// sorting without using another array
const sort_arr = [123,3,65,7,26,87,3,9];

console.log(sort_arr.sort((a, b)=>{return a - b}));


for(let i=0;i<sort_arr.length;i++){
    for(let j=0;j<i;j++){
        if (sort_arr[i] < sort_arr[j]) {
            const x = sort_arr[i];
            sort_arr[i] = sort_arr[j];
            sort_arr[j] = x;
        }
    }
}
console.log(sort_arr);

//

const chars = ['A', 'B', 'A', 'C', 'B'];
const uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

const uniqueValue = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});
console.log(uniqueValue)

console.log(chars.reduce((a,b)=>{if(a.indexOf(b)<0)a.push(b);return a;},[]));

// 

const duplicateValue = chars.filter((c, index) => {
    return chars.indexOf(c) !== index;
});
console.log(duplicateValue)

// duplicate value count

const count = chars.reduce((accumulator, value) => {
    return {...accumulator, [value]: (accumulator[value] || 0) + 1};
  }, {});

  console.log(count);
  
// closures 
for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i) 
    }, 0);      
}
for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i) 
    }, 0);      
}

var i
for(i=0;i<5;i++){
    setTimeout(() => {
        console.log(i) 
    }, 0);      
}
