//Sum of First N Natural Numbers

function sumOfFirstNNumbers(n){
    var sum = 0;
    for(var i = 1; i <= n; i++){
        sum += i;
    }

    return sum;
}

console.log(sumOfFirstNNumbers(5));


//count of even numbers

function countOfEvenNum(arr){
    var count = 0;
    for(var a of arr){
        if(a % 2 == 0)
            count++;
    }

    return count;
}

arr = [1,2,3,4,5,6];
console.log(countOfEvenNum(arr));

console.log(Array.prototype)

// reverse Array


function reverseArray(arr){
    return arr.reverse();
}

console.log(reverseArray(arr));



//sum of Array elements

function sumOfArrayElem(arr){
    var sum = 0;
    for(var a of arr){
        sum += a;
    }
    return sum;
}

console.log(sumOfArrayElem(arr));


// factorial of number

function factorialOfNum(n){
    var fact = 1;
    for(var i = n; i >= 1; i--){
        fact *= i;
    }
    return fact;
}

console.log(factorialOfNum(5));



// Max in Array

function MaxNumInArray(arr){
    
    return arr.sort()[arr.length-1];
}

console.log(MaxNumInArray(arr))


// count of odd numbers

function countOfOddNum(arr){
    var oddCount = 0;
    for(var a of arr){
        if( a % 2 != 0)
            oddCount++;
    }
    return oddCount;
}

console.log(countOfOddNum(arr));


// array of squares

function arrayOfSquares(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}

console.log(arrayOfSquares(arr));

// Multiplication table

function multiplicationTable(n){
    for(var i = 1; i <= 10; i++){
    
        console.log(n +' * '+ i + " = " + n * i);
    }
}

console.log(multiplicationTable(3));



//smallest number in array


function smallestNumInArray(arr){
    return arr.sort()[0];
}

console.log(smallestNumInArray(arr));



//sum Of OddNum in array

console.log(arr);

function sumOfOddNum(arr){
    var oddSum = 0;
    for(var a of arr){
        if(a % 2 != 0)
            oddSum += a;
    }

    return oddSum;
}

console.log(sumOfOddNum(arr));


// count the characters in String

function charCount(name){
    var count = 0;
   for(var a of name){
    if( a != ' ')
        count ++;
   }
    
    return count;
}

console.log(charCount("Hello World"));




//sum of even numbers

function sumOfEvenNum(n){
    var sum = 0;
    for(var a = 1; a <= n; a++){
        if(a % 2 == 0)
            sum += a;
    }
    return sum;
}

console.log(sumOfEvenNum(10));


// Average of Array elements

function avgArrayElements(arr){
    var sum = 0;
    for(var a of arr){
        sum += a;
    }
    return sum / arr.length;
}

console.log(Math.round(avgArrayElements(arr)));


// concate array elements to String
arr = ["Hello", "World"];
function arrayElemToString(arr){
    var string = '';
    for(var a of arr){
        string += a;
    }
    return string;
}

console.log(arrayElemToString(arr))



