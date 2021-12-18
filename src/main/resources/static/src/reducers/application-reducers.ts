import { createContext } from 'react';
import { AppAction, TAppActions } from '../actions/application-actions';
import { FSA, IAppState, Store } from '../context/application-context';


export const appStateReducer = (
    state: IAppState,
    action: TAppActions,
): IAppState => {

    switch (action.type) {

        case AppAction.SET_MAIN_GRID:
            return {
                ...state,
                stores: action.payload
            }
        default:
            return state;
    }

}

