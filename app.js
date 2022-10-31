const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const home_content = "I am Vimal Kumar , A second year B.Tech student at bannari amman institute of technology , Sathyamangalam , Erode.I am currently practicing full stack developement , I use Angela Yus Udemy course , It is very useful to me to learn full stack developement ... "
const about_content = "I am Vimal Kumar , A second year B.Tech student at bannari amman institute of technology , Sathyamangalam , Erode.I am currently practicing full stack developement , I use Angela Yus Udemy course , It is very useful to me to learn full stack developement ... "
const contact_me_content = "EMAIL PHONE "
const app = express();
const _ = require("lodash")
let blogArray = [];

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");

/*
app.get("/admin",function(req1,res1){
    res1.render("admin",{});
});


app.get("/",function(req0,res0){
    res0.render("index",{blogArray :blogArray ,NAV_PAGE :"HOME" , CONTENT : home_content});
});


app.get("/about",function(req4,res4){
    res4.render("index",{blogArray :[] ,NAV_PAGE :"ABOUT" , CONTENT : about_content});
});

app.get("/contact",function(req3,res3){
    res3.render("index",{blogArray :[] ,NAV_PAGE :"CONTACT ME" , CONTENT : contact_me_content});
});

app.get("/readmore",function(req5,res5){
    res5.render("readmore",{Title : blogArray[0][0], content : blogArray[0][1]});
});
*/


app.get("/",function(req0,res0){
    res0.render("index",{blogArray :blogArray ,NAV_PAGE :"HOME" , CONTENT : home_content});
});


app.get("/:page",function(req, res){
    
    switch (req.params.page){

        case "about" :
            res.render("index",{blogArray :[] ,NAV_PAGE :"ABOUT" , CONTENT : about_content});
            break;
            
        case "contact" :
            res.render("index",{blogArray :[] ,NAV_PAGE :"CONTACT ME" , CONTENT : contact_me_content});   
            break;
        
        case "admin" :
            res.render("admin",{});
            break;
        
        
        default :

            res.render("page_not_found");
            console.log("match not found");
        
    }
})

app.get("/blog/:sheet",function(req7,res7){
    blogArray.forEach(function(item){
        if (_.toLower(item.title) === _.toLower(req7.params.sheet)){
            res7.render("readmore",{Title : item.title,content : item.content});
            console.log("match found");
        }
       
    });
})

app.post("/admin",function(req2,res2){
    blogArray.push({title : req2.body.title , content : req2.body.content});
    res2.redirect("/");
    console.log(req2);
});







app.listen(3000,function (){
    console.log("Server started at port 3000");
})