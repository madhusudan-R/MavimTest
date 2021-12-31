import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './orderList.css'

function OrderList() {

    const [orders, setOrders] = useState([])

    const navigate = useNavigate();

    const handelClick = () => {
        navigate("/addOrders")
    }
    
    const handelDeleteItem = async (id) => {
        try{
            await axios.delete(`http://127.0.0.1:8000/api/deleteOrders/${id}`);
        }catch(err){
            console.log(err)
        }
         orders.filter((orders) => {
            return(orders.id!==id);
        })
        if(orders.id!==id){
            alert('Record is Successfully deleted')
        }else{
            alert('Something went wrong please try againg!...')
        }
        setOrders(orders)
    }

    const handelLogout = () => {
        localStorage.removeItem("user")
        navigate('/')
    }

    useEffect( () => {
        const fetchOrderList = async () => {
            const orderList = await axios.get('http://127.0.0.1:8000/api/getAllOrders');
            setOrders(orderList.data);
            console.log(orderList.data)
        }
        fetchOrderList()
    }, [setOrders,{...orders}])

    

    return (
        <div>
            <h3 className='list'>Order List</h3>
            <span className='user col-lg-2'>{localStorage.getItem("user")}</span><button className='logoutbtn col-lg-2' type="button" onClick={handelLogout}>Logout</button>
            <div className='container table-responsive'>
                <button className='button1 my-4' onClick={handelClick}>Add Order</button>
            <table className="td1 table  my-4">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Order_No</th>
                        <th scope="col">Crust</th>
                        <th scope="col">Flavour</th>
                        <th scope="col">Size</th>
                        <th scope='col'>Table_No</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map((item) => (
                            <tr key={item.id}>
                                <td>{item._id}</td>
                                <td>{item.Crust}</td>
                                <td>{item.Flavor}</td>
                                <td>{item.Size}</td>
                                <td>{item.Table_No}</td>
                                <td className='delete bi bi-trash' onClick={() => handelDeleteItem(item._id)}></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default OrderList
