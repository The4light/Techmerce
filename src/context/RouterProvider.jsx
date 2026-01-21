import { useState } from "react";
import { RouterContext } from "./RouterContext";

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState("/");
  const [params, setParams] = useState({});

  const navigate = (path, pathParams = {}) => {
    setCurrentPath(path);
    setParams(pathParams);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
}
