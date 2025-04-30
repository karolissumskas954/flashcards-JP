"use client";

import { Button } from "./ui/button";
import { BsTranslate } from "react-icons/bs";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { useDispatch, useSelector} from 'react-redux';
import { toggleShow } from "@/app/redux/showReducer";

import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegLightbulb } from "react-icons/fa";
import { BsBrilliance } from "react-icons/bs";
import { TbCardsFilled } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { setName } from "@/app/redux/setReducer";
import { useState } from "react";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'flashcards',
        path: '/flashcards',
    },
    {
        name: 'learn',
        path: '/learn',
    },
    {
        name: 'sets',
        path: '/sets',
    },
]

const Nav = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const value = useSelector((state) => state.counter.value);
    const isVisible = useSelector((state) => state.show.isVisible);
    const handleShowClick = () => {
        dispatch(toggleShow());
    };

    const name = useSelector((state) => state.sets.name);
    const [tempName, setTempName] = useState(name)
    const set = useSelector((state) => state.sets.set);
    const setLength = set?.length || 0;
    // const setLength = set?.filter(item => item.include === 1).length || 0;
    const lrn = useSelector((state) => state.sets.learn);

    const handleChangeColor = () => {
        if (name == 'mina' || tempName == 'mina'){
            dispatch(setName('radicals'))
            setTempName('radicals')
        }
        if (name == 'radicals' || tempName == 'radicals'){
            dispatch(setName('testSet'))
            setTempName('testSet')
        }
        if (name == 'testSet' || tempName == 'testSet'){
            dispatch(setName('genki'))
            setTempName('genki')
        }
        if (name == 'genki' || tempName == 'genki'){
            dispatch(setName('wanikani'))
            setTempName('wanikani')
        }
        if (name == 'wanikani' || tempName == 'wanikani'){
            dispatch(setName('mina'))
            setTempName('mina')
        }
        
    }

    return (
        <div className="flex justify-between relative">
            <Sheet>
                <SheetTrigger className="flex justify-center items-center">
                    <HiMenuAlt2 className=" text-[32px] text-eel" />
                </SheetTrigger>
                <SheetContent side={"left"} className="flex flex-col rounded-r-2xl">
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>

                        </SheetDescription>
                    </SheetHeader>
                    <div className="flex text-[22px] pb-2 justify-center">
                        <div className="flex flex-row items-start justify-center ">
                            <div className=" flex justify-center items-center h-full">
                                {/* <div className="border rounded-xl p-1 shadow-xl border-bg">
                                    <GiRollingEnergy className="w-12 h-12 text-eel" />
                                </div> */}
                            </div>
                            <div className="flex flex-col justify-start items-start ">
                                <div 
                                onClick={() => handleChangeColor()}
                                className={`
                                    ${name == 'testSet'
                                        ? 'text-accent'
                                        : name == 'radicals'
                                        ? 'text-macaw' 
                                        : name == 'genki'
                                        ? 'text-orange'
                                        : name == 'mina'
                                        ? 'text-red' 
                                        : name == 'wanikani'
                                        ? 'text-pur'
                                        : 'text-accent' }
                                    pl-2 mt-1 text-accent text-[32px] font-bold cursor-cell transition duration-700 ease-in-out opacity`}>
                                    閃光カード
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="flex flex-col justify-center items-start gap-8 pt-8">
                        {links.map((link, index) => {
                            return (
                                <SheetClose asChild key={index}>
                                    <Link type="submit" href={link.path} key={index} className={`${link.path == pathname ? ( name === 'testSet'
                                              ? 'bg-accent text-white  border-b-4 border-accent3'
                                              : name === 'radicals'
                                              ? 'bg-macaw text-white  border-b-4 border-cyan-700'
                                              : name === 'genki'
                                              ? 'bg-orange text-white  border-b-4 border-amber-800'
                                              : name === 'mina'
                                              ? 'bg-red text-white  border-b-4 border-rose-900'
                                              : name == 'wanikani'
                                              ? 'bg-pur text-white  border-b-4 border-purple-800':
                                               'bg-accent text-white  border-b-4 border-accent3'   ) : 'border-2'} rounded-xl text-md capitalize text-eel transition-all w-full pl-2 py-2`}>
                                        {link.name == 'home' &&
                                            <div className="flex flex-row items-center">
                                                <BsBrilliance className="mx-2 w-5 h-5" />{link.name}
                                            </div>
                                        }
                                        {link.name == 'flashcards' &&
                                            <div className="flex flex-row items-center">
                                                <TbCardsFilled className="mx-2 w-6 h-6" />{link.name}
                                            </div>
                                        }
                                        {link.name == 'sets' &&
                                            <div className="flex flex-row items-center">
                                                <MdSpaceDashboard className="mx-2 w-6 h-6" />{link.name}
                                            </div>
                                        }
                                        {link.name == 'learn' &&
                                            <div className="flex flex-row items-center">
                                                <FaRegLightbulb  className="mx-2 w-6 h-6" />{link.name}
                                            </div>
                                        }
                                    </Link>
                                </SheetClose>
                            )
                        })}
                    </nav>
                    <div>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="flex items-center">
                {pathname === '/flashcards' ?
                    <div className="flex absolute -right-2">
                        <div className=" flex flex-col">
                            <div className=" text-eel text-[42px] font-bold flex flex-row items-center">
                                <div
                                    onClick={handleShowClick}
                                    className={` 
                                        ${isVisible == true ? (
                                            name === 'testSet'
                                              ? 'bg-accent'
                                              : name === 'radicals'
                                              ? 'bg-macaw'
                                              : name === 'genki'
                                              ? 'bg-orange'
                                              : name === 'mina'
                                              ? 'bg-red': name == 'wanikani'
                                              ? 'bg-pur':
                                               'bg-accent'
                                          ) : 'bg-eel'}
                                    mt-2 mr-1 w-6 h-6 bg-opacity-10 items-center flex justify-center rounded-full cursor-pointer transition duration-1000 ease-in-out opacity`}
                                >
                                    <div className={`
                                        ${isVisible == true ? (
                                            name === 'testSet'
                                              ? 'bg-accent'
                                              : name === 'radicals'
                                              ? 'bg-macaw'
                                              : name === 'genki'
                                              ? 'bg-orange'
                                              : name === 'mina'
                                              ? 'bg-red'
                                              : name == 'wanikani'
                                              ? 'bg-pur':
                                              'bg-accent'
                                          ) : 'bg-eel'}
                                        w-2 h-2 rounded-full transition duration-500 ease-in-out opacity`} />
                                </div>
                                <span className={`
                                    ${isVisible == true ? '' : 'text-transparent'}
                                    transition duration-700 ease-in-out opacity
                                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                                    `}>{value}</span>
                            </div>
                            <div className="flex items-center justify-end font-semibold -mt-5 text-platinum">
                                <span className={`
                                ${isVisible == true ? '' : 'text-transparent'}
                                transition duration-700 ease-in-out opacity
                                ${isVisible ? 'opacity-100' : 'opacity-0'}
                                `}>/{setLength}</span>
                            </div>
                        </div>
                    </div> : 
                    pathname === '/learn' ?
                    <div className="flex absolute -right-2">
                        <div className=" flex flex-col">
                            <div className=" text-eel text-[42px] font-bold flex flex-row items-center">
                                <div
                                    onClick={handleShowClick}
                                    className={` 
                                        ${isVisible == true ? (
                                            name === 'testSet'
                                              ? 'bg-accent'
                                              : name === 'radicals'
                                              ? 'bg-macaw'
                                              : name === 'genki'
                                              ? 'bg-orange'
                                              : name === 'mina'
                                              ? 'bg-red': name == 'wanikani'
                                              ? 'bg-pur':
                                               'bg-accent'
                                          ) : 'bg-eel'}
                                    mt-2 mr-1 w-6 h-6 bg-opacity-10 items-center flex justify-center rounded-full cursor-pointer transition duration-1000 ease-in-out opacity`}
                                >
                                    <div className={`
                                        ${isVisible == true ? (
                                            name === 'testSet'
                                              ? 'bg-accent'
                                              : name === 'radicals'
                                              ? 'bg-macaw'
                                              : name === 'genki'
                                              ? 'bg-orange'
                                              : name === 'mina'
                                              ? 'bg-red'
                                              : name == 'wanikani'
                                              ? 'bg-pur':
                                              'bg-accent'
                                          ) : 'bg-eel'}
                                        w-2 h-2 rounded-full transition duration-500 ease-in-out opacity`} />
                                </div>
                                <span className={`
                                    ${isVisible == true ? '' : 'text-transparent'}
                                    transition duration-700 ease-in-out opacity
                                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                                    `}>{value}</span>
                            </div>
                            {/* <div className="flex items-center justify-end font-semibold -mt-5 text-platinum">
                                <span className={`
                                ${isVisible == true ? '' : 'text-transparent'}
                                transition duration-700 ease-in-out opacity
                                ${isVisible ? 'opacity-100' : 'opacity-0'}
                                `}>/{lrn.lenght}</span>
                            </div> */}
                        </div>
                    </div> :
                    <BsTranslate
                    onClick={() => handleChangeColor()}
                    className={`
                        ${name == 'testSet'
                            ? 'text-accent'
                            : name == 'radicals'
                            ? 'text-macaw' 
                            : name == 'genki'
                            ? 'text-orange'
                            : name == 'mina'
                            ? 'text-red' 
                            : name == 'wanikani'
                            ? 'text-pur'
                            : 'text-accent' }
                            text-[32px] transition duration-700 ease-in-out opacity cursor-cell`} />
                }
            </div>
        </div>

    )
}

export default Nav