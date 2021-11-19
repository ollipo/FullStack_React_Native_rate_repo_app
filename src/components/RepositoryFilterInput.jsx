import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from "use-debounce";/* 
import { useQuery } from '@apollo/client';
import { SEARCH_REPOSITORIES } from '../graphql/queries'; *//* 
import useRepositories from '../hooks/useRepositories'; */


const RepositoryFilterInput = ({ setKeyword }) => {
const [text, setText] = useState('');
const [debouncedText] = useDebounce(text, 500);
const onChangeSearch = text => setText(text);
/* 
const { data } = useRepositories( debouncedText );
console.log('data in filterinput: ', data); */

  useEffect(() => {
    if (debouncedText) {
        console.log('debounced text in filterinput: ', debouncedText);
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