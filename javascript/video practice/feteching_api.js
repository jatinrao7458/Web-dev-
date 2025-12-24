//settele means resolve or reject
// resolve means promise has settteled successfilly
// reject means promise has not settles successfully

async function mydata(){
    // in th below line we wait for it to get data from the server
let x =await fetch('https://jsonplaceholder.typicode.com/todos/1')// this default give us the get identity
// in the below line we wait to add the data in the json file
let data =await x.json()
return data
}
async function main() {
    console.log('Loading Module');
    console.log('do something else');
    console.log('Load Data');
    // we dont await in the below line thenthen the code wont wait to get the data and print it
    let data2= await mydata()
    console.log(data2)
    console.log('process data');
    
} 
//post data help us to submit the data
main()
