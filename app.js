const http=require('http')

http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url=='/'||req.url=='/home'){
        res.write('<h1>Welcome Home</h1>');
        res.end();
    }
    else if(req.url=='/About'){
        res.write('<h1>Welcome to About us Page</h1>');
        res.end();
    }
    else if(req.url=='/node'){
        res.write('<h1>Welcome to my node js project</h1>');
        res.end();
    }
}).listen(8080)