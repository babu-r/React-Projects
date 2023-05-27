import {useCallback,useState} from 'react'

const useToggle = (initialValue) => {
     const [value, setValue] = useState(initialValue);

     const toggleValue = useCallback(() => {
          setValue(!value)
      }, [value]);
  
      return [value, toggleValue];
}
export default useToggle;