import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from "use-debounce";


const RepositoryFilterInput = ({ setKeyword }) => {
const [text, setText] = useState('');
const [debouncedText] = useDebounce(text, 500);
const onChangeSearch = text => setText(text);

  useEffect(() => {
    if (debouncedText) {
        setKeyword(debouncedText);
        
    } else {
        setKeyword('');
    }
  }, [debouncedText]);

  return <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={text}
        />;
};

export default RepositoryFilterInput;