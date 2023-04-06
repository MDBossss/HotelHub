import React from 'react'

interface Props{
    values: string[],
    onClicked?: (value: string) => void,
    className?: string
}

const DropdownList = ({values,onClicked,className}:Props) => {
  return (
    <div className={`dropdown-list ${className}`}>
        {values.map((value,index) => (
            <p key={index} onClick={() => onClicked?.(value)}>{value}</p>
        ))}
    </div>
  )
}

export default DropdownList