const ProvFSName = (props) => {
    let nName;
    if (props.secondName===undefined){nName = props.firstName;}
    else if(props.firstName===undefined){nName = props.secondName}
    else{nName= props.firstName + ' ' + props.secondName }
    return nName;
}

export default ProvFSName;