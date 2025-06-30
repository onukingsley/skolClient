import React from 'react';
import {useParams} from 'react-router-dom';

const  StudentIndex = ()=> {
    const {id} = useParams();
    return (
        <div>
            <p>
                Student Dashboard
                {id}
            </p>
        </div>
    );
}

export default StudentIndex