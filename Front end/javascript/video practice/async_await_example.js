async function getdata2 (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(444444444444444444)
        },3500);
    })
}

// i want to wait for this async function so i will add await like but we have to rap this await in a async function 
async function main() {
    console.log('Loading Module');
    console.log('do something else');
    console.log('Load Data');
    let data2= await getdata2()
    console.log(data2)
    console.log('process data');
    
} 
main()