import { useScroll, useTransform } from "framer-motion";
import { FC, PropsWithChildren, useRef } from "react";

import PageContainerContext from "./pageContainerContext";

const PageContainer: FC<PropsWithChildren<{ numOfPages: number }>> = ({
  numOfPages,
  children,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const fullProgress = useTransform(scrollYProgress, [0, 1], [0, numOfPages]);

  return (
    <PageContainerContext.Provider value={{ numOfPages, fullProgress }}>
      <div
        className="relative"
        ref={ref}
        style={{ height: (numOfPages + 1) * 100 + "vh" }}
      >
        {children}
        {/* Make some height for the last page to do the sticky scroll */}
      </div>
    </PageContainerContext.Provider>
  );
};

export default PageContainer;
