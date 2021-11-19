import React, {  useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';

const SortingMenu = ({ setSortBy }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
console.log('selectedLanguage: ', selectedLanguage);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center'
    }
  });

useEffect(() => {
    setSortBy(selectedLanguage);
    console.log('in sortingmenu useeffect');
  }, [selectedLanguage]);


return  <Picker
            selectedValue={selectedLanguage}
            style={styles.container}
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