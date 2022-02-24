import { useState } from "react"
import NaviBar from '../components/Navibar';
import Seo from "../components/Seo";



export default function Home(){

    const[count,setCount]=useState<number>(0);

    return(
        <div>
            <Seo title="Home"/>
            <h1 className="active">Hello</h1>
        </div>
    )
}