import React from 'react';
import './App.css';
import Form from "./Form";

const App = (props) => {
    let formElements=
        props.state.nameN.map(f => <Form id={f.id}
                                         firstName={f.firstName}
                                         secondName={f.secondName}
                                         likesCount={f.likesCount}/>)
    return (
        <div>
            {formElements}
        </div>
    )
}

export default App;