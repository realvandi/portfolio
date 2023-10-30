import { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ScreenWidth } from "../types";

interface HomeContextProps {
  screenWidth: ScreenWidth;
  setScreenWidth: (screenWidth: ScreenWidth) => void;
  timeHeldDown: number;
  setTimeHeldDown: React.Dispatch<React.SetStateAction<number>>;
  homePhase: number;
  setHomePhase: (phase: number) => void;
}

const defaultContextValue: HomeContextProps = {
  screenWidth: ScreenWidth.MOBILE, // You should import ScreenWidth enum from your types file
  setScreenWidth: () => {},
  timeHeldDown: 0,
  setTimeHeldDown: () => {},
  homePhase: 0,
  setHomePhase: () => {},
};

export const HomeContext = createContext<HomeContextProps>(defaultContextValue);
// A component that sets the home variables
export function HomeProvider({ children }: any) {
  const isMobile = useMediaQuery({ minWidth: "0px", maxWidth: "639px" });
  const isSm = useMediaQuery({ minWidth: "640px", maxWidth: "767px" });
  const isMd = useMediaQuery({ minWidth: "768px", maxWidth: "1023px" });
  const isLg = useMediaQuery({ minWidth: "1024px", maxWidth: "1279px" });
  const isXl = useMediaQuery({ minWidth: "1280px", maxWidth: "1535px" });
  const isXxl = useMediaQuery({ minWidth: "1536px" });

  useEffect(() => {
    if (isMobile) {
      setScreenWidth(ScreenWidth.MOBILE);
    } else if (isSm) {
      setScreenWidth(ScreenWidth.SM);
    } else if (isMd) {
      setScreenWidth(ScreenWidth.MD);
    } else if (isLg) {
      setScreenWidth(ScreenWidth.LG);
    } else if (isXl) {
      setScreenWidth(ScreenWidth.XL);
    } else if (isXxl) {
      setScreenWidth(ScreenWidth.XXL);
    } else {
      setScreenWidth(ScreenWidth.MOBILE);
    }
  }, [isSm, isMd, isLg, isXl, isXxl, isMobile]);

  const [screenWidth, setScreenWidth] = useState(ScreenWidth.MOBILE);
  const [timeHeldDown, setTimeHeldDown] = useState(0);
  const [homePhase, setHomePhase] = useState(0);

  return (
    <HomeContext.Provider
      value={{
        screenWidth,
        setScreenWidth,
        timeHeldDown,
        setTimeHeldDown,
        homePhase,
        setHomePhase,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
