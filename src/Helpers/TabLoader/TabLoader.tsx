import React, { Component } from "react";

import './TabLoader.scss'

class TabLoader extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div className="Tab_loader_body">
                <div className="Tab_loader_content">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TabLoader;