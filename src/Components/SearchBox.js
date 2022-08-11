import React, {useRef, useEffect} from 'react'

 const SearchBox = ({searchField , searchChange}) => {

    const inputReference = useRef(null);

    useEffect(() => {
      inputReference.current.focus();
    }, []);
  
  return (
    <div>
        <input
          className='pa3 ba bg-lightest-blue b--green'
          type='search'
          placeholder='search robot'
          onChange = {searchChange}
          ref = {inputReference}
          />
    </div>
  )
}

export default SearchBox;
