// The fs module is your toolkit for interacting with the computer's file system. It allows your backend code to read files, write files, create directories, and more
const fs =require('fs').promises

async function readingfile() {
    try {
         // await pauses the function until the file is fully read.
    // 'utf8' tells Node.js how to interpret the file's binary data as text.
        let data = await fs.readFile("./index.html","utf-8")
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readingfile()