// const http = require('http');
// const port = 1234;
// const requrestHandler = (req, res)=>{
//     console.log(req.url);
//     // res.setHeader('Content-type', 'text/html');
//     res.setHeader('Content-type', 'application/json');
//     // res.write('<h2>Red & White 1 </h2>');
//     // res.write('<h2>Red & White 2 </h2>');
//     // res.write('<h2>Red & White 3 </h2>');
//     // res.write('<h2>Red & White 4 </h2>');
//     // res.write('<h2>Red & White 5 </h2>');
//     // res.write('<h2>Red & White 6 </h2>');
//     // res.write('<h2>Red & White 7 </h2>');
//     res.end('{"msg" : "hello Guys..."}');
// }
// const server = http.createServer(requrestHandler);     // create a new server

// server.listen(port, (err)=>{
//     if(err){
//         console.log(`Server is not start: ${err}` );
//         return false;
//     }
//     console.log(`Server start at http://localhost:${port}`);
// });


const fs = require('fs');

// open, read, write, append, rename, delete => sync/async

// fs.open('./index11.js', (err, result) =>{
//     if(err)
//         console.log(err);
//     else
//         console.log('File Open Success');
// })

// fs.openSync('./index.js');
// console.log('Hello');



// const t1 = performance.now();
// console.log('Starting.........', t1);
// fs.readFile('./index.js','utf-8', (err, result)=>{
//         if(err)
//         console.log(err);
//     else
//         console.log(result);
// })
// const t2 = performance.now();
// console.log('Ending.........', t2);
// console.log("Diffrence => ", t2 - t1);


// const data = fs.readFileSync('./localModules.js', 'utf-8');
// console.log(data);

// fs.unlinkSync('./abc.txt');
// console.log('Delete Success');