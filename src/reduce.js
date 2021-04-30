const initialState ={
    count:0
}
const reduce= (state=initialState,action)=>{
    if(action.type==="add"){
        return {
            count:state.count+1
        }
    }

    if(action.type==="minus")
    {
        return{
            count:state.count-1
        }
    }
    if(action.type==="multiplay")
    {
        return {
            count:state.count*2
        }
    }
    if(action.type==="devide")
    {
        return {
            count:state.count/2
        }
    }
    return state
}
export default reduce;