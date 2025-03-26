import instance from "../../config/axios"

export const sign_in_google = async () => {
    try {
        const res = await instance.get('/auth/google');
        return res
    } catch (error) {
        return error
    }
}