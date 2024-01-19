/* eslint-disable react/prop-types */
import { Textarea, Typography } from "@material-tailwind/react"

const TextArea = ({ label, placeholder, name, onchange, value, disabled }) => {
  return (
    <div>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        {label}
      </Typography>
      <Textarea
        name={name}
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        placeholder={placeholder}
        onChange={onchange}
        value={value}
        disabled={disabled}
        labelProps={{
          className: "before:content-none after:content-none",          
        }} />
    </div>
  )
}

export default TextArea