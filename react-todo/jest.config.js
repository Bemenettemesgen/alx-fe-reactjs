module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    }
};
