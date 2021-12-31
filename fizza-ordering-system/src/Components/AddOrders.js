import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './addOrders.css'

function AddOrders() {

    const initialvalues = { Crust: "", Flavor: "", Size: "", Table_No: ""};
    const [formvalues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const crustRef = useRef();
    const flavorRef = useRef();
    const sizeRef = useRef();
    const table_NoRef = useRef();

    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();

        const newOrders = {
            Crust: crustRef.current.value,
            Flavor: flavorRef.current.value,
            Size: sizeRef.current.value,
            Table_No: table_NoRef.current.value
        }
        try{
            const orders = await axios.post('http://localhost:8000/api/addOrders', newOrders)
            console.log(orders)
            setIsSubmit(true)
        }catch(err) {
            console.log(err)
        }

        setFormErrors(validate(formvalues));

    }

    const handelChange = (e) => {
        //console.log(e.target)
        const {name, value} =e.target;
        setFormValues({ ...formvalues, [name]: value});
        console.log(formvalues);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formvalues)
            navigate('/orderlist')
        }
    },[formErrors, {...formvalues}, navigate])

    const validate = (values) => {
        const errors = {}
        if (!values.Crust){
            errors.Crust = "Required Field!... ";
        }
        if (!values.Flavor){
            errors.Flavor = "Required Field!... ";
        }
        if (!values.Size){
            errors.Size = "Required Field!... ";
        }
        if (!values.Table_No){
            errors.Table_No = "Required Field!... ";
        }
        return errors;
    }

    return (
        <div>
            <section className='form my-4 mx-5'>
                <div className='container'>
                    <div className='row g-0'>
                        <div className='col-lg-5'>
                            <img src='/images/pizza.jpg' className="img-fluid" alt=''/>
                            <div className='title'>
                                <p className='name2'>𝒫𝒾𝓏𝓏𝒶 𝒽𝓊𝓉</p>
                            </div>
                            
                        </div>
                            <div className='col-lg-7 px-5 pt-5'>
                                <h2 className='font-weight-bold py-3'>Add Pizza Details</h2>
                                <form className='' onSubmit={handelSubmit}>
                                    <div className='form-row'>
                                        <div className='col-lg-7'>
                                            <select placeholder='Crust' className='form-control mt-4' ref={crustRef} value={formvalues.Crust} onChange={handelChange} name='Crust'>
                                                <option >Classic</option>
                                                <option >Cheese</option>
                                            </select>
                                        </div>
                                        <p>{formErrors.Crust}</p>
                                        
                                    </div>
                                    <div className='form-row'>
                                        <div className='col-lg-7'>
                                        <select placeholder='Flavor' className='form-control mt-4' ref={flavorRef} value={formvalues.Flavor} onChange={handelChange} name='Flavor'>
                                                <option>Cheese</option>
                                                <option>Veggie</option>
                                                <option>Pepperoni</option>
                                                <option>Meat</option>
                                                <option>Margherita</option>
                                            </select>
                                        </div>
                                        <p>{formErrors.Flavor}</p>
                                       
                                    </div>
                                    <div className='form-row'>
                                        <div className='col-lg-7'>

                                        <select placeholder='Size' className='form-control mt-4' ref={sizeRef} value={formvalues.Size} onChange={handelChange} name='Size'>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                                <option>Fiesta</option>
                                            </select>
                                            
                                        </div>
                                        <p>{formErrors.Size}</p>
                                        
                                    </div>
                                    <div className='form-row'>
                                        <div className='col-lg-7'>
                                            <input type='number' 
                                            placeholder='Table_No' 
                                            name='Table_No'
                                            value={formvalues.Table_No}
                                            onChange={handelChange}
                                            ref={table_NoRef}
                                            className='form-control mt-4' 
                                           
                                            />
                                        </div>
                                        <p>{formErrors.Table_No}</p>
                                        
                                    </div>
                                    
                                    <div className='form-row'>
                                        <div className='col-lg-7'>
                                            <button type='submit' className='btn1 mt-3 mb-5 '> Add Item</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AddOrders
