import myAxios from './myAxios';

//获取主页推荐对应的数据
export const getIndexData = ()=> myAxios({
    method: 'GET',
    url: '/getIndex'
});


