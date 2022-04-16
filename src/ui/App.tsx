import React, { useReducer } from 'react';
import './style/general.scss';
import AdvisorsList from "./components/AdvisorsList";
import AdvisorsControlPanel from "./components/AdvisorsControlPanel";
import { AdvisorsContext } from "../infrastructure/store/context/context";
import { AdvisorsContextReducer } from "../infrastructure/store/context/reducer";

function App() {
    const [state, dispatch] = useReducer(AdvisorsContextReducer, {
        advisors: [],
        filters: {},
        isLoading: false
    });

    return (
        <div className="container">
            <h1>Code Challenge!</h1>
            <AdvisorsContext.Provider value={{ state, dispatch }}>
                <AdvisorsControlPanel />
                <AdvisorsList/>
            </AdvisorsContext.Provider>
        </div>
    );
}

export default App;
