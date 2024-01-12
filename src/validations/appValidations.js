import { regExp } from "./appRegExp";

const validateField=(value,criteria, inputControlObj)=>{
    for (let i = 0; i < criteria.length; i++) {
        const { pattern, errorMessage } = regExp[criteria[i]]
        if (!pattern.test(value)) {
            inputControlObj.errorMessage = errorMessage;
            break;
        }
    }

}
export const handleFieldValidation = (eve, inputControls) => {

    const { name, value } = eve.target;
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    const inputControlObj = clonedInputControls.find((obj) => {
        return obj.model === name

    })
    inputControlObj.value = value
    inputControlObj.errorMessage = ""
    const criteria = inputControlObj.criteria

    validateField(value,criteria,inputControlObj)
    return clonedInputControls;
}

export const handleFormValidation = (inputControls) => {
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    const dataObj = {}
    clonedInputControls.forEach((inputControlObj) => {
        const { value, criteria, model } = inputControlObj
        dataObj [model] = value;
        validateField(value,criteria,inputControlObj)
       

    })
    const isFormInvalid = clonedInputControls.some((inputControlObj)=>{
        return inputControlObj?.errorMessage?.length>0
    })
    return [isFormInvalid, clonedInputControls, dataObj]

}