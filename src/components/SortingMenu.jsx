import React, {  useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';

const SortingMenu = ({ setSortBy }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
console.log('selectedLanguage: ', selectedLanguage);

useEffect(() => {
    setSortBy(selectedLanguage);
    console.log('in sortingmenu useeffect');
  }, [selectedLanguage]);


return  <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) =>
                setSelectedLanguage(itemValue)
        }>
            <Picker.Item 
                label="Select an item..." 
                value='' 
            />
            <Picker.Item 
                label="Latest repositories" 
                value='latest' 
            />
            <Picker.Item 
                label="Highest rated repositories" 
                value='highest'
            />
            <Picker.Item 
                label="Lowest rated repositories" 
                value='lowest' 
            />
        </Picker>;

};

export default SortingMenu;