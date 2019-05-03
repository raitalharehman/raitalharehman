import React from 'react';

function LiItem(props) {
    const { icon, text } = props;
    return (
        <li>
            <div className="icon is-small"><i className={"fa fa-" + icon}></i></div>
            <span>{text}</span>
        </li>
    );
}

export default LiItem;