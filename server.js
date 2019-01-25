//importing express
var exp=require('express');
var app=exp();

//import path
var path=require('path');

//import parser
var bodyparser=require('body-parser');

//conversion from javascript to json
app.use(bodyparser.json());

//getting mongodb client object
var mongoclient=require('mongodb').MongoClient;

//importing bcrypt
var bcrypt=require('bcrypt');

//importing moongoose for update
var mongoose=require('mongoose');

var dbo;
var pf;
var url="mongodb://likhitha:coursewala1@ds161104.mlab.com:61104/coursewala";

//connect with database coursewala
mongoclient.connect(url,(err,client)=>{
    if(err)
    {
        console.log("error in database connection coursewala");
    }
    else
    {
     //getting object of coursewala database
     dbo=client.db('coursewala');
     console.log('connected with database coursewala');
    }
});


//connecting server with angapp
app.use(exp.static(path.join(__dirname,'dist/coursewala')));



// post request handler of registration form
app.post('/nu/register',(req,res,next)=>{
    
    dbo.collection('register').find({name:req.body.name}).toArray((err,data)=>
    {
        //if user does not exist then hash password and save it
        if(data.length===0)
        {
        bcrypt.hash(req.body.password,10,(err,hashcode)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
             dbo.collection('register').insertOne({ name:req.body.name,
                                                    email:req.body.email,
                                                    password:hashcode,
                                                    confirmpassword:hashcode,
                                                    contactno:req.body.contactno,
                                                    dateofbirth:req.body.dateofbirth,
                                                    gender:req.body.gender
                                                },()=>{
                                                       
                                                        res.json("registered successfully");
                                                       
                                                })
                                                
            }
        })
        
        }
        else
        //if user exist already
        {
         res.json("username already existed...choose another name");
        }

    })
});





//request handler of login
app.post('/nu/login',(req,res,next)=>{
    pf=req.body.name;
    dbo.collection('register').find({name:req.body.name}).toArray((err,data)=>{
       
        if(err){
            console.log(err);
        }
        else
        {
            //username comparison
         if(data.length===0)
         {
            res.json("user not existed");
          
         }  
         else
         {
            bcrypt.compare(req.body.password,data[0].password,(err,success)=>{
                if(err)
                {
                 console.log(err);
                }
                if(success==true)
                {
                 res.json("login successful");
                }
                else
                {
                    res.json("wrong password");
                }
            })
         }
        }
    })
});



//post handler of admin course component
app.post('/adminview/course',(req,res,next)=>{
    console.log(req.body);
    dbo.collection('coursecollection').find({coursename:req.body.coursename}).toArray((err,data)=>{
       if(err)
       {
           console.log(err);
       }
       else
       {
     dbo.collection('coursecollection').insertOne({coursename:req.body.coursename,
                                                    coursedetails:req.body.coursedetails,
                                                    authorname:req.body.authorname,
                                                    authordetails:req.body.authordetails,
                                                    authorimage:req.body.authorimage,
                                                    price:req.body.price,
                                                    uses:req.body.uses,
                                                    samplefile:req.body.samplefile,
                                                    mainfile:req.body.mainfile},()=>{
                                                        res.json('course added successfuly');
                                                    })
       }

    })
       
});




//get handler reading from register to subscriber of admin
app.get('/adminview/customers',(req,res,next)=>{
    dbo.collection('register').find({}).toArray((err,data)=>{
        if(err)
        {
        console.log(err);
        }
        else
        {
         res.json(data);
        }
    });
});



//get handler reading from register to profile of user
app.get("/userview/profile",(req,res,next)=>{
    dbo.collection('register').find({name:pf}).toArray((err,data)=>{
        if(err)
        {
        console.log(err);
        }
        else
        {
         res.send(data);
        }
    });
});



//update handler of profile 
app.put('/userview/profile',(req,res)=>{

    //object received from client
    console.log(req.body);

    //converting stringid into objectid
    var objectid=new mongoose.Types.ObjectId(req.body._id);

    //updating
    dbo.collection('register').update({_id:objectid},{$set:{name:req.body.name,
                                                            email:req.body.email,
                                                        dateofbirth:req.body.dateofbirth,
                                                    contactno:req.body.contactno}
                                                },(err,success)=>{
                                                    if(err)
                                                    {
                                                        console.log(err);
                                                    }
                                                    else{
                                                        dbo.collection('register').find({}).toArray((err,data)=>{
                                                            if(err)
                                                            {
                                                                console.log(err);
                                                            }
                                                            else{
                                                                res.json(data);
                                                            }

                                                        })
                                                    }
                                                })


})


 //get handler reading from coursecollection to coursecomponent of admin
app.get('/adminview/course',(req,res,next)=>{
    dbo.collection('coursecollection').find({}).toArray((err,data)=>{
        if(err)
        {
        console.log(err);
        }
        else
        {
         res.json(data);
        }
    });
});

//update handler of course 
app.put('/adminview/course',(req,res)=>{

    //object received from client
    console.log(req.body);

    //converting stringid into objectid
    var objectid=new mongoose.Types.ObjectId(req.body._id);

    //updating
    dbo.collection('coursecollection').update({_id:objectid},{$set:{coursename:req.body.coursename,
                                                                    coursedetails:req.body.coursedetails,
                                                                    authorname:req.body.authorname,
                                                                    authordetails:req.body.authordetails,
                                                                    authorimage:req.body.authorimage,
                                                                    price:req.body.price,
                                                                    uses:req.body.uses,
                                                                    samplefile:req.body.samplefile,
                                                                    mainfile:req.body.mainfile}},
                                               (err,success)=>{
                                                    if(err)
                                                    {
                                                        console.log(err);
                                                    }
                                                    else{
                                                        dbo.collection('coursecollection').find({}).toArray((err,data)=>{
                                                            if(err)
                                                            {
                                                                console.log(err);
                                                            }
                                                            else{
                                                                res.json(data);
                                                            }

                                                        })
                                                    }
                                                })


})


        
//deleting course user
app.delete('/adminview/course',(req,res)=>{
    //deleting course based on coursename
    dbo.collection('coursecollection').remove({coursename:req.body.coursename},(err,success)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            dbo.collection('coursecollection').find({}).toArray((err,data)=>{
                if(err)
                     {
                        console.log(err);
                     }
                     else
                     {
                         res.json(data);
                     }
            })
        }
    })
})

//dropdown of nucourse
app.get('/nu',(req,res,name)=>{
    dbo.collection('coursecollection').find({}).toArray((err,data)=>
{
    console.log(data);
          if(err)
          { 
            console.log(err);
          }
          else
          {
              res.json(data);
          }
})

});


// //dropdown of userviewcourse
// app.get('/userview',(req,res,name)=>{
//     dbo.collection('coursecollection').find({}).toArray((err,data)=>
// {
//     console.log(data);
//           if(err)
//           { 
//             console.log(err);
//           }
//           else
//           {
//               res.json(data);
//           }
// })

// });

   

//assigning port no
app.listen(process.env.PORT || 2000,()=>{
    console.log("server is listening on portno 8080");
});