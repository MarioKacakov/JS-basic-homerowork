// Description:Write a javascript function that: 
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names 
// Every name should have a numeric value before it 
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"] 
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

// E-mail: 

// traniner@mail.com

// assistant@mail.com

let firstName = ['Bob', 'Jill', 'Louisa', 'Gregory'];
let lastName = ['Smith', 'Rickson', 'Rad', 'Diloc'];
let numericValueArray = ['1.','2.','3.','4.'];

function fullName (array1, array2, array3) {
       
       let fullNameArray = [(array3[0] + array1[0] + ' ' + array2[0]), (array3[1] + array1[1] + ' ' + array2[1]), (array3[2] + array1[2] + ' ' + array2[2]), (array3[3] + array1[3] + ' ' + array2[3])];
       console.log(fullNameArray);
                 }

fullName(firstName, lastName, numericValueArray);




   

