import React from 'react'

interface Props{
    textColor?: string,
    lineColor?: string,
    fontSize?: string,
    text?: string
}

const Separator = ({textColor,lineColor,fontSize,text}:Props) => {
  return (
    <div className="separator">
        {text && <p style={{color:textColor,fontSize:fontSize}}>{text}</p>}
        <div className="line" style={{backgroundColor:lineColor}}></div>
    </div>
  )
}

export default Separator