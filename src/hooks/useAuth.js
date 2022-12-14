

export const logOut = async () => {
    await window.localStorage.removeItem('userInfo');
}
export const useAuth = async () => {
    const user = await window.localStorage.getItem('userInfo');
    return user;
}
