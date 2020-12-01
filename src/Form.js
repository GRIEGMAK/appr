import React from 'react'
import ProvFSName from "./ProvFSName";


const Form = (props) => {
    return(
        <div>
            <div>Это сообщение {props.id} в списке</div>
            <a href={props.id} onClick={<onClickCharge firstName={props.firstName}
                                                       secondName={props.secondName}/>}>
            <div>С подключением <ProvFSName firstName={props.firstName}
                                           secondName={props.secondName}/>!!!</div>
            </a>
            <div>Количество лайков: {props.likesCount}</div>
            <hr />
        </div>
    )
}

export default Form;
