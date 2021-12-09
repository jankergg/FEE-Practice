import React from "react";

const useMount = (fn?: () => void) => {
  const [isMounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    isMounted && fn?.();
  }, [isMounted, fn]);

  return isMounted;
};
export default useMount;
