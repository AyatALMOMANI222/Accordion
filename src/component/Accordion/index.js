import React,{useState} from "react";
import {GoChevronDown} from "react-icons/go"
import {GoChevronLeft} from "react-icons/go"

function Accordion({propsItems}){
const [ expandedIndex , setExpandedIndex]=useState(0)
const renderItem = propsItems.map((item,index)=>{
const handleClick =(index)=>{
setExpandedIndex(index)
}
const isExpanded = index === expandedIndex
const icon = <span> { isExpanded ? <GoChevronDown/> : <GoChevronLeft/>} </span>
    return(
        <div>
            <div onClick={()=>handleClick(index)}>{item.label} {icon}</div>
            <div>{isExpanded && <div>{item.content}</div>}</div>
        </div>
    )
})
    return(
        <div>
{renderItem}
        </div>
    )
}
export default Accordion
