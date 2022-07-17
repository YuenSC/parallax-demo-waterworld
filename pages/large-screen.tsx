import { useViewportScroll } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";
import { FC } from "react";
import { PropsWithChildren } from "react";
import { IoMdListBox } from "react-icons/io";

import ScrollObserver from "../components/scroll-observer";
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
} from "../components/tile";
import { GameDetailContextProvider } from "../context/GameDetailContext";
import { GameDetail } from ".";

const Home: NextPage = () => {
  const gameName = "絕嶺深谷";
  const isIndoor = true;

  return (
    <GameDetailContextProvider value={{ gameName, isIndoor }}>
      <ScrollObserver>
        <div className="h-[30vh] bg-white"></div>
        <div className="flex flex-row">
          <div className="w-2/3">
            <TileWrapper numOfPages={3}>
              <TileContent>
                <Tile
                  page={0}
                  renderContent={({ progress }) => (
                    <VideoContainer progress={progress}>
                      <video
                        autoPlay
                        muted
                        loop
                        className="h-screen w-full object-cover"
                      >
                        <source
                          src={"/skyhigh-falls.mp4"}
                          type="video/mp4"
                        ></source>
                      </video>
                    </VideoContainer>
                  )}
                />
                <Tile
                  page={1}
                  renderContent={({ progress }) => (
                    <VideoContainer progress={progress}>
                      <video
                        autoPlay
                        muted
                        loop
                        className="h-screen w-full object-cover"
                      >
                        <source
                          src={"/skyhigh-falls-2.mp4"}
                          type="video/mp4"
                        ></source>
                      </video>
                    </VideoContainer>
                  )}
                />
                <Tile
                  page={2}
                  renderContent={({ progress }) => (
                    <VideoContainer progress={progress}>
                      <Image
                        src={"/skyhigh_falls.jpeg"}
                        alt="image"
                        layout="fill"
                        objectFit="cover"
                      />
                    </VideoContainer>
                  )}
                />
              </TileContent>
            </TileWrapper>
          </div>
          <div className="w-1/3 text-black bg-white">
            <div className="h-screen">21</div>
            <div className="h-screen">123</div>
            <GameDetail />
          </div>
        </div>

        <div className="h-[30vh] bg-white"></div>
      </ScrollObserver>
    </GameDetailContextProvider>
  );
};

export default Home;

const VideoContainer: FC<PropsWithChildren<{ progress: number }>> = ({
  progress,
  children,
}) => {
  // let translateY = Math.max(0, 50 - progress * 3 * 50);
  // if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);

  return (
    <div
      style={{
        // transform: `translateY(${translateY}px)`,
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};
