/* eslint-disable react/prop-types */
import { Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useState } from 'react';

const InputTags = ({ items, label, name, value, disabled = false }) => {
  const [tags, setTags] = useState(['sample']);
  const removeTags = indexToRemove => {
    if(disabled === false){
      setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    }
  };

  const addTags = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  useEffect(() => {
    if (items) {
      items(tags)
    }
  }, [])

  useEffect(() => {
    if (value) {
      const splitValues = value.split(",")
      setTags(splitValues)
    } else {
      setTags(['sample'])
    }
  }, [value])

  return (
    <div>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        {label}
      </Typography>
      <div className="flex items-start flex-wrap p-2 border border-gray-500 rounded-lg">
        <ul id="tags" className='flex flex-wrap gap-1 me-2'>
          {tags.map((tag, index) => (
            <li key={index} className="flex items-center justify-center bg-gray-700 px-2 py-1 rounded-md gap-2 text-white">
              <span className='text-xs font-bold'>{tag}</span>
              <span className='text-xs text-white font-semibold cursor-pointer'
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          name={name}
          onKeyUp={event => { event.key === "Enter" ? addTags(event) : null }}
          placeholder='Enter to add tags'
          className='flex-1 border-none outline-none '
          disabled={disabled}          
        />
      </div>
    </div>
  );
};

export default InputTags;
