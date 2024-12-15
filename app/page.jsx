"use client";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

import { MdSpaceDashboard } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const name = useSelector((state) => state.sets.name);
  return (
    <main className="container">

      <div className="justify-center flex">
        <Photo />
      </div>

      <motion.div className="justify-center flex flex-col items-center py-5"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
        }}
      >
        <span className="text-eel text-[26px] relative w-full text-center font-bold">{`無料で楽しく、効果的に言語を学ぶ方法`} </span>
      </motion.div>


      <motion.div className="flex items-center justify-center w-full flex-col"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
        }}
      >
        <div className="flex justify-center w-full">
          <Link href='/flashcards' className="w-full relative">
            <Button size="lg" className={`
            ${name == 'testSet'
                            ? 'bg-accent3'
                            : name == 'radicals'
                            ? 'bg-macaw brightness-75' 
                            : name == 'genki'
                            ? 'bg-orange brightness-75'
                            : name == 'mina'
                            ? 'bg-red brightness-75' 
                            : name == 'wanikani'
                            ? 'bg-pur brightness-75'
                            : 'bg-accent3' }
            
            uppercase flex items-center gap-2 w-full `}>
              <span>
                
              </span>
            </Button>
            <Button size="lg" className={` 
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
                            : 'bg-accent' }
            uppercase flex items-center gap-2 w-full absolute inset-0 -mt-1`}>
              <span>
                Start learning
              </span>
            </Button>
          </Link>
        </div>
        <div className="flex justify-center w-full pt-4">
          <Link href='/sets' className="w-full relative">
            <Button variant='outline' size="lg" className="uppercase flex items-center gap-2 w-full bg-secondary">
            </Button>
            <Button variant='outline' size="lg" className="uppercase flex items-center gap-2 w-full absolute inset-0 -mt-1">
              <span>
                Explore Sets
              </span>
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div className="justify-center flex flex-col items-center pt-5"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
        }}
      >
        <span className="relative w-full text-center text-secondary ">
          タイプフェイスデザイン <span className={`${name == 'testSet'
                            ? 'text-accent/80'
                            : name == 'radicals'
                            ? 'text-macaw/80' 
                            : name == 'genki'
                            ? 'text-orange/80'
                            : name == 'mina'
                            ? 'text-red/80' 
                            : name == 'wanikani'
                            ? 'text-pur/80'
                            : 'text-accent/80' } absolute inset-1 ml-1  `}>タイプフェイスデザイン 
          <span className="absolute inset-1 ml-1 text-eel">タイプフェイスデザイン
            </span></span></span>
      </motion.div>
    </main>
  );
}
