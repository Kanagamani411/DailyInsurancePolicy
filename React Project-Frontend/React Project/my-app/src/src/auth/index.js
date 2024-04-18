export const isLoggedIn = () => {
    let accessToken = localStorage.getItem("accessToken");
    if(accessToken !=null) return true;
    else return false;
};

export const doLogin = (response,next) => {
    localStorage.setItem("accessToken", JSON.stringify(response.data.data.accessToken));
    next()
};

export const doLogout = (next) => {
    localStorage.removeItem("acessToken");
    next()
};

export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("accessToken")).user;
    }else{
        return undefined;
    }
};