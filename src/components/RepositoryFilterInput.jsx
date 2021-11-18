import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from "use-debounce";
import { useQuery } from '@apollo/client';
import { SEARCH_REPOSITORIES } from '../graphql/queries';


const RepositoryFilterInput = ({ setFilteredRepos }) => {
const [text, setText] = useState('');
const [debouncedText] = useDebounce(text, 500);
const onChangeSearch = text => setText(text);

const { data } = useQuery(SEARCH_REPOSITORIES, ({ variables: { keyword: debouncedText }}));
console.log('data in filterinput: ', data);

  useEffect(() => {
    if (debouncedText) {
        console.log('debounced text typed and data: ', data);
        setFilteredRepos(data);
        
    } else {
        setFilteredRepos(data);
    }
  }, [data]);

  return <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={text}
        />;
};

export default RepositoryFilterInput;