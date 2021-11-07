export const patientState={
    patients: []
}

export const patientReduser=(state, action)=>{
    switch(action.type){
        case 'ADD-PATIANT':
           const newPstients={ 
            id: action.id,
            name: action.name
        }
        const allPatients=[...state.patients, newPstients]
            return {patients: allPatients};
            case 'REMOVE-PATIANT':
                return state;    
            default :
            return state;
    }
}