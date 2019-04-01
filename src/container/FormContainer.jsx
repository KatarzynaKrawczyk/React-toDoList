import React from "react";
import axios from "axios";

class FormContainer extends React.Component {
    constructor() {
      super();
    }

    render() {
        return(
            <form>
                <label>
                    Title
                </label>
                <input
                    name='title'
                />
        )
    }
}

export default FormContainer;