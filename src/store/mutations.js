import {
    SAVE_INDEX_ALLDATA
} from './mutations_types';

export default {
    [SAVE_INDEX_ALLDATA](state, indexAllData){
        const {
            focusList, 
            policyDescList, 
            indexCateModule, 
            kingKongModule, 
            categoryHotSellModule, 
            flashSaleModule, 
            newItemList, 
            sceneLightShoppingGuideModule
        } = indexAllData;
        //直接修改state中的状态数据
        state.focusList = focusList;
        state.policyDescList = policyDescList;
        state.indexCateModule = indexCateModule;
        state.kingKongList = kingKongModule.kingKongList;
        state.categoryList = categoryHotSellModule.categoryList.splice(2);
        state.flashSaleItemList = flashSaleModule.itemList;
        state.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule;
        state.newItemList = newItemList.splice(0, 6);
    }

}
