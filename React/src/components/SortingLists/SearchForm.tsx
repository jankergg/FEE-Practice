import React, { FormEvent, FormEventHandler } from "react";
import InputWithLabel from "./InputWithLabel";

type SearchFormProps = {
  searchTerm: string;
  onSearchInput: (e: FormEvent<HTMLInputElement>) => void;
  onSearchSubmit: FormEventHandler<HTMLFormElement>;
  disabled?: boolean;
};

const SearchForm: React.FC<SearchFormProps> = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
  disabled,
}) => {
  return (
    <form onSubmit={onSearchSubmit} className='flex'>
      <InputWithLabel
        id='search_input'
        type='text'
        label='search'
        value={searchTerm}
        autoFocus
        onInput={onSearchInput}
      />
      <button type='submit' disabled={disabled} className='border rounded p-2 bg-orange-300 active:bg-red-400'>
        Submit
      </button>
    </form>
  );
};

export default React.memo(SearchForm);
