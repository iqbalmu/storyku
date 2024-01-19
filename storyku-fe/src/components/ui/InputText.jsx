/* eslint-disable react/prop-types */
import { Input, Typography } from "@material-tailwind/react"

const InputText = ({ label, placeholder, onchange, name, value, disabled }) => {
  return (
    <div className="flex flex-col w-full">
      <Typography variant="h6" color="blue-gray" className="mb-2">
        {label}
      </Typography>
      <Input        
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
        disabled={disabled}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  )
}

export default InputText