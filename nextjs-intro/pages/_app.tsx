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
                <Head>
                    <title>Home | Next Movie</title>
                </Head>
                <Component {...pageProps}/>
                <footer></footer>
            </Layout>
    )
}