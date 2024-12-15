'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

import { testSet, radicals, mina} from "../constants/constants";
import { minaN5, minaN5Burned } from "../constants/kanji";

import { useDispatch, useSelector } from 'react-redux';
import { setName, setSet } from "../redux/setReducer";

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


  const numRows = 9;
  const numCols = 3;

  const gridItems = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {

      const [isChecked, setIsChecked] = useState(false);

      const handleChange = (event) => {
        setIsChecked(event.target.checked);
      };
      const boxNumber = i * numCols + j + 1;
      gridItems.push(
        <div
          key={`${i}-${j}`}
          className="border border-eel text-eel p-2 justify-center  text-center rounded-xl flex flex-row" // Tailwind classes
        >
              <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </label>
    </div>
          <span className="mx-2 font-medium">
            第{boxNumber}課
          </span>
          
        </div>
      );
    }
  }

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
          <Button onClick={() => handleChangeSet('genki')} size="lg" className={`${name == 'genki' ? 'bg-orange' : 'bg-bg border-2 text-macaw'} transition duration-700 ease-in-out opacity  uppercase flex items-center gap-2 w-full absolute inset-0 -mt-1`}>
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
          <Button onClick={() => handleChangeSet('mina')} size="lg" className={`${name == 'mina' ? 'bg-red' : 'bg-bg border-2 text-macaw'} transition duration-700 ease-in-out opacity  uppercase flex items-center gap-2 w-full absolute inset-0 -mt-1`}>
            <span>
              みんなの日本語N5 Burned
            </span>
          </Button>
        </div>
        <div className="flex  w-full justify-center relative mb-5 z-10"
          style={{
            transition: 'transform 0.5s ease-in-out',
            transform: !show ? 'translateY(0%)' : 'translateY(100%)', // Adjust -100% as needed
          }}
        >
          <Button size="lg" className={`${name == 'radicals' ? 'bg-macaw  brightness-75' : 'bg-secondary'} transition duration-700 ease-in-out opacity uppercase flex items-center gap-2 w-full `}></Button>
          <Button onClick={() => handleChangeSet('radicals')} size="lg" className={`${name == 'radicals' ? 'bg-macaw' : 'bg-bg border-2 text-macaw'} transition duration-700 ease-in-out opacity  uppercase flex items-center gap-2 w-full absolute inset-0 -mt-1`}>
            <span>
              Radicals
            </span>
          </Button>
        </div>


        {/* <div className="flex  w-full justify-center relative mb-5"
          style={{
            transition: 'transform 0.5s ease-in-out',
            transform: !show ? 'translateY(0%)' : 'translateY(100%)', // Adjust -100% as needed
          }}
        >
          <Button size="lg" className={`${name == 'wanikani' ? 'bg-pur  brightness-75' : 'bg-secondary'} transition duration-700 ease-in-out opacity uppercase flex items-center gap-2 w-full `}></Button>
          <Button onClick={() => handleChangeSet('wanikani')} size="lg" className={`${name == 'wanikani' ? 'bg-pur' : 'bg-bg border-2 text-macaw'} transition duration-700 ease-in-out opacity  uppercase flex items-center gap-2 w-full absolute inset-0 -mt-1`}>
            <span>
              wanikani
            </span>
          </Button>
        </div> */}
        {/* <div className="flex w-full justify-center relative my-5 z-10">
          <Button size="lg" className={`${name == 'testSet' ? 'bg-accent3' : 'bg-secondary'} transition duration-700 ease-in-out opacity uppercase flex items-center gap-2 w-full `}></Button>
          <Button onClick={() => handleChangeSet('testSet')} size="lg" className={`${name == 'testSet' ? '' : 'bg-bg border-2 text-macaw'} transition duration-700 ease-in-out opacity  uppercase flex items-center gap-2 w-full absolute inset-0 -mt-1`}>
            <span>
              Test set
            </span>
          </Button>
        </div> */}
      </div>

      <div className="flex w-full py-10">
      <div
      className={`grid grid-cols-3 grid-rows-9 gap-4 w-full`}>
        {gridItems}
      </div>


      </div>







    </motion.div>
  )
}

export default Sets