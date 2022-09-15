import { IUserError } from "./iuser-error";

export class RegistrationErrors {

    EMAIL_EXISTS: IUserError;
    WEAK_PASSWORD: IUserError;
    WRONG_PASSWORD_CONFIRMATION: IUserError;
    EMAIL_REQUIRED: IUserError;
    PASSWORD_REQUIRED: IUserError;
    OTHER: IUserError;

    constructor () {

        this.EMAIL_EXISTS = {
            ocurred: false,
            message: "El email ingresado ya se encuentra registrado."
        };

        this.WEAK_PASSWORD = {
            ocurred: false,
            message: "La contraseña debe tener al menos seis (6) dígitos."
        };

        this.WRONG_PASSWORD_CONFIRMATION = {
            ocurred: false,
            message: "Las contraseñas ingresadas no coinciden."
        };

        this.EMAIL_REQUIRED = {
            ocurred: false,
            message: "Email requerido."
        };

        this.PASSWORD_REQUIRED = {
            ocurred: false,
            message: "Contraseña requerida."
        };

        this.OTHER = {
            ocurred: false,
            message: "Ha ocurrido un error."
        };

    }

    ClearErrors() {

        Object.entries(this).forEach(
            ([key, value]) => {
                value.ocurred = false;
            }
        );

    }

    HasError(): boolean {

        let hasError: boolean = false;

        Object.entries(this).forEach(
            ([key, value]) => {
                if (value.ocurred == true) {
                    hasError = true;
                }
            }
        );

        return hasError;

    }

}