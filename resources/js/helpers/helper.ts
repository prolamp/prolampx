import {UserRoles} from "@/helpers/const";

const getSessionStorage = () => {
    if (typeof window === "undefined") return null;
    return window.sessionStorage;
};

export const IsAuthenticated = (): boolean => {
    const storage = getSessionStorage();
    if (!storage) return false;
    return !!storage.getItem("token");
};

export const getAuthToken = () => {
    const storage = getSessionStorage();
    return storage?.getItem("token") ?? null;
};

export const getCurrentUser = () => {
    if (!IsAuthenticated()) return null;

    const storage = getSessionStorage();
    const user = storage?.getItem("user");
    try {
        return user ? JSON.parse(user) : null;
    } catch (err) {
        console.log("error parsing user data", err);
        return null;
    }
};

export const getUserName = () => {
    if (IsAuthenticated()) {
        const user = getCurrentUser();
        if (user) {
            return user.name || null;
        }
    }
    return null;
};

export const getUserId = () => {
    if (IsAuthenticated()) {
        const user = getCurrentUser();
        if (user?.id) return user.id;
    }
};

export const getCurrentUserRole = () => {
    if (IsAuthenticated()) {
        const user = getCurrentUser();
        if (user?.role) return user.role;
    }
};

export const getCurrentUserAvatar = () => {
    if (IsAuthenticated()) {
        const user = getCurrentUser();
        if (user) return user.profileImage;
    }
};

export const isSuperAdmin = () => {
    if (IsAuthenticated()) {
        const user = getCurrentUser();
        if (user?.role === UserRoles.SUPER_ADMIN) return true;
    }
};

export const isAdmin = () => {
    if (IsAuthenticated()) {
        const user = getCurrentUser();
        if (user?.role === UserRoles.ADMIN) return true;
    }
};

export const isDev = () => {
    if (IsAuthenticated()) {
        const user = getCurrentUser();
        if (user?.role === UserRoles.DEVELOPER) return true;
    }
};

export const Logout = async () => {
    const storage = getSessionStorage();
    storage?.clear();
    return true;
};
