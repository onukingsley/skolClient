import React from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <p>
                home page
                <Outlet />
            </p>
        </div>
    );
}

export default Index;