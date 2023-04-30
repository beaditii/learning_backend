const express=require('express');
const app=express();
const bodyParser =require('body-parser');
const port=3001;

//mimic the db using an array
let blogList=[];


 //setting a layer between api and client req
//here app.use will configure for all tyles of http req
app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:blogList,
        success:true,

    });

});

app.post('/blogs',(req,res)=>{
    /**
     * console.log(req.body);
     * it is printing undefined in console 
     * while for console.log(req.query)
     * it is printing query
     * why??
     * for this we need body parser to read body
     */
   // console.log(req.body);
   blogList.push({title:req.body.title,content:req.body.content,
    id:Math.floor(Math.random()*1000)
});
   return res.status(200).json({
    sucess:true
   });
});

app.get('/blogs/:id',(req,res)=>{
    //req.params gives you id i.e.{id:'3'}
    //whatever you write after column it will be your key  and  value of id will be elemnet
    //e.g. /blogs/:blogid   then it will print {blogid:'3'}
   const result= blogList.filter((blog)=>blog.id==req.params.id)
   return res.status(200).json({
    data:result,
    sucess:true
   });
})

app.delete('/blogs/:id',(req,res)=>{
    const result= blogList.filter((blog)=>blog.id==req.params.id);
     return res.status(200).json({
        message:'this has been deleted',
        sucess:true
       });
})


app.listen(port,()=>{
    console.log('server has startrd',port);
})

/**
 * HOT RELOADING-when you are going to make change anything on your
 * code base your server restart automatically.
 * we use third party package e.g.nodemon
 * 
 * 
 * 
 * for using nodemon----use command 'npx nodemon index.js'
 * or you save this command in package.json in script
 * start:'npx nodemon index.js' and then use npm start to run
 */
