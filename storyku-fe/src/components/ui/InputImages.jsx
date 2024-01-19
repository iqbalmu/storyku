/* eslint-disable react/prop-types */
import { PhotoIcon } from '@heroicons/react/24/outline'
import { Input, Typography } from '@material-tailwind/react'

const InputImages = ({ label, onchange, value, disabled }) => {
  return (
    <div className='w-full'>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        {label}
      </Typography>
      <div className='border rounded-md border-gray-400'>
        <Input
          type='file'
          icon={<PhotoIcon />}
          disabled={disabled}
          onChange={onchange}
          className="!border-t-blue-gray-200 focus:!border-t-gray-900 opacity-0 cursor-pointer"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <span className='text-xs ms-2'>{value}</span>
    </div>
  )
}

export default InputImages