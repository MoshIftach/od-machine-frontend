import React from "react"
import {EmployeeContainer} from "./employeeContainer";
import '../style/employeesListContainer.css'
export const EmployeesListContainer =(props)=>{
    return(
        <div className='account-main-container'>
            <div className='account-container'>
                {props.personList.map(person=>
                    <ul key={person.Phone}>
                        <EmployeeContainer person={person} setPersonOne={props.setPersonOne}
                                           setPersonTwo={props.setPersonTwo}
                                           personOne={props.personOne} personTwo={props.personTwo}> </EmployeeContainer>
                    </ul>

                )}
            </div>
        </div>
    )
}