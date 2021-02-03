import React, { createContext, useReducer } from "react";
import combineReducers from 'react-combine-reducers';

import { MaterialPropertyReducer } from "../reducers/MaterialPropertyReducer";
import { MetaDataReducer, defaultMetaData } from "../reducers/MetaDataReducer";
import { TextureTypes } from "../TestData/DefaultData";

export const TexturePorpertyContext = createContext();

export const TexturePoropertyProvider = (props) => {
    const [globalStateReducer, initialGlobalState] = combineReducers({
        MetaData: [MetaDataReducer, defaultMetaData],
        MaterialPorperties: [MaterialPropertyReducer, []]
    });
    const [globalState, dispatch] = useReducer(globalStateReducer, initialGlobalState);

    return (
        <TexturePorpertyContext.Provider value={{ globalState, dispatch }}>
            {props.children}
        </TexturePorpertyContext.Provider>
    );
}
