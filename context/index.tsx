import { createContext, FC, useContext, useEffect, useState } from "react";
import ASScroll from "@ashthornton/asscroll";

interface MainContext {
  scroll: ASScroll | null;
  scrollY: number;
}

export const MainContext = createContext<MainContext>({
  scroll: null,
  scrollY: 0,
});

export const MainContextProvider: FC<{
  children: any;
  scroll: ASScroll | null;
}> = ({ children, scroll }) => {
  const [y, setY] = useState(0);

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (currentPos: number) => {
        setY(currentPos);
      });
    }
  }, [scroll]);

  return (
    <MainContext.Provider value={{ scroll, scrollY: y }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
