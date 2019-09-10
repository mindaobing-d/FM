/**
 * Created by apple on 2019/9/7.
 */
//定义action

function collect_action(book){
    return {
        type:"COLLECT_ACTION",
        book
    }
}

function cancel_collect_action(book){
    return {
        type:"CANCEL_COLLECT_ACTION",
        book
    }
}

export {
        collect_action,
        cancel_collect_action
    }

