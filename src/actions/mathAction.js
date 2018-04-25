export function addNumber(data){
    return{
        type:"ADD",
        payload:data
    }
}

export function subNumber(data){
    return{
        type:"SUB",
        payload:data
    }
}