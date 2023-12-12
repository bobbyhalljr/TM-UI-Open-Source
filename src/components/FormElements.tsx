// components/FormElements.tsx
import React, { useState } from 'react';

interface TextInputProps {
  placeholder?: string;
  label?: string;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder, label }) => {
  return (
    <div>
      <label className='text-gray-400 font-medium'>{label}</label>
      <input type="text" className="mb-6 mt-1 max-w-md block w-full px-3 py-2 bg-white border-2 border-slate-300 rounded-md text-medium shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-gray-300
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder={placeholder} 
      />
    </div>
  );
};

interface SearchInputProps {
  placeholder?: string;
  label?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder, label }) => {
  return (
    <form className="group relative">
      <svg width="30" height="30" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 text-lg pointer-events-none group-focus-within:text-gray-500" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input className="max-w-md focus:border-sky-400 focus:ring-1 focus:ring-gray-300 focus:outline-none appearance-none w-full text-lg leading-6 border-2 border-slate-300 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" aria-label="Search" placeholder={placeholder} />
    </form>
  )
}

interface TextareaProps {
  placeholder?: string;
  label?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ placeholder, label }) => {
  return (
    <div>
      <label className='text-gray-400'>{label}</label>
      <textarea className="my-3 max-w-md block w-full px-3 py-2 bg-white border-2 border-slate-300 rounded-md text-medium shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-gray-300
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder={placeholder} 
      />
    </div>
  );
};

interface SelectDropdownProps {
  options: string[];
  className?: string;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({ options }) => {
  return (
    <select className="my-3 max-w-md block w-full px-3 py-2 bg-white border-2 border-slate-300 rounded-md text-medium shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
      {options.map((option, index) => (
        <option className='text-gray-500' key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export interface CheckboxProps {
  disabled?: boolean;
  defaultChecked?: boolean;
  id?: string;
  label: string;
  color?: string;
  className?: string;
}

export const Checkbox = ({ color, disabled, id, label }: CheckboxProps) => (
  <div className="w-full flex gap-2 items-center">
    <input
      id={id}
      className={`peer appearance-none w-4 h-4 border-2 border-blue-300 rounded-sm mt-1 bg-white focus:outline-none focus:ring-1 focus:ring-blue-300
        ${disabled ? 'cursor-not-allowed bg-gray-400' : ''} ${
        color ? `checked:bg-${color}-500 checked:border-0` : 'checked:bg-blue-500 checked:border-0'
      } disabled:border-steel-400 disabled:bg-steel-400`}
      type="checkbox"
      defaultChecked={disabled ? false : undefined}
      disabled={disabled}
    />
    <label htmlFor={id} className="cursor-pointer ml-2">
      {label}
    </label>
  </div>
);



interface RadioButtonProps {
  label: string;
  name: string;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ label, name }) => {
  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="amber">
        <input name="color" type="radio"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-sky-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-sky-400 checked:before:bg-sky-400 hover:before:opacity-10"
          id="radio" />
        <span
          className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </label>
        {label}
    </div>
  );
};

interface ToggleSwitchProps {
  label: string;
  color?: string;
  className?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, color = 'emerald' }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='m-4'>
      <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
          <input
            type='checkbox'
            name='autoSaver'
            className='sr-only'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
              isChecked ? `bg-${color ? color : 'blue'}-400` : 'bg-[#CCCCCE]'
            }`}
          >
            <span
              className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                isChecked ? 'translate-x-6' : ''
              }`}
            ></span>
          </span>
          <span className='label flex items-center text-sm font-medium text-black'>
            {label} <span className='pl-1'> {isChecked ? 'On' : 'Off'} </span>
          </span>
        </label>
    </div>
  );
};



interface SearchBarProps {
  data: Array<{ id: number; name: string; description: string }>; // Replace with your actual data structure
  onSearch: (results: Array<{ id: number; name: string; description: string }>) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Array<{ id: number; name: string; description: string }>>([]);

  const handleSearch = () => {
    // Implement search logic based on your requirements
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Optionally, you can add sorting logic here

    setResults(filteredResults);
    onSearch(filteredResults);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-3 max-w-md block w-full px-3 py-2 bg-white border-2 border-slate-300 rounded-md text-medium shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};


