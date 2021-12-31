const OrderList = require('../Model/OrderList');

exports.addOrders = async (req, res) => {
    try{
        const orderList = new OrderList({
           Crust: req.body.Crust,
           Flavor: req.body.Flavor,
           Size: req.body.Size,
           Table_No: req.body.Table_No
        })

        const newOrderList = await orderList.save()
        res.status(200).json(newOrderList)

    }catch(err){
        res.status(500).json({
            err:err
        })
    }
}

exports.getOrders = async (req, res) => {
    try{
        const Orders = await OrderList.find();
        res.status(200).json(Orders);
    } catch(err){
        res.status(500).json({
            err: err
        })
    }
}

exports.deleteOrders = async (req, res) => {
    try{
        const orderId = req.params.orderId;
       const deletedItem = await OrderList.deleteOne({_id:orderId});
       res.status(200).json(deletedItem);
    }catch(err){
        res.status(500).json({
            err: err
        })
    }
}