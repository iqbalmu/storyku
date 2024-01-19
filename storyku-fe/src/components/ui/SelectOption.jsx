/* eslint-disable react/prop-types */
import { Option, Select, Typography } from '@material-tailwind/react'

const SelectOption = ({ label, options, onchange, value, disabled }) => {
  const data = options || []
  return (
    <div className='w-full'>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        {label}
      </Typography>
      <Select        
        value={value}
        onChange={onchange}
        disabled={disabled}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      >
        {data.map((item) => (
          <Option key={item.name} value={item.value}>{item.name}</Option>
        ))}
      </Select>
    </div>
  )
}

export default SelectOption