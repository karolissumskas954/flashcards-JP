// rafce
'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Components
import Nav from "./Nav"
const Header = () => {
    return (
        <header className="py-8 text-accent1">
            <div className="container">
                <div className="">
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header