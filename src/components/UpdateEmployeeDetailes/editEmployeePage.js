import React ,{useState,useEffect} from "react"
import { Nav} from 'react-bootstrap'
import {EmployeeInputContainer} from "./employeeInputContainer";
import '../../style/editEmployeePage.css'
import axios from "axios";

export const EditEmployeePage =()=>{

    //BONUS showing updated below the submit button
    const [showElement,setShowElement] = React.useState(false)
    useEffect(()=>{
            setTimeout(function() {
                setShowElement(false)
            }, 3000);
        },
        [])

    //State that was created to store the data from the user typing at employeeInputContainer
    const [personInfo,setPersonInfo]=useState({
        id:JSON.parse(localStorage.getItem("employee")).id,
        Address: "",
        Email: "",
        Phone: "",
        MaritalStatus: "",
        Gender:"",
        Salary:""
    })

    //Setting a template variable that store the required field to send for patching in database (only for mapping in order
    // to render components to the screen with the array values)
    let employeeDetailsNeeded = ['Address',
    'Phone',
    'Email',
    'MaritalStatus',
    'Gender',
    'Salary']

    //Submitting the form the data that the user inserted (that was stored in personInfo at employeeInputContainer)
    const patchData = () => {
         axios.patch('/update_employee', personInfo).catch(function (error) {
            console.log(error.message)
        })
        setShowElement(true)
    }

    //BONUS Resetting all employee data by clicking on cancel (except his id and name)
    const deleteData = () => {
        axios.patch('/update_employee', {
            id:JSON.parse(localStorage.getItem("employee")).id,
            Address: "",
            Email: "",
            Phone: "",
            MaritalStatus: "",
            Gender:"",
            Salary:""
        }).catch(function (error) {
            console.log(error.message)
        })
    }

    return(
        <div className='edit-employee-main-container'>
            <div className='form-wrapper'>
                <Nav.Link className='back-form-button' href="/">{"<Back"}</Nav.Link>
                <h1>{JSON.parse(localStorage.getItem("employee")).Name}</h1>
                <h2>Edit Details</h2>
                <form onSubmit={patchData} className='just-wrapper'>
                    {employeeDetailsNeeded.map(res=>{
                        return(
                            <ul key={res}>
                                <EmployeeInputContainer category={res} setInfo={setPersonInfo} currInfo={personInfo}/>
                            </ul>
                        )
                    })
                    }
                    <button type='submit' className='form-submit-button'>Submit</button>
                    <button type='button' onClick={deleteData} className='form-cancel-button' placeholder='Cancel'>Cancel</button>
                </form>
                    {showElement?<div>Updated!</div>:<></>}
            </div>
        </div>
    )
}