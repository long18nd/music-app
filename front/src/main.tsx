import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { store } from "@/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider autoInsertSpaceInButton={false}>
                {/*<MessageDefinition />*/}
                <App />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
