import React , {useState,useEffect}  from "react"
import {EmployeesListContainer} from "./employeesListContainer";
import {DiagramContainer} from "./diagramContainer";
import '../style/mainPage.css'
import axios from 'axios';


export const MainPage =()=>{

    const [personOne,setPersonOne] = useState({})
    const [personTwo,setPersonTwo] = useState({})
    const [employeesList,setEmployeesList] = useState([])

    //Get the list of all employees from database
    useEffect( ()=>{
        let config = {
            method: 'get',
            url: '/get_all_employees'
        };

        axios(config)
            .then(function (response) {
                setEmployeesList(response.data["list_employees"])
                console.log(JSON.stringify(response.data["list_employees"]));
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])


    return(
        <div className='mainpage-main-container'>
            <div className='account-wrapper'>
                <EmployeesListContainer personList={employeesList}
                                        setPersonOne={setPersonOne}
                                        setPersonTwo={setPersonTwo}
                                        personOne={personOne}
                                        personTwo={personTwo}/>
            </div>
            <div className='diagram-wrapper'>
                <DiagramContainer personList={employeesList}
                                  personOne={personOne}
                                  personTwo={personTwo}/>
            </div>
        </div>
    )
}