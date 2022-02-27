import {  Fragment } from "react";
import Layout from "../components/Layout";
import { AppProps } from "next/dist/shared/lib/router/router";

import NaviBar from '../components/Navibar';
import Head from "next/head";

export default function App({Component,pageProps}:AppProps){
    return (
            <Layout>
                <Component {...pageProps}/>
            </Layout>
    )
}