import React, { useEffect, useState } from 'react';

const List = ({getItems}) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        setItems(getItems()) //[1,2,3]
        console.log("숫자가 변동되었습니다.")
    },[getItems])
    const disArray = [<div>A</div>,<div>B</div>,<div>C</div>]
    return (
        <div>
            {items.map((item,index)=><div key={index}>{item}</div>)}
            {/* [1,2,3] */}
            {/* [<div key={0}>1</div>,<div key={0}>1</div>,<div key={0}>1</div>] */}
            {/* {items} */}
            {/* {disArray} */}
        </div>
    );
};

export default List;