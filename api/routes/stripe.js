const router = require("express").Router();
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

console.log(process.env.STRIPE_KEY,"key")

// router.post("/payment",(req,res)=>{
//     stripe.paymentIntents.create(
//         {
//             source:req.body.tokenId,
//             amount:req.body.amount,
//             currency:"usd",
//         },
//         (stripeErr,stripeRes)=>{
//             if(stripeErr){
//                 res.status(500).json(stripeErr);
//                 console.log(stripeErr);
//             }else{
//                 res.status(200).json(stripeRes);
//             }  
//     });
// });


router.post("/payment", (req, res) => {
    stripe.sources.create(
      {
        type: "card",
        token: req.body.tokenId,
      },
      (sourceErr, sourceRes) => {
        if (sourceErr) {
          res.status(500).json(sourceErr);
          console.log(sourceErr);
        } else {
          stripe.paymentIntents.create(
            {
              source: sourceRes.id,
              amount: req.body.amount,
              currency: "usd",
            },
            (stripeErr, stripeRes) => {
              if (stripeErr) {
                res.status(500).json(stripeErr);
                console.log(stripeErr);
              } else {
                res.status(200).json(stripeRes);
              }
            }
          );
        }
      }
    );
  });
  
module.exports = router;