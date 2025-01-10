import React from 'react'

const Dropdown = ({ options, value, onChange, name }) => {
  return (
    <>
         <select name={name} value={value} onChange={onChange}>
            {options?.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </>
  )
}

export default Dropdown