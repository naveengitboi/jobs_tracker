import React from 'react'

function ToastPortal(props) {
    const {hasSvg = false, hasBody=false} = props;
    console.log()

  return (
    <div className="tpContainer succeed">
        {
            hasSvg && <div className="inputSvg">{<props.svg/>}</div>
        }
        <p className="toastHeader mediumTxt ">This is error</p>
        {
            hasBody && <p>This is body</p>
        }
    </div>
  )
}

export default ToastPortal