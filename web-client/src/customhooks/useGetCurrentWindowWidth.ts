import { useState, useEffect } from "react";

export const useGetCurrentWindowWidth = () => {
  const getWidth = () =>
    // Client-side-only code

    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  // save current window width in the state object
  let [width, setWidth] = useState(1000);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    setWidth(getWidth());
    // timeoutId for debounce mechanism
    let timeoutId: any = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return { width };
};