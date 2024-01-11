import { regExp } from "./appRegExp";

export const handleFieldValidation=(eve,inputControls)=>{
   
    const{name,value}=eve.target;
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    const inputControlObj=clonedInputControls.find((obj)=>{
        return obj.model===name

    })
    inputControlObj.value=value
    inputControlObj.errorMessage=""
    const criteria = inputControlObj.criteria
    for (let i=0; i<criteria.length; i++){
        const {pattern, errorMessage} = regExp[criteria[i]]
        if(!pattern.test(value)){
            inputControlObj.errorMessage=errorMessage;  
        }
    }
    return clonedInputControls;

}

export const handleFormValidation=()=>{

}