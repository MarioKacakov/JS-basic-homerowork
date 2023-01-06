let arrayOfNumbers = [12, 5, 300, 200,12,54,123];
function maxAndMinNumber(array){
          let max = Math.max(...arrayOfNumbers);
          let min = Math.min(...arrayOfNumbers);
          console.log(`Max number is ${max} and min number is ${min}, their sum is ${max + min}`);
}
maxAndMinNumber();