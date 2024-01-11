export const regExp = {
    "Required": {
        pattern: /./,
        errorMessage:"Please Enter Value"
    },
    "Min5Chars": {
        pattern: /[a-zA-Z0-9]{5,}/,
        errorMessage:"Min 5 Chars Required"
    },
    "EmailFormat": {
        pattern: /^[a-zA-Z0]{1}[a-zA-Z0-9_]{0,}@[a-zA-Z]{4,}\.[a-zA-Z]{2,3}$/,
        errorMessage: "Enter Valid Email Id"
    }
}