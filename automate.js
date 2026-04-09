const { execSync } = require("child_process");

const tests = [
    {
        file: "tests/kemal.test.js",
        email: "kemalucler@gmail.com"
    },
    {
        file: "tests/ali.test.js",
        email: "ali@example.com"
    },
    {
        file: "tests/farha.test.js",
        email: "farha@example.com"
    }
];

for (const item of tests) {
    try {
        execSync(`npx jest ${item.file} --runInBand --silent`, {
            stdio: "pipe"
        });

        console.log(`${item.email} - getAll to show all product - 200 - PASSED`);
    } catch (error) {
        console.log(`${item.email} - getAll to show all product - 200 - FAILED`);
    }
}