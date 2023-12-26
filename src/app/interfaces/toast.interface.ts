import { TypeAlert } from "../enum/type-alert";

export interface Toast {
    showStateToast: string,
    title?: string,
    message?: string,
    typeAlert?: TypeAlert,
    delay?: string
}
