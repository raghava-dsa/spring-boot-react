import { createContext } from 'react';
import { FSA, Store } from '../context/application-context';


/** Status Header Actions */
export enum AppAction {
    SHOW_LOADING= 'SHOW_LOADING',
    SET_MAIN_GRID = 'SET_MAIN_GRID',
    SET_MAIN_GRID_TI_AND_INV = 'SET_MAIN_GRID_TI_AND_INV',
    UDPATE_GRID_FILTERED_SELECT_DAY_IN_ALL_ROWS = 'UDPATE_GRID_FILTERED_SELECT_DAY_IN_ALL_ROWS',
    UDPATE_GRID_CELL_IN_ROW = 'UDPATE_GRID_CELL_IN_ROW'
}

export interface ISetMainGrid extends FSA {
    type: string;
    payload: Store[];
}

export interface IHideMainGrid extends FSA {
    type: string;
}

export const  setMainGrid = (gridData: Store[]): ISetMainGrid => ({
    type: AppAction.SET_MAIN_GRID,
    payload: gridData
});

export const  setMainGridTIandInv = (gridData: Store[]): ISetMainGrid => ({
    type: AppAction.SET_MAIN_GRID_TI_AND_INV,
    payload: gridData
});


export type TAppActions = ISetMainGrid;