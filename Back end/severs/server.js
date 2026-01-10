// sever.js is the intial file like the index.html for the front end
// to import the http file we write the code in line 3
// required is used to import
// we are using required in place on import cuz import came in es6
const http= require('http');
// We create the server. The function we pass in is the instruction manual.
// It will run for every single request that comes in.
const server = http.createServer((req,res)=>{
    // 200 is the succes error method
    // Our instructions will go in here...

    // 1. Prepare a "Success" response with a plain text content type
    res.writeHead(200,{'Content-Type': 'text/plain'})//This method is used to write the "head" of the HTTP response. Think of it as preparing the envelope before writing the letter.
    
    // 200: This is the HTTP Status Code. 200 is the universal code for "OK" or "Success." We're telling the client that everything went perfectly.

    // { 'Content-Type': 'text/plain' }: This is an HTTP Header. It's a piece of metadata that tells the browser what kind of content to expect. Here, we're saying, "I'm about to send you simple, plain text." If we were sending a web page, we'd use 'text/html'.
    
    // Write "Hello, World!" and send the response.
    res.end('Hello World');
    // this method does two crucial things:

// It writes the final piece of content to the response body (our message, "Hello, World!").
// It signals to the server that the response is complete and should be sent. This is like sealing the envelope and handing it to the visitor. The conversation is now over.
})


// port is entry point into ur sever
// Define our location: Port 3000
const Port =3000;


// Open for business! Start listening for visitors on our chosen port.
// listen method means it will listen on th port 

// The server.listen function starts the server process. It will now run continuously, waiting for requests to arrive on port 3000. Every time a request hits that port, our instruction manual—the (req, res) callback function—will be executed.


server.listen(Port,()=>{
     // This is a callback that runs once the server successfully starts listening.
  // It's just for us, the developers, to see in our terminal.
    console.log(`Your sever is running on http://localhost:${Port}`);
})