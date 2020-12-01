import React from 'react'
import ProvFSName from "./ProvFSName";

const onClickCharge = (props) =>{
    alert(<ProvFSName firstName={props.firstName} secondName={props.secondName}/>);
}
 export default onClickCharge;