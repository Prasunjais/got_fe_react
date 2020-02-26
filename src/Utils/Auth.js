export const setDashboardAuthToken = token => {
    console.log("Setting token : ", token);
    return localStorage.setItem('dashToken', token);
}

export const setAuthToken = token => {
    console.log("Setting token : ", token);
    return localStorage.setItem('token', token);
}

export const getAuthToken = () => {
    return localStorage.getItem('token');
}

export const removeAuthToken = () => {
    localStorage.removeItem('token');
    return true;
}

export const setItem = (name, value) => {
    return localStorage.setItem(name, value);
}

export const getItem = (name) => {
    return localStorage.getItem(name);
}

export const removeItem = (name) => {
    localStorage.removeItem(name);
    return true;
}

export const logout = (next = false) => {
    removeAuthToken();
    removeItem('applicationId');
    window.location.href = "/";
    return true;
}