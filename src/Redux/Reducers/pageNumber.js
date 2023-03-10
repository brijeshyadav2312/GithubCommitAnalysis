const N = 0;

function pageNumber(num = N, action){
    switch(action.type){
        case "PAGE_NUMBER_COUNT":
            return num=action.data;
        default:
            return num;
    }
}

export default pageNumber;