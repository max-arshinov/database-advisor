import React from 'react';
import Databases from "./databases/Databases";
import {Provider} from "react-redux";
import store from "@/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">

                <Databases/>
            </div>
        </Provider>
    );
}

export default App;
