import React from 'react';

function Sort(props) {

    return (
        <div>
            <b>Sort By: </b>
            <select  onChange={props.sort} value={this}>
                <option value={["name", "asc"]}>a-z</option>
                <option value={["name", "desc"]}>z-a</option>
                <option value={["price", "asc"]}>h-l</option>
                <option value={["price", "desc"]}>l-h</option>
            </select>
        </div>
    );
}

function Filter() {
    
}
export default Sort;