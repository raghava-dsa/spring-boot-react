import { createContext } from 'react';


export interface Store {
    ccNumber: string;
    desc: string;
    ti: string;
    commInv: string;
    skus: Sku[];
}

export interface Sku {
    skuId: string;
    sizeProfile: string;
    ti: string;
    commInv: string;
}


export interface IAppState {
    stores: Store[];

}

const getInitialState = (): IAppState => {
    return {
        stores: []
    }
}


export type TDispatchCallback = (action: FSA) => void;

export interface FSA {
    type: string;
    payload?: any;
  }

export const initialState = getInitialState();

interface IAppContext {
    state: IAppState;
    dispatch: TDispatchCallback;
}

const appContext: IAppContext = {
    state: initialState,
    dispatch: (): void => {
        return;
    },
};

export const ApplicationContext = createContext<IAppContext>(appContext);
