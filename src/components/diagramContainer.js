import React from "react"
import '../style/diagramContainer.css'

export const DiagramContainer =(props)=>{

    let salaryOne = '';
    let salaryTwo = '';

    //Calculating employees annual income and storing in component variables
    if(Object.keys(props.personOne).length !== 0 && Object.keys(props.personTwo).length !== 0){
        salaryOne = props.personOne.Salary
        salaryTwo = props.personTwo.Salary

        salaryOne= salaryOne.replace(/[^0-9\.]+/g, '');
        salaryTwo= salaryTwo.replace(/[^0-9\.]+/g, '');

        salaryOne = parseInt(salaryOne)*12
        salaryTwo = parseInt(salaryTwo)*12
    }

    // Made almost for each element separate div in favor to control the css in terms of location and sizes
    return(
        <div className='diagram-main-container'>
            {(Object.keys(props.personOne).length === 0 || Object.keys(props.personTwo).length === 0) ?
                <div className='who-wins-container'>
                    <p className='a-header'>Pick 2 employees</p>
                    <p className='a-header'>and see who</p>
                    <p className='a-header'>earn the most?</p>
                </div>:
                <div className='who-wins-container'>
                    <p className='a-header'>So...</p>
                    <p className='a-header'>Who earn the most?</p>
                    <div className='diagram-container'>

                        <div className='winner-side'>
                            <div className='person-1-winner-details'>
                                <div className='person-details'>
                                    {salaryOne>salaryTwo?(`${props.personOne.Name}`): (`${props.personTwo.Name}`)}</div>
                            </div>
                            <div className='person-1-winner-salary'>
                                <div className='person-salary'>${salaryOne>salaryTwo?(salaryOne):
                                    (salaryTwo)}</div>
                            </div>
                            <div className='person-1-winner-sum'>
                                <div className="arrow-up"/>
                                <div className='person-salary'>${salaryOne>salaryTwo?(`${salaryOne-salaryTwo}`):
                                    (`${salaryTwo-salaryOne}`)}</div>
                            </div>
                        </div>
                        <div className='a-header-2-container'>
                            <div className='wrapper-a-header2-vs'>
                                <p className='a-header2-vs'>vs.</p>
                            </div>
                            <div className='wrapper-a-header2-salary'>
                                <p className='a-header2-salary'>Yearly income</p>
                            </div>
                            <div className='sum-gap-css'/>
                        </div>

                        <div className='loser-side'>
                            <div className='person-2-loser-details'>
                                <div className='person-details'>{salaryOne>salaryTwo?(`${props.personTwo.Name}`):
                                    (`${props.personOne.Name}`)}</div>
                            </div>
                            <div className='person-2-loser-salary'>
                                <div className='person-salary'>${salaryOne>salaryTwo?(salaryTwo):
                                    (salaryOne)}</div>
                            </div>
                            <div className='person-2-loser-sum'>
                                <div className='arrow-down'/>
                                <div className='person-salary'>${salaryOne>salaryTwo?(salaryOne-salaryTwo):
                                    (salaryTwo-salaryOne)}</div>
                            </div>
                        </div>

                    </div>
                </div>}

        </div>
    )
}