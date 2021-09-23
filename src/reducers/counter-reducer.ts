type mainActionType = incrementCounterACType
type incrementCounterACType = ReturnType<typeof incrementCounterAC>

const initialState:number = 0;

export const counterReducer = (state:number=initialState, action:mainActionType)=>{
    switch (action.type) {
        case "INCREMENT-COUNTER": {
            let newState = state+1
           return newState<=action.maxValue?newState:state
        }
    }
}

 export const incrementCounterAC = (maxValue:number) => {
   return {
       type: "INCREMENT-COUNTER",
       maxValue
       // counterValue,
   } as const
 }