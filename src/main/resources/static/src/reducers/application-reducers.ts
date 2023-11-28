import { elementGettingCreated } from 'ag-grid-community/dist/lib/widgets/component';
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

        case AppAction.SET_MAIN_GRID_TI_AND_INV:
            const stores = state.stores;
            const tiAndInv = action.payload;
            tiAndInv.forEach(element => {
                const index = stores.findIndex(obj => obj.ccNumber == element.ccNumber);
                stores[index].ti = element.ti;
                stores[index].commInv = element.commInv;
                element.skus.forEach(sku => {
                    const skuIndex = stores[index].skus.findIndex(obj => obj.skuId == sku.skuId);
                    stores[index].skus[skuIndex].ti = sku.ti;
                    stores[index].skus[skuIndex].commInv = sku.commInv;
                });

            });

            return {
                ...state,
                tiAndCommInv: action.payload
            }
        default:
            return state;
    }

}

