import {useEffect, RefObject} from "react";

/**
 * Hook that triggers a callback when a click occurs outside a specified element.
 * @param ref The ref object representing the element.
 * @param callback The callback function to be executed when a click occurs outside the element.
 */
const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
              callback();
            }
          };
      
          document.addEventListener('mousedown', handleClickOutside);
      
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
    },[ref,callback])
}

export default useClickOutside