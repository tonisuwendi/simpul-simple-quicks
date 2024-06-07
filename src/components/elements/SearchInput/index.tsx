import React from 'react';
import { TextInput } from '@mantine/core';
import { Search } from '@mui/icons-material';

const SearchInput: React.FC<{
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ value, onChange }) => (
  <TextInput
    placeholder="Search"
    rightSection={<Search className="text-[20px] text-primary-slate" />}
    value={value}
    onChange={onChange}
    classNames={{
      input: 'rounded-[5px] px-10 border border-primary-slate transition focus:border-primary-blue focus:ring-primary-blue focus:ring-1',
      section: 'mr-10'
    }}
  />
);

export default SearchInput;
