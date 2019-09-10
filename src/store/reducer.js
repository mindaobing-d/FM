/**
 * Created by apple on 2019/9/7.
 */

//定义reducer

var data = {
    collect_list:[]
};

function bookReducer(state = data,action = {})
{
    switch (action.type)
    {
        case 'COLLECT_ACTION':
            //先对数据进行深拷贝
            var newState = JSON.parse( JSON.stringify(state) );
            newState.collect_list.push(action.book);
            return newState;

        case 'CANCEL_COLLECT_ACTION':
            //先对数据进行深拷贝
            var newState = JSON.parse( JSON.stringify(state) );
            //找到需要删除的对象的索引
            var findIndex = newState.collect_list.findIndex((item)=>{
                return item.id == action.book.id
            });
            //从数组删除对象
            newState.collect_list.splice(findIndex,1);

            return newState;

        default :
            return state;
    }
}

export default  bookReducer;