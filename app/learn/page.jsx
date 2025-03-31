"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import React, { useState, useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setValue } from "../redux/counterReducer";

import { grammar } from "../constants/learn";


const Learn = () => {
  const name = useSelector((state) => state.sets.name);
  const isVisible = useSelector((state) => state.show.isVisible);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const handleCarouselItemHover = (index) => {
    dispatch(setValue(index + 1));
    setSelectedIndex(index);
  };

  const carouselRef = useRef(null);


  const [showText, setShowText] = useState(false);

  const handleCircleClick = () => {
    setShowText(!showText);
  };

  const goLast = () => {
    const lastIndex = grammar.length - 1;

  };




  return (
    <div className="pt-10 pb-5 ">

      <div className="w-full container">
        
        <div className={` ${isVisible == true ? '' : 'transparent'}  
        justify-start transition duration-700 ease-in-out opacity flex  container pr-9 pb-2
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <FaArrowRight onClick={()=>goLast()}  className='text-black cursor-pointer text-[32px]'/>
         
        </div>


      </div>
      <motion.div className=""
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
        }}
      >

        <Carousel className="w-full md:container" 
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        ref={carouselRef}
        >
        <CarouselContent >
  {grammar.map((grammarItem, index) => {
    return (
      <CarouselItem key={index} className='group' onMouseEnter={() => handleCarouselItemHover(index)}>
        {/* Card face 1 */}
        <div className={`items-center flex justify-center rounded-3xl bg-white border-8  flex-col mx-2 relative transition-all duration-1000 [transform-style:preserve-3d]
          ${name == 'testSet'
            ? 'border-accent'
            : name == 'radicals'
              ? 'border-macaw'
              : name == 'genki'
                ? 'border-orange'
                : name == 'mina'
                  ? 'border-red'
                  : name == 'wanikani'
                    ? 'border-pur'
                    : 'border-accent'}
          
          `}>
          <div className={`flex flex-col justify-center items-center w-full ${name == 'testSet'
                                  ? 'bg-accent'
                                  : name == 'radicals'
                                    ? 'bg-macaw'
                                    : name == 'genki'
                                      ? 'bg-orange'
                                      : name == 'mina'
                                        ? 'bg-red'
                                        : name == 'wanikani'
                                          ? 'bg-pur'
                                          : 'bg-accent'}`}>
            <span className={`text-white font-bold text-[40px]`}>{grammarItem.name}</span>
            <span className={`text-white font-medium text-[30px]`}>{grammarItem.ex}</span>
            
          </div>
          <div className={`w-full border-2 ${name == 'testSet'
                                  ? 'bg-accent'
                                  : name == 'radicals'
                                    ? 'bg-macaw'
                                    : name == 'genki'
                                      ? 'bg-orange'
                                      : name == 'mina'
                                        ? 'bg-red'
                                        : name == 'wanikani'
                                          ? 'bg-pur'
                                          : 'bg-accent'}`}>
          </div>          
          {/* Display the examples for the current grammar */}
          <div className=" justify-start items-start w-full pb-6">
            {grammarItem.examples.map((example, idx) => (
              <div key={idx} className="mb-4 mx-4 text-wrap max-w-full break-words">
                {example.explanation && <p className=" text-black text-[24px] font-bold">{example.explanation}</p>}
                <div className="flex flex-row justify-between">
                  <div className="flex items-start">
                    <p className={`${showText == true ? 'text-black' : 'text-white'}  text-[22px]  pl-6`}>{example.example}</p>
                  </div>
                </div>
                <p className="italic text-black mt-[-10px] pl-6 text-[22px]">{example.translation}</p>
                {example.note && <p className="text-black text-[20px]">{example.note}</p>}
              </div>
            ))}
          </div>


          <div className="absolute bottom-0 right-2">
            <span className="text-gray-400">
              Lesson: {grammarItem.lesson}
            </span>


          </div>
          <div className="absolute bottom-2 left-2">
          <div className="flex justify-center items-center" onClick={handleCircleClick}>
                    <div className={`
                                ${name == 'testSet'
                                  ? 'bg-accent'
                                  : name == 'radicals'
                                    ? 'bg-macaw'
                                    : name == 'genki'
                                      ? 'bg-orange'
                                      : name == 'mina'
                                        ? 'bg-red'
                                        : name == 'wanikani'
                                          ? 'bg-pur'
                                          : 'bg-accent'}
                               w-6 h-6 ${showText == true? 'bg-opacity-10': 'bg-opacity-30'}  items-center flex justify-center rounded-full cursor-pointer `}>

                            <div className={`
                                ${name == 'testSet'
                                  ? 'bg-accent'
                                  : name == 'radicals'
                                    ? 'bg-macaw'
                                    : name == 'genki'
                                      ? 'bg-orange'
                                      : name == 'mina'
                                        ? 'bg-red'
                                        : name == 'wanikani'
                                          ? 'bg-pur'
                                          : 'bg-accent'}
                               w-4 h-4 ${showText == true? 'bg-opacity-50': ''}  items-center flex justify-center rounded-full cursor-pointer `}>


                                
                               </div>

                               </div>
                  </div>


          </div>



        
        </div>
      </CarouselItem>
    );
  })}
</CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  )
}

export default Learn
