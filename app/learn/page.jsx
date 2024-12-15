"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { motion } from "framer-motion";

import React, { useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setValue } from "../redux/counterReducer";

import { GoPlus } from "react-icons/go";
import { FaRepeat } from "react-icons/fa6";

import { setLearn } from "../redux/setReducer";
import Link from "next/link";


const Learn = () => {
  const name = useSelector((state) => state.sets.name);
  const set = useSelector((state) => state.sets.learn);
  const [kanji, setKanji] = useState(set)
  const flipCard = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };
  const [flipped, setFlipped] = useState(Array(kanji.length).fill(false));

  const isVisible = useSelector((state) => state.show.isVisible);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const handleCarouselItemHover = (index) => {
    dispatch(setValue(index + 1));
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (kanji) {
      setKanji([...kanji].sort(() => Math.random() - 0.5)); // Shuffle a copy of the array
    }
  }, []);


  return (
    <div className="pt-10 pb-5 ">
      <motion.div className=""
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
        }}
      >

        {/* Upper bracker */}
        <div className={` ${isVisible == true ? '' : 'transparent'}  
        justify-center transition duration-700 ease-in-out opacity flex text-eel
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-full flex flex-row items-center justify-center max-w-[640px] font-light pb-5 "
            style={{
              transition: 'transform 0.1s ease-in-out',
              transform: `translateX(${((selectedIndex) * -20)}%)`,
            }}
          >
            <span className={`${kanji[(selectedIndex - 2)]?.char.length >= 5 ? 'text-[14px]' : 'text-[16px]'} w-1/5 text-center opacity-[0.2]`}
              style={{
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(${((selectedIndex) * 100)}%)`,
              }}
            >{kanji[(selectedIndex - 2)]?.char ?? ''}</span>
            <span className={`${kanji[(selectedIndex - 1)]?.char.length >= 5 ? 'text-[14px]' : 'text-[16px]'} w-1/5 text-center opacity-[0.5]`}
              style={{
                transition: 'transform 0.4s ease-in-out',
                transform: `translateX(${((selectedIndex) * 100)}%)`,
              }}
            >{kanji[(selectedIndex - 1)]?.char ?? ''}</span>
            <span className={`${kanji[(selectedIndex)]?.char.length >= 5 ? 'text-[14px]' : 'text-[16px]'} w-1/5  text-center border-b border-eel`}
              style={{
                transition: 'transform 0.3s ease-in-out',
                transform: `translateX(${((selectedIndex) * 100)}%)`,
              }}
            >
              {kanji[selectedIndex].char}
            </span>
            <span className={`${kanji[(selectedIndex + 1)]?.char.length >= 5 ? 'text-[14px]' : 'text-[16px]'} w-1/5 text-center opacity-[0.5]`}
              style={{
                transition: 'transform 0.4s ease-in-out',
                transform: `translateX(${((selectedIndex) * 100)}%)`,
              }}
            >{kanji[(selectedIndex + 1)]?.char ?? ''}</span>
            <span className={`${kanji[(selectedIndex + 2)]?.char.length >= 5 ? 'text-[14px]' : 'text-[16px]'} w-1/5 text-center opacity-[0.2]`}
              style={{
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(${((selectedIndex) * 100)}%)`,
              }}
            >{kanji[(selectedIndex + 2)]?.char ?? ''}</span>
          </div>
        </div>


        <Carousel className="w-full md:container" >
          <CarouselContent index={selectedIndex}>
            {kanji.map((kanji, index) => {
              const cardRef = useRef(null);
              const [sel, setSel] = useState(false)
              return (
                <CarouselItem key={index} className='group'
                  onMouseEnter={() => handleCarouselItemHover(index)}
                >
                  {/* Card face 1 */}
                  <div
                    className={` items-center flex justify-center rounded-3xl ${name === 'testSet'
                      ? 'bg-accent'
                      : name === 'radicals'
                      ? 'bg-macaw'
                      : name === 'genki'
                      ? 'bg-orange'
                      : name === 'mina'
                      ? 'bg-red': name == 'wanikani'
                      ? 'bg-pur':
                       'bg-accent'}  flex-col mx-2 relative transition-all duration-1000 [transform-style:preserve-3d]`}
                    style={{ transform: flipped[index] ? 'rotateY(180deg)' : 'none' }}>
                    <div className={`${flipped[index] ? 'hidden' : ''} ${kanji.char.length == 3 ? '-mt-5' : kanji.char.length == 4 ? '-mt-5' : kanji.char.length >= 5 ? '' : '-mt-5'}`}>
                      <span className={` ${kanji.char.length == 3 ? 'text-[120px]' : kanji.char.length == 4 ? 'text-[120px] ' : kanji.char.length >= 5 ? 'text-[110px] pt-4' : 'text-[120px] -mt-9'}   text-white `}>{kanji.char}</span>
                      <div className={`${flipped[index] ? 'hidden' : 'absolute'}  flex  bottom-3 right-2`}>
                        <div className="flex flex-col">
                          <div className=" text-white text-[42px] font-bold flex flex-row items-center ">
                            <div id='button'
                              ref={cardRef}
                              onClick={() => flipCard(index)}
                              className={`
                                ${name == 'testSet'
                                  ? 'bg-white'
                                  : name == 'radicals'
                                    ? 'bg-white'
                                    : name == 'genki'
                                      ? 'bg-white'
                                      : name == 'mina'
                                        ? 'bg-white'
                                        : name == 'wanikani'
                                          ? 'bg-white'
                                          : 'bg-white'}
                               w-8 h-8 bg-opacity-10  mr-1 items-center flex justify-center rounded-full cursor-pointer`}>
                              <div className={`
                                 ${name == 'testSet'
                                  ? 'bg-white'
                                  : name == 'radicals'
                                    ? 'bg-white'
                                    : name == 'genki'
                                      ? 'bg-white'
                                      : name == 'mina'
                                        ? 'bg-white'
                                        : name == 'wanikani'
                                          ? 'bg-white'
                                          : 'bg-white'}
                                 w-5 h-5 rounded-full
                                 `} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* // Card face 2 */}
                    <div className={` ${flipped[index] ? '' : 'hidden'} inset-0 rounded-3xl ${name === 'testSet'
                                              ? 'bg-accent'
                                              : name === 'radicals'
                                              ? 'bg-macaw'
                                              : name === 'genki'
                                              ? 'bg-orange'
                                              : name === 'mina'
                                              ? 'bg-red': name == 'wanikani'
                                              ? 'bg-pur':
                                               'bg-accent'}  [transform:rotateY(180deg)] [backface-visibility:hidden] w-full h-full pb-10`}>
                      <div className={`flex items-center justify-center flex-col  relative`}>
                        <span className={` ${kanji.char.length == 3 ? 'text-[120px]  ' : kanji.char.length == 4 ? 'text-[120px]  ' : kanji.char.length >= 5 ? 'text-[110px]  pt-4' : 'text-[120px]  -mt-9'} text-white `}>{kanji.char}</span>
                        <div className="flex flex-col justify-start w-full">
                          <span className={` ${kanji.meaning.length > 10 ? 'leading-none pb-2 text-[45px]' : 'leading-tight -mt-8 text-[50px]'} font-semibold text-white w-full px-10 capitalize`}>{kanji.meaning}</span>
                          <div className="flex flex-row w-full ">
                            <div className="flex justify-start items-start">
                              <span className="pl-10 text-white text-[18px]">
                                {kanji.kun}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* bottom */}
                      <div className="flex absolute bottom-3 right-2">
                        <div className="flex flex-col">
                          <div className=" flex flex-row items-center ">
                            <div
                              ref={cardRef}
                              onClick={() => flipCard(index)}
                              className={`
                                ${name == 'testSet'
                                  ? 'bg-white'
                                  : name == 'radicals'
                                    ? 'bg-white'
                                    : name == 'genki'
                                      ? 'bg-white'
                                      : name == 'mina'
                                        ? 'bg-white'
                                        : name == 'wanikani'
                                          ? 'bg-white'
                                          : 'bg-white'}
                               w-8 h-8 bg-opacity-10 mr-1 items-center flex justify-center rounded-full cursor-pointer `}>
                              <div className={`
                                 ${name == 'testSet'
                                  ? 'bg-white'
                                  : name == 'radicals'
                                    ? 'bg-white'
                                    : name == 'genki'
                                      ? 'bg-white'
                                      : name == 'mina'
                                        ? 'bg-white'
                                        : name == 'wanikani'
                                          ? 'bg-white'
                                          : 'bg-white'}
                                 w-5 h-5 rounded-full `} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  )
}

export default Learn
