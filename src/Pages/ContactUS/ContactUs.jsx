import React,{useState} from 'react'
import StarsBg from 'Components/StarsBg'
import SimpleInput from 'Components/Utilities/SimpleInput';
import SelectInput from 'Components/Utilities/SelectInput';
import styles from './ContactUs.module.css'
import {Container} from 'react-bootstrap'
import Button from 'Components/Utilities/Button';

function ContactUs() {

    const [queryobject, setqueryobject] = useState({name:'',message:'',query:'',number:''});

    const changeHandler = (name, value) => {
        setqueryobject({ ...queryobject, [name]: value });
    };

    const handleSubmit = ()=>{
        
    }

  return (
    <div style={{fontFamily:"Audiowide"}}>
        <StarsBg/>
        <div className='bg-black text-white overflow-auto'>
            <h1 className='text-center mt-5'>CONTACT US</h1>
            <hr style={{height:"5px"}} className={`${styles.underline}`}/>
            <div className='mt-5 d-flex justify-content-center align-items-center'><h4 className='w-50 text-center'>For any query reach out to us</h4></div>
            <div className='mt-2 d-flex justify-content-center align-items-center'><h5 className='w-50 text-center'>We are here to ensure best user experience for you</h5></div>
            <div className='d-flex justify-content-center align-items-center'>
            <form className={`mt-5 w-50 ${styles.formbg}`}>
                <div className={`${styles.formitem}`}><SimpleInput
                    type="text"
                    icon="star"
                    placeholder="Name"
                    name="name"
                    val={queryobject.name}
                    changeFunc={changeHandler}
                /></div>
                <div className={`${styles.formitem}`}><SimpleInput
                    type="number"
                    icon="phone"
                    placeholder="Phone Number"
                    name="number"
                    val={queryobject.number}
                    changeFunc={changeHandler}
                /></div>
                <div className={`${styles.formitem}`}><SelectInput
                    val={queryobject.query}
                    changeFunc={changeHandler}
                    name="query"
                    icon="question"
                    label="Query Type"
                    disabledOption="Query Type"
                    options={["Registration Query", "Competition Query", "Website Bug", "Other Query"]}
                    isValid={true}
                /></div>
                <div className={`${styles.formitem}` }><SimpleInput
                    type="text"
                    icon="pen"
                    placeholder="Message"
                    name="message"
                    val={queryobject.message}
                    changeFunc={changeHandler}
                /></div>
                <div>
                    <Button type="button" onClickFunc={handleSubmit}>
                        SUBMIT!
                    </Button></div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs