import {getIndexData} from '../api';
import {
    SAVE_INDEX_ALLDATA
} from './mutations_types';

export default {
    async getIndexDataAction({commit}){
        let result = await getIndexData();
        !!(result.code === 0) && commit(SAVE_INDEX_ALLDATA, result.data);
     }
}