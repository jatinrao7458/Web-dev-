const getAllPosts= (req,res)=>{
    let sortby = req.query.sortby || 'id';
    let limit = parseInt(req.query.limit)|| 3;
    let page = parseInt(req.query.page) || 1;
    // the + in the below line code changes the value to the integer
    // In Express.js, req.params contains URL parameters.
    let id = +req.params.id || null;
    console.log(id,"ID")
    let posts = [
    { id: 2, title: 'My Second Post', date: '2023-10-26' },
    { id: 1, title: 'My First Post', date: '2023-10-25' },
    { id: 3, title: 'My third Post', date: '2023-10-27' },
    { id: 4, title: 'My fourth Post', date: '2023-10-28' },
    { id: 5, title: 'My fifth Post', date: '2023-10-29' },
    { id: 6, title: 'My six Post', date: '2023-10-30' },
    { id: 7, title: 'My seven Post', date: '2023-10-21' },
    { id: 8, title: 'My eight Post', date: '2023-10-22' },
    { id: 9, title: 'My nine Post', date: '2023-10-23' },
    { id: 10, title: 'My ten Post', date: '2023-10-24' },
  ];
  // This runs only if id is truthy.
  //filter::  Goes through each post     // Keeps only the posts that match the condition

  if(id){
    posts=posts.filter((post)=>post.id==id);
  }
  //sortby

  if (sortby=='date'){
    posts.sort((a,b)=>
        new Date(a.date)- new Date(b.date)
    )
  }

  if (sortby=='id'){
    posts.sort((a,b)=>
        a.id - b.id
    )
  }

  if (limit ){
    posts=posts.splice(0,limit)
  }
// pagenation  
  let startIndex = (page-1)*limit;
  let endIndex = startIndex+limit;
  let paginatedPosts = posts.slice(startIndex,endIndex)



res.send({posts:paginatedPosts});
}


// const getPost=(req,res)=>{
//   let id = +req.params.id;

//   console.log(id);
// }
module.exports={getAllPosts}