import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from "react";

import { ScrollContext } from "./scroll-observer";

interface WrapperProps {
  numOfPages: number;
}

interface TileContextValiue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = createContext<TileContextValiue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: FC<PropsWithChildren<WrapperProps>> = ({
  numOfPages,
  children,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const { current: elContainer } = refContainer;

  let currentPage = 0;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    currentPage = percentY * numOfPages;
  }

  console.log(currentPage);

  return (
    <TileContext.Provider value={{ currentPage, numOfPages }}>
      <div
        ref={refContainer}
        className="relative bg-white text-white"
        style={{ height: numOfPages * 150 + "vh" }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: FC<PropsWithChildren> = ({ children }) => {
  return <div className="absolute h-full w-full"> {children}</div>;
};

export const TileContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

export const Tile: FC<PropsWithChildren<Props>> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const progress = Math.max(0, currentPage - page);

  const refContainer = useRef<HTMLDivElement>(null);

  let opacity = progress > 0 && progress < 1 ? 1 : 0;
  if (progress > 1 && page < numOfPages - 1)
    opacity = Math.max(0, (1.0 - progress) * 4);

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full border-blue-500 border-4"
      style={{
        opacity: opacity,
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        transition: "all 0.6s ease",
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
