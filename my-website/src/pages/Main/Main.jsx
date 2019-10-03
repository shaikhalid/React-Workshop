import React from 'react';
import { NavbarTop } from "../../components/NavbarTop/NavbarTop.jsx";
import { PageContainer } from "../../components/PageContainer/PageContainer.jsx";

export const Main = (props) => 
    <React.Fragment>
    <NavbarTop />
        <PageContainer
            className="m-5"
            onpage={props.onpage}
            about={props.about}
            resume={props.resume} />
    </React.Fragment>
        
