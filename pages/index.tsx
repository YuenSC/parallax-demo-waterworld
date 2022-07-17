import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren, ReactNode } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

import GameLabel from "../components/GameLabel";
import OpenStatusTag from "../components/OpenStatusTag";
import {
  GameDetailContextProvider,
  useGameDetailContext,
} from "../context/GameDetailContext";
import ageLogo from "../public/ageLogo.svg";
import fastPassLogo from "../public/fastPassLogo.svg";
import full360Logo from "../public/full360Logo.svg";
import heightLogo from "../public/heightLogo.svg";
import levelLogo from "../public/levelLogo.svg";
import icon from "../public/thrill-valley.svg";
import typeLogo from "../public/typeLogo.svg";
import weightLogo from "../public/weightLogo.svg";

const Home: NextPage = () => {
  const gameName = "絕嶺深谷";
  const isIndoor = true;

  return (
    <GameDetailContextProvider value={{ gameName, isIndoor }}>
      <VideoCard src="/skyhigh-falls.mp4" containerClassName="min-h-[92vh]">
        <div className="text-white space-y-4">
          <h1 className="text-4xl ">沖天瀑布</h1>
          <GameLabel iconSrc={icon} gameName={gameName} isIndoor={isIndoor} />
          <p className="text-sm leading-6">
            沖天瀑布為熱愛冒險的勇者帶來刺激體驗，坐在巨型水泡上穿越蜿蜒曲折的地帶，由滑板底部衝上與水平成70度角的巨型大滑板頂端。
          </p>
        </div>
      </VideoCard>
      <VideoCard src="/skyhigh-falls-2.mp4" containerClassName="min-h-[100vh]">
        <div className="text-white mt-32">
          <p className="flex justify-center text-sm leading-6 text-center">
            在最高點上短暫懸浮，體驗一飛沖天的感覺，然後高速飛墜，迂迴滑行結束旅程。
          </p>
        </div>
      </VideoCard>

      <GameDetail />
      <div className="h-screen"></div>
    </GameDetailContextProvider>
  );
};

export default Home;

const VideoCard: FC<
  PropsWithChildren<{ src: string; containerClassName?: string }>
> = ({ children, src, containerClassName }) => {
  return (
    <div className={`relative ${containerClassName}`}>
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute h-full w-full object-cover"
      >
        <source src={src} type="video/mp4"></source>
      </video>

      {/* Overlay */}
      <div className="absolute w-full h-full top-0 bg-black opacity-40" />

      {/* Detail */}
      <div className="absolute w-11/12 top-4 left-1/2 -translate-x-1/2 ">
        {children}
      </div>
    </div>
  );
};

export const GameDetail = () => {
  const { gameName, isIndoor } = useGameDetailContext();
  return (
    <div className="w-[90%] mt-10 mx-auto space-y-2 text-sm">
      <OpenStatusTag isOpen={true} />
      <h2 className="text-2xl text-blue-900">沖天瀑布</h2>
      <GameLabel
        variant="black"
        iconSrc={icon}
        gameName={gameName}
        isIndoor={isIndoor}
        level={3}
      />
      <div className="pt-5 space-y-5">
        <div>
          <Image src={fastPassLogo} alt="Fast Pass Logo" />
        </div>

        <GameDetailRow
          src={levelLogo}
          alt="Level Logo"
          label="驚險程度"
          title="極限挑戰"
        />
        <GameDetailRow
          src={typeLogo}
          alt="Tyle Logo"
          label="類型"
          title="刺激滑梯"
        />
        <GameDetailRow
          src={weightLogo}
          alt="Weight Logo"
          label="重量限制"
          title={
            <div>
              <p>個人：136公斤以下;</p>
              <p>三至六人：總重量為454公斤或以下</p>
            </div>
          }
        />
        <GameDetailRow
          src={ageLogo}
          alt="Age Logo"
          label="年齡"
          title="少年, 青少年, 成人"
        />
        <GameDetailRow
          src={heightLogo}
          alt="Level Logo"
          label="限制高度"
          title="110厘米"
        />

        <div className="leading-6">
          <p>景點限制</p>
          <ol className="list-decimal ml-4" type="A">
            <li>身高須達110厘米方可參與</li>
            <li>最高個人重量為136公斤</li>
            <li>最高合併重量為454公斤</li>
            <li>不可攜帶容易鬆脫物件</li>
            <li>嚴禁跳水</li>
            <li>不可攜帶尖銳物件</li>
          </ol>
        </div>

        <div className="space-y-2">
          <p>警告</p>
          <p>以下情況人士不應參與</p>
          <ol className="list-decimal ml-4 leading-6" type="A">
            <li>身高須達110厘米方可參與</li>
            <li>最高個人重量為136公斤</li>
            <li>最高合併重量為454公斤</li>
            <li>不可攜帶容易鬆脫物件</li>
            <li>嚴禁跳水</li>
            <li>不可攜帶尖銳物件</li>
          </ol>
        </div>

        <p>
          請閱讀安全告示並時常遵守員工指示！不遵守規則可能會導致嚴重受傷或被要求離開樂園。
        </p>

        <div className="flex flex-row space-x-4">
          <div>
            <Link passHref href={"/"}>
              <a>
                <ButtonWithOverlay>
                  <div className="flex flex-row items-center space-x-3 relative z-10">
                    <p>地圖</p>
                    <IoMdArrowRoundForward size={20} />
                  </div>
                </ButtonWithOverlay>
              </a>
            </Link>
          </div>
          <div>
            <Link passHref href={"/"}>
              <a>
                <ButtonWithOverlay hasOverlay={false}>
                  <div className="flex flex-row items-center space-x-4 relative z-10">
                    <p className="pr-2">虛擬導覽</p>
                    <Image src={full360Logo} alt="360 degree logo" />
                  </div>
                </ButtonWithOverlay>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const GameDetailRow = ({
  alt,
  label,
  src,
  title,
}: {
  src: any;
  alt: string;
  label: string;
  title: string | ReactNode;
}) => {
  return (
    <div className="flex flex-row space-x-4 items-start">
      <Image src={src} alt={alt} />
      <div className="text-sm">
        <p className="text-xs text-[#0394be] leading-2">{label}</p>
        {typeof title === "string" ? <p>{title}</p> : title}
      </div>
    </div>
  );
};

const ButtonWithOverlay: FC<PropsWithChildren<{ hasOverlay?: boolean }>> = ({
  children,
  hasOverlay = true,
}) => {
  const overlayStyle =
    "after:content-[''] after:bg-[#ff550a] after:absolute after:bottom-[0] after:top-[100%] after:left-[40%] after:right-[0] after:transition-all after:ease-in-out after:rounded-t-full hover:after:top-[-50%] hover:after:left-[-20%] hover:after:right-[-20%]";
  return (
    <button
      className={
        "relative px-8 py-6 rounded-full bg-[#ff840a] text-white overflow-hidden transition-all " +
        (hasOverlay ? overlayStyle : "hover:bg-[#ff550a]")
      }
    >
      {children}
    </button>
  );
};
