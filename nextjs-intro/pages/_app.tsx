import {  Fragment } from "react";
import Layout from "../components/Layout";
import NaviBar from '../components/Navibar';

interface IApp{
    Component:Function
    pageProps:string
}
import Head from "next/head";


export default function App({Component,pageProps}:IApp){
    return (
            <Layout>
                <Component {...pageProps}/>
            </Layout>
    )
}