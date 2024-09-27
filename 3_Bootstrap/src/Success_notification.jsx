import React from 'react';

const SuccessNotification = (props) => {
    return (
        <div className="alert  alert-success">
            <h3>Subscribed User!</h3>
            <div className="content">
                <p>Welcome {props.name}!</p>
                <p>Thank you for being a valuable subscriber.</p>
            </div>
        </div>
    );
};

export default SuccessNotification;