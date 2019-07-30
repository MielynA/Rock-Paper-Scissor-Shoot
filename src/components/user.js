import React from 'react'



const User = props => {
    console.log(props)
    return(

        <React.Fragment>
            <div class="col-md-4 mb-3">
            <div>{props.name}</div>
            </div>
        </React.Fragment>
    );
}

export default User; 