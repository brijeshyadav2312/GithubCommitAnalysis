export function addData(data){
    return {
        type: "ADD_DATA",
        data: data
    }
}

export function pagenumberCount(data){
    return {
        type: "PAGE_NUMBER_COUNT",
        data: data
    }
}