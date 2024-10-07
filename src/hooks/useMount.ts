import { useEffect, useRef } from "react";

const useMount = (cb: any, condition = true) => {
  const isCalledRef = useRef(false);
  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
};
export default useMount;
