import { TypeAlert } from "src/app/enum/type-alert";

export interface Toast {
    showStateToast: string,
    title?: string,
    message?: string,
    typeAlert?: TypeAlert,
    delay?: string
}
