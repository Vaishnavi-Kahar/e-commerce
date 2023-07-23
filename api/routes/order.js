const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE ORDER
router.post("/",verifyToken,async(req,res)=>{
    const newOrder = new Order(req.body)
    
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    }catch(err){
        res.status(500).json(err);
    }
});


//UPDATE ORDER (Only for admin)
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, 
            {
            $set : req.body
            },
            {new:true}
        );
        res.status(200).json(updatedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//DELETE ORDER (Only for admin)
router.delete("/:id",verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order deleted...");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization,async(req,res)=>{
    try{
        //users can have more than one order
        const orders = await Order.find({userId:req.params.userId});
        res.status(200).json(orders);
    
    }
    catch(err){
        res.status(500).json(err);
    }
});

//GET ALL ORDERS (only admin can hace access to all carts)
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ORDER STATS   (Amount per month)
router.get("/income",verifyTokenAndAdmin,async(req,res)=>{
    const date = new Date();// lets say present July
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));//June
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));//May

    try{
        const income = await Order.aggregate([
            {$match : {createdAt: {$gte: previousMonth}}},//last two months
            {
                $project:{
                    month: {$month:"$createdAt"},
                    sales:"$amount",
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                } ,
            }   
                
        ]);
        res.status(200).json(income);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;

//heysonu2211
