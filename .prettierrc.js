module.exports = {
    plugins: [require("prettier-plugin-go-template")],
    tabWidth: 4,
    overrides: [
        {
            files: ["*.html"],
            options: {
                parser: "go-template",
            },
        },
    ],
};
