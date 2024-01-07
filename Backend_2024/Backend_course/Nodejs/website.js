const http=require('http');
const port =process.env.PORT ||3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req,url)
    if(req.url == '/')
    {
        res.end('<h1> This is saksham </h1> <p> Hey this is the way to rock the world!</p>')  
    }
    else if(req.url == '/about')
    {
        req.end('<h1> About CodeWithHarry</h1> <p> Hey this is about saksham</p>')
    }
})

server.listen(port,()=>{
    console.log('server is listing on port ${port}');
});

