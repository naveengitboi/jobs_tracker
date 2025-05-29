import React from 'react'

function TextArea(props) {
    const textAreaHandlerChange = (e)=>{
        const {name, value} = e.target;
        props.actions.setValue(prev => ({...prev, [name]:value}));
    }
  return (
    <textarea id="" className='textArea'
        placeholder={props.actions.placeholder}
        name={props.actions.name}
        onChange={(e) => textAreaHandlerChange(e)}></textarea>
  )
}

export default TextArea