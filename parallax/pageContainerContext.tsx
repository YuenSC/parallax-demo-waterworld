import { MotionValue } from "framer-motion";
import { createContext } from "react";

const PageContainerContext = createContext<{
  numOfPages: number;
  fullProgress?: MotionValue<number>;
}>({
  numOfPages: 0,
});

export default PageContainerContext;
