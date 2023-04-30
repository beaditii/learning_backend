const express=require('express');
const app = express();
const path=require('path');
const hbs=require('hbs');
//built in middleware
const staticPath=path.join(__dirname,"../public");
app.use(express.static(staticPath));
//to set view engine
app.set("view engine","hbs");
//to change the name of by default views directory
const templatePath=path.join(__dirname,"../template/views");
app.set("views",templatePath);

//to use partials
const partialsPath=path.join(__dirname,"../template/partials");
hbs.registerPartials(partialsPath);
//template engine route
app.get("",(req,res)=>{
    res.render('index',{
    subscriber:"ADITI",});
});
//console.log(path.join(__dirname,"../public"));

app.get('/about',(req,res)=>{
    res.render('about');
})


app.get("/", (req, res)=>{
res.send("hello from express server");
})
app.get('/about/*',(req,res)=>{
    res.render('404',{errorcomment:"Oops page couldn't be found."});
});
app.get('*',(req,res)=>{
    res.render('404',{errorcomment:"Oops page couldn't be found."});
});
app.listen(3000,()=>{
   console.log("i am listening to 3000") 
});


//node+Express.js,hbs and partials
//now that we have a server up and running 
//let's display more information on our pages
//and use partials and the hbs library to render views.


//src/demo.js -e js,hbs----it means all files with extension js and hbs should run so taht partials will work


// to stick footers in bottom

/*.body{
    display:flex;
    flex-direction:column;
    min-height:100vh
}
  .footer{
margin-top:auto;
it will come directly to bottom
  }
*/