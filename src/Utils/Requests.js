import {logout} from './Auth'

export const handleErrorResponse = (err, errorMessage="Unable to process the request") =>{
    if( typeof err.response === "undefined" ){
        return {errorMessage, errors : [], responseCode : 500}
        return false;
    }

    //Check if it is JWT authentication error
    if( typeof err.response !== "undefined" && err.response.status === 401 ){
        window.onbeforeunload = function () {
            return void (0)
        };

        logout();
        return false;
    }

    let errors = {};

    if( typeof err.response !== "undefined" ){

        //Check if this reponse has for error messages
        if( err.response.data.errors ){
            errors = { ...err.response.data.errors };
        }

        //If error message was available
        if( typeof err.response.data.message !== "undefined" ){
            errorMessage = err.response.data.message;
        }

        return { errorMessage, errors, responseCode : err.response.status }
    }

    return { errorMessage, errors : [], responseCode : 400 }
}