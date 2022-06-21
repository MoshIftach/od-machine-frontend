import React , {useState} from "react"
import '../style/employeeContainer.css'

export const EmployeeContainer =(props)=>{
    // **BONUS applied showing the edit button on hover**
    const [isChecked,setIsChecked]=useState(false);

    // Conditionally setting the state from mainPage (personOne & personTwo) by checking who is still empty after that the user
    // is clicking on a check-box,
    // and resetting the state in case it was unchecked with 'else' condition
    const onChange =(e)=>{
        setIsChecked(e.target.checked)
        if(e.target.checked){
            Object.keys(props.personOne).length > 0 ? props.setPersonTwo(props.person):props.setPersonOne(props.person)
            console.log(props.personOne)
            console.log(props.personTwo)
            console.log(Object.keys(props.personOne).length)
        }else{
            props.person.Phone === props.personOne.Phone? props.setPersonOne({}) :props.setPersonTwo({})
        }
    }

    //Storing the data of the employee that was chosen to be edited into the local storage in favor to access in the second rote
    const saveEmployeeInfo = () =>{
        localStorage.setItem("employee",JSON.stringify(props.person))
    }

    //**Disabling the button & input & aria by checking conditionally if the state isChecked is true
    //   and there is two employees that was chosen by the user other else disable is true**
    return(
        <div aria-disabled={(Object.keys(props.personOne).length === 0 || Object.keys(props.personTwo).length === 0)?false:
            (isChecked !== true)} className='person-main-container' >
            <form className='person-wrapper' action="/edit">
                <button disabled ={(Object.keys(props.personOne).length === 0 || Object.keys(props.personTwo).length === 0)?false:
                    (isChecked !== true)} onClick={saveEmployeeInfo} type="submit" className='person-edit-button'>Edit</button>
                <div className='button-space-even-div-for-css-purposes-only'/>
                <p className='person-check-box-description'>{`${props.person.Name}`}</p>
                <input disabled={(Object.keys(props.personOne).length === 0 || Object.keys(props.personTwo).length === 0)?false:
                    (isChecked !== true)}
                       className='person-check-box' type='checkbox' onChange={onChange} >
                </input>
            </form>
        </div>
    )
}