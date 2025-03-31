import React, { useContext } from 'react'; // Import React and useContext
import UserContext from '../UserContext'; // Import UserContext
import React, { useContext } from 'react'; // Import React and useContext
import UserContext from '../UserContext'; // Import UserContext

const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
