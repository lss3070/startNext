import {Fragment} from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NaviBar(){
    const router =useRouter();
    console.log(router);
    return(
        <nav >
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