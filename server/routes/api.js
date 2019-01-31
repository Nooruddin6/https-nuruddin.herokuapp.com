

//importing express
var exp=require('express');
var app=exp();
//import path
var path=require('path');

//import jwttoken
var jwt=require('jsonwebtoken')

//import parser
var bodyparser=require('body-parser');

//conversion from javascript to json
app.use(bodyparser.json());

//getting mongodb client object
var mongoclient=require('mongodb').MongoClient;

//importing bcrypt
var bcrypt=require('bcryptjs');

//importing moongoose for update
var mongoose=require('mongoose');

const s="nooruddin";
var dbo;
var v={};
var pf;
var url="mongodb://nuruddin:nuruddin1@ds239071.mlab.com:39071/coursewala";

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

let checkToken=(req,res,next)=>{

    //capture headers with names 'x-access-token' or 'authorization'
    //express headers are autoconvert  to lowercase
    let token=req.headers['x-access-token'] || req.headers['authorization']
if(token===undefined)
{
    return res.json({message:'token not found'});
}
if(token.startsWith('Bearer '))
{
    //remove bearer from string
    token=token.slice(7,token.length);
}
//using jwt package and secret string,validate the token
if(token!==undefined)
{
    jwt.verify(token,s,(err,decoded)=>{
        //if anything goes wrong,return an error immediately before passing control to next handler
        if(err)
        {
            return res.json({message:'invalid token'});
        }
        else
        {
         req.decoded=decoded;
         next();
        }
    })
}
}




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
                if(success===true)
                {
                 v=req.body.name

                var jwtBearerToken=jwt.sign({name:req.body.name},s,{expiresIn:10});
                console.log('token is'+jwtBearerToken);
                res.status(200).json({idToken:jwtBearerToken});

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
app.get("/userview/profile",checkToken,(req,res,next)=>{
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



  //reading data from course collection  into cards components
  app.get('/userview/c',(req,res,next)=>{
    dbo.collection('coursecollection').find({coursename:"c"}).toArray((err,data)=>{
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

//reading data from cards to cart
app.get('/userview/cart',(req,res,next)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
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

//posting data to cart component
app.post('/userview/c',(req,res,next)=>{
    dbo.collection(v).insert(req.body,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})


    //java component
  //reading data from course collection  into cards components
  app.get('/userview/java',(req,res,next)=>{
    dbo.collection('coursecollection').find({coursename:"java"}).toArray((err,data)=>{
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

//reading data from cards to cart
app.get('/userview/cart',(req,res,next)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
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

//posting data to cart component
app.post('/userview/java',(req,res,next)=>{
    dbo.collection(v).insert(req.body,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})

 //angular component
  //reading data from course collection  into cards components
  app.get('/userview/angular',(req,res,next)=>{
    dbo.collection('coursecollection').find({coursename:"Angular"}).toArray((err,data)=>{
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

//reading data from cards to cart
app.get('/userview/cart',(req,res,next)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
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

//posting data to cart component
app.post('/userview/angular',(req,res,next)=>{
    dbo.collection(v).insert(req.body,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})


//meanstack component
  //reading data from course collection  into cards components
  app.get('/userview/meanstack',(req,res,next)=>{
    dbo.collection('coursecollection').find({coursename:"meanstack"}).toArray((err,data)=>{
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

//reading data from cards to cart
app.get('/userview/cart',(req,res,next)=>{
    dbo.collection(v).find({}).toArray((err,data)=>{
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

//posting data to cart component
app.post('/userview/meanstack',(req,res,next)=>{
    dbo.collection(v).insert(req.body,(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(data);
        }
    })
})


module.exports=app; 