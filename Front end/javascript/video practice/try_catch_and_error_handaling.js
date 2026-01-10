//  parseint  help to convert to integer 
let a = parseInt(prompt("Enter a number"))
let b = parseInt(prompt("Enter a second number"))
let sum =a+b
// the code in line 6 an d7 makes anew error made by me when sum is not a number
if(isNaN(sum)){
    throw SyntaxError("This is not allowed")
}
console.log("The sum is",sum)
// the below code in line 11 is giving and error and i dont want it to throew any error
// to handle error use try catch
try {
    console.log("The sum is",sum*x)
    
} catch (error) {
    // this code works bcz the try means over here that try this code if it gives error then go to catch and work on the other code
    // if there is any async function in try then the script dies i.e is the catch will not work in this case
    console.log('error is there');
}
finally{
    console.log('files are being closed and db connection si being closed');
}

// using finally normally is similiar to console. log as it returns value in every case 
// but its main use is in the function part as  we use return key word in the function so the code stops working and code after return is not executed 
// but if we want the code to work after return also so we use finlly
// without finally
function main (){
    try {
        let x =1
        console.log("The sum is by function is ",sum*x)
    } catch (error) {
        console.log('error is there by function');
        
    }
    
}
// with finally

function main (){
    try {
        let x =1
        console.log("The sum is by function is ",sum*x)
        return true
    } catch (error) {
        console.log('error is there by function');
        return false
        
    }
    finally{
        console.log('files are being closed and db connection si being closed');
    }

}




// if the above error comes first then the script stops working as it says ki error is there

// we will try making alert of the error
try {
    console.log('Sum is ',sum*c);
} catch (error) {
    alert(error.name)
    alert(error.message)
    alert(error.stack)
}
