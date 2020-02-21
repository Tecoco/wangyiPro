import {getIndexData, getSearchData, getCateListData} from '../api';
import {
    SAVE_INDEX_ALLDATA,
    SAVE_SEARCH_DATA,
    SAVE_CATE_LIST,
} from './mutations_types';

export default {
    //获取首页的所有相关数据
    async getIndexDataAction({commit}){
        let result = await getIndexData();
        !!(result.code === 0) && commit(SAVE_INDEX_ALLDATA, result.data);
    },
    //获取搜索的数据
    async getSearchDataAction({commit}){
        let result = await getSearchData();
        commit(SAVE_SEARCH_DATA, result.data);
    },
    //获取分类右侧内容数据
    async getCateListDataAction({commit}, cateIndex){
        let result = await getCateListData(cateIndex);
        // console.log('aciton===', result.data);
        commit( SAVE_CATE_LIST, result.data);
    }
}