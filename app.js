if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}


const express=require("express");        //express
const app=express();                     //express
const mongoose=require("mongoose");      //mongoose
const path=require("path");   
const methodOverride =require("method-override"); //form method put and delete
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");

const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");

const listingRouter=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");
const adminRouter=require("./routes/admin.js");

//razorpay
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


//const dbUrl=process.env.ATLASDB_URL;
const dbUrl=process.env.MONGO_LOCAL_URL;
main().catch(err => console.log(err));    //mongoose

async function main() {
  await mongoose.connect(dbUrl);

}

app.set('views', path.join(__dirname, 'views'));         //ejs
app.set("view engine","ejs");                      
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method")); 
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));  //css
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.render("index.ejs");
});

const store=MongoStore.create({
  mongoUrl:dbUrl,
  crypto:{
    secret:process.env.PERSONAL_SECRET,
  },
  touchAfter:24*3600,
});

store.on("error",()=>{
  console.log("ERROR in mongo session store ",err);
})

const sessionOptions={
  store,
  secret:process.env.PERSONAL_SECRET,
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now() + 7 * 24 * 60 * 60 *1000,
    maxAge:7 * 24 * 60 * 60 *1000,
    httpOnly:true,
  }
};

//razorpay



app.post('/create-order', async (req, res) => {
  const { amount, currency, receipt } = req.body;
  try {
    const order = await razorpay.orders.create({ amount, currency, receipt });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const crypto = require('crypto');

  const hash = crypto.createHmac('sha256', 'YOUR_KEY_SECRET')
                     .update(`${razorpay_order_id}|${razorpay_payment_id}`)
                     .digest('hex');

  if (hash === razorpay_signature) {
    res.status(200).json({ success: true });
  } else {
    res.status(500).json({ success: false });
  }
});
app.get("/",(req,res)=>{
    res.send("I Am a Root")
})

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next();
});

// app.get("/demouser",async (req,res)=> {
//   let fakeUser=new User({
//     email:"student@gmail.com",
//     username:"delta-student"
//   });
//   let registeredUser= await User.register(fakeUser,"helloworld");
//   res.send(registeredUser);
// })

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);
app.use("/",adminRouter);




app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"Page Not Found!"));
  
});


app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something Went Wrong!"}=err;
   res.status(statusCode).render("error.ejs",{message})
    // res.status(statusCode).send(message);
});

app.listen(3000,(req,res)=>{
    console.log("Server is working")
})