export const authProvider = {
    login: async ({ username, role }) => {
        if (username && role) {
            localStorage.setItem("user", JSON.stringify({ username, role }));
            return Promise.resolve();
        }
        return Promise.reject(new Error("Invalid username or role"));
    },

    logout: async () => {
        localStorage.removeItem("user");
        return Promise.resolve();
    },

    check: async () => {
        return localStorage.getItem("user") ? Promise.resolve() : Promise.reject();
    },
    
    getPermissions: async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
        return Promise.resolve(user.role);
    },
    
    getIdentity: async () => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        return Promise.resolve(user);
    }
};
