"use cliet";

import { motion } from "framer-motion";
import Image from "next/image";

import { useDispatch, useSelector } from 'react-redux';

import React from 'react'

const Photo = () => {
    const name = useSelector((state) => state.sets.name);
    return (
        <div className="w-full h-full relative flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' }
                }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.9, duration: 0.4, ease: 'easeInOut' }
                    }}
                    className="w-[290px] h-[290px]  absolute ml-1 mt-1 rounded-full">
                    {/* <Image src="/images/duo1.jpg"
                        priority
                        quality={100}
                        width={500}
                        height={500}
                        alt=""
                        className="object-contain  rounded-full "
                    /> */}
                </motion.div>

                <motion.svg className="w-[300px] h-[300px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="252"
                        r="250"
                        stroke={name == 'testSet'? '#58cc02' : name == 'radicals'? '#1cb0f6' : name == 'genki'? '#ff5733' : name == 'mina'? '#C70039' : name == 'wanikani'? '#a100f1' :'#58cc02'}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                            rotate: [360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>



            </motion.div>
        </div>
    )
}

export default Photo