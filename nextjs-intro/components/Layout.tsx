import { ElementType, Fragment, FunctionComponent } from "react";
import NaviBar from "./Navibar";

interface ILayoutProps{
    children:any
}

export default function Layout({children}:ILayoutProps){
    return(
        <Fragment>
            <NaviBar/>
            <div>
                {children}
            </div>
        </Fragment>
    )
}