import React from 'react';

function Sort(props) {

    return (
        <div className="sortDiv">
            <b>Sort By: </b>
            <select  onChange={props.sort} value={this}>
                <option value={["name", "asc"]}>Product Name[A-Z]</option>
                <option value={["name", "desc"]}>Product Name[Z-A]</option>
                <option value={["price", "asc"]}>Price: Lowest to Highest</option>
                <option value={["price", "desc"]}>Price: Highest to Lowest</option>
            </select>
        </div>
    );
}

function Filter() {
   return (
    <div className="filterDiv">
        <b>Filter By:</b>
        <form>
            <label>
                Color: <input type="text"/>
            </label>
            <label>
                size: <input type="text"/>
            </label>
            <label>
                price: <input type="text"/>
            </label>
        </form>
    </div>
    )
}
export {Sort};