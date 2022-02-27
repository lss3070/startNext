import {Fragment} from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NaviBar(){
    const router =useRouter();
    return(
        <nav >
            <img src="/vercel.svg"/>
            <Link href="/">
                <a>Home</a>
                </Link>
            <Link href="/about">
                <a >about</a>
                </Link>
                <style jsx global>{
                    `
                    a{
                        color:white;
                    }`
                }
                </style>
        </nav>
    )
}