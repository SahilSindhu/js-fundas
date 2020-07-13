/**
 * # Description: Closures is ability of function to use variables which
 *   are defined in there lexical scope;
 *   Our most common use of them as a concept is when we use returned function 
 *   to access the variables in parent function
 */

 function parent(){
    let outer = 10
    return (inner)=>{
        return outer + inner;
    }
 }

 let addNumbers = parent();

/**
 * Now outer is avialable to addNumbers as closure;
 * Now it will become more interesting if we pass outer as parameter;
 */

function parent2(outer2){
    return (inner2)=>{
        return outer2 + inner2;
    }
 }

 let addTen = parent2(10);
 let addEleven = parent2(11);
 let addTweleve = parent2(12);

 console.log((addTen(5)));
 console.log((addEleven(5)));
 console.log((addTweleve(5)));
