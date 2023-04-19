import { createContext, FC, useContext, useEffect, useState } from "react";
import ASScroll from "@ashthornton/asscroll";
import { useWindowSize } from "react-use";

interface MainContext {
  scroll: ASScroll | null;
  scrollY: number;
  width: number;
  height: number;
}

export const MainContext = createContext<MainContext>({
  scroll: null,
  scrollY: 0,
  width: 0,
  height: 0,
});

export const MainContextProvider: FC<{
  children: any;
  scroll: ASScroll | null;
}> = ({ children, scroll }) => {
  const [y, setY] = useState(0);
  const { width, height } = useWindowSize(); // TODO - Probably this is not good idea, because it may cause re-render of all components using MainContext

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (currentPos: number) => {
        setY(currentPos);
      });
    }
  }, [scroll]);

  return (
    <MainContext.Provider value={{ scroll, scrollY: y, width, height }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
