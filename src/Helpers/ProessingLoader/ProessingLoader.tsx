import React, { Component } from "react";

import './ProessingLoader.scss'

class ProcessingLoader extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div className="loader_body">
                <div className="loader_content">
                    <div className="data">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    <div className="txt">Processing</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProcessingLoader;