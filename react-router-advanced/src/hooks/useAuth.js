const useAuth = () => {
    // Simulate authentication by checking for a token in localStorage
    const token = localStorage.getItem("authToken");
    return !!token; // Returns true if authenticated, false otherwise
};

export default useAuth;
