'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

import { testSet, radicals, mina} from "../constants/constants";
import { minaN5, minaN5Burned } from "../constants/kanji";

import { useDispatch, useSelector } from 'react-redux';
import { setName, setSet } from "../redux/setReducer";

import { grammar } from "../constants/learn";

const Sets = () => {
  const dispatch = useDispatch();
  const set = useSelector((state) => state.sets.set);
  const name = useSelector((state) => state.sets.name);
  const [show, setShow] = useState(false)
  const [kanji, setKanji] = useState(set)

  const handleChangeSet = (set) => {
    dispatch(setName(set))
    if (set == 'testSet') {
      setKanji(testSet)
      dispatch(setSet(testSet))
    
    }
    if (set == 'radicals') {
      setKanji(radicals)
      dispatch(setSet(radicals))
    }
    if (set == 'mina') {
      setKanji(minaN5Burned)
      dispatch(setSet(minaN5Burned))

    }
    if (set == 'genki'){
      setKanji(minaN5)
      dispatch(setSet(minaN5))
    }
  }


  const GrammarGrid = () => {
    // We store a checked state for each item using its index
    const [checkedStates, setCheckedStates] = useState(
      Array(grammar.length).fill(false)
    );
  
    const handleCheckboxChange = (index) => {
      const newStates = [...checkedStates];
      newStates[index] = !newStates[index];
      setCheckedStates(newStates);
    };
  
    return (
      <div className="grid grid-cols-3 gap-6">
        {grammar.map((item, index) => (


        <div className="flex  w-full justify-center relative mb-5 gap-5"
        
        style={{
          transition: 'transform 0.5s ease-in-out',
          transform: !show ? 'translateY(0%)' : 'translateY(100%)',
          // Adjust -100% as needed
        }}
        >
        <Button  
        className={`
          ${checkedStates[index] ? (
                name === 'testSet'
                  ? 'bg-accent'
                  : name === 'radicals'
                    ? 'bg-macaw'
                    : name === 'genki'
                      ? 'bg-orange'
                      : name === 'mina'
                        ? 'bg-red'
                        : name === 'wanikani'
                          ? 'bg-pur '
                          : 'bg-accent '
              ) + ' brightness-75' : 'bg-secondary'} transition duration-700 ease-in-out opacity uppercase flex items-center gap-2 w-full h-[100px]`}>

        </Button>
        <Button onClick={() => handleCheckboxChange(index)} className={`
          ${checkedStates[index] ? (
                  name === 'testSet'
                    ? 'bg-accent'
                    : name === 'radicals'
                      ? 'bg-macaw'
                      : name === 'genki'
                        ? 'bg-orange'
                        : name === 'mina'
                          ? 'bg-red'
                          : name === 'wanikani'
                            ? 'bg-pur'
                            : 'bg-accent'
                ) + ' text-white -mt-1' : ' bg-bg border-2 text-macaw -mt-2'}
          
          
          h-[100px] transition duration-700 ease-in-out opacity  uppercase flex items-center w-full absolute inset-0  `}>
          <span className="text-wrap">
          <p className="">Lesson {item.lesson}:</p>
          <p className="">{item.name}</p>
          </span>
        </Button>
        </div>

        ))}
      </div>
    );
  };


  return (
    <motion.div className="container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
      }}
    >
      <div className=" flex justify-center text-[22px] text-eel font-bold pb-10">
        Sets
      </div>

      <div className="flex w-full flex-row gap-2">
        {/* set one */}

        <div className="flex  w-full justify-center relative mb-5"
          style={{
            transition: 'transform 0.5s ease-in-out',
            transform: !show ? 'translateY(0%)' : 'translateY(100%)',
            // Adjust -100% as needed
          }}
        >
          <Button size="lg" className={`${name == 'genki' ? 'bg-orange  brightness-75' : 'bg-secondary'} transition duration-700 ease-in-out opacity uppercase flex items-center gap-2 w-full `}></Button>
          <Button onClick={() => handleChangeSet('genki')} size="lg" className={`${name == 'genki' ? 'bg-orange -mt-1' : 'bg-bg border-2 text-macaw -mt-3'} transition duration-700 ease-in-out opacity  uppercase flex items-center gap-2 w-full absolute inset-0 `}>
            <span>
            みんなの日本語N5
            </span>
          </Button>
        </div>
        
        <div className="flex  w-full justify-center relative mb-5"
          style={{
            transition: 'transform 0.5s ease-in-out',
            transform: !show ? 'translateY(0%)' : 'translateY(100%)', // Adjust -100% as needed
          }}
        >
          <Button size="lg" className={`${name == 'mina' ? 'bg-red  brightness-75' : 'bg-secondary'} transition duration-700 ease-in-out opacity uppercase flex items-center gap-2 w-full `}></Button>
          <Button onClick={() => handleChangeSet('mina')} size="lg" className={`${name == 'mina' ? 'bg-red -mt-1' : 'bg-bg border-2 text-macaw -mt-3'} transition duration-700 ease-in-out opacity  uppercase flex items-center gap-2 w-full absolute inset-0 `}>
            <span>
              みんなの日本語N5 Burned
            </span>
          </Button>
        </div>
      </div>
      <div className="w-full border-2 border-secondary">
      </div>
      <div className="w-full flex justify-center py-5">

          
      <label class="inline-flex items-center cursor-pointer">
        <span class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">Kanji</span>
        <input type="checkbox" value="" class="sr-only peer"/>
        <div class="relative
        w-36 h-11 bg-gray-200 border-b-8 border-gray-300 after:mt-1
          rounded-full peer peer-checked:after:translate-x-28 
           peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px]
          after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-7 after:w-7 after:transition-all peer-checked:border-b-8 peer-checked:border-macaw/70 
    
            peer-checked:bg-macaw ">
              {/* <div className="absolute ">
                <div className="h-14 w-40 bg-secondary rounded-full">

                </div>

              </div> */}
            </div>
          
        <span class="mx-3 text-sm font-medium text-gray-900 dark:text-gray-300">Grammar</span>
      </label>

      </div>
      <div className="w-full border-2 border-secondary">
      </div>

      <div className="flex w-full py-10">
      <div
      
      className={` w-full`}>
        <GrammarGrid />
      </div>


      </div>







    </motion.div>
  )
}

export default Sets