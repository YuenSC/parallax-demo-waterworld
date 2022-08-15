import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FC, PropsWithChildren, ReactNode, useContext } from "react";

import PageContainerContext from "./pageContainerContext";

const Page: FC<
  PropsWithChildren<{
    page: number;
    pageSize?: number;
    renderLeft: (pageProgress: MotionValue<number>) => ReactNode;
    renderRight: (pageProgress: MotionValue<number>) => ReactNode;
  }>
> = ({ page, renderLeft, renderRight, pageSize = 1 }) => {
  const { fullProgress, numOfPages } = useContext(PageContainerContext);

  const pageProgress = useTransform(fullProgress!, (value) =>
    value < page ? 0 : Math.min(value, page + pageSize) - page
  );

  const opacity = useTransform(pageProgress, (value) => {
    if (page === 0 && value === 0) return 1;
    if (page === numOfPages - 1 && value === 1) return 1;

    return value > 0 && value < pageSize ? 1 : 0;
  });

  const opacityWithSpring = useSpring(opacity, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const position = useTransform(pageProgress, (value) => {
    if (page === numOfPages - 1 && value === 1) return "absolute";
    return "fixed";
  });

  const top = useTransform(pageProgress, (value) => {
    if (page === 0 && value === 0) return "0";
    if (page === numOfPages - 1 && value === 1) return numOfPages * 100 + "vh";
    return "0";
  });

  const width = useTransform(pageProgress, (value) => {
    if (page === 0 && value < 1) return "100%";
    return "60%";
  });

  const zIndex = useTransform(pageProgress, (value) => {
    if (page === 0 && value < 1) return 1;
    return 0;
  });

  return (
    <div className={`flex flex-row w-full`}>
      <motion.div
        className="fixed top-0 h-screen"
        style={{
          opacity: opacityWithSpring,
          position,
          top,
          width,
          transition: "width 0.5s ease-in-out",
          zIndex,
        }}
      >
        {renderLeft(pageProgress)}
      </motion.div>
      <div
        className="flex flex-col justify-center items-center h-screen"
        style={{
          marginLeft: "auto",
          transform: "translateY(90vh)",
          height: pageSize * 100 + "vh",
          width: "40%",
        }}
      >
        {renderRight(pageProgress)}
      </div>
    </div>
  );
};

export default Page;
