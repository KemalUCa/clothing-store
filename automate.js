// import child process to run commands
const { execSync } = require("child_process");

// run one test file with label
function runTest(name, filePath) {
    try {
        console.log(`\nRunning ${name} test...\n`);

        // execute jest for the given test file
        execSync(`npx jest ${filePath} --runInBand --silent`, { stdio: "inherit" });

        console.log(`\n${name} test completed successfully.\n`);
    } catch (error) {
        console.log(`\n${name} test failed.\n`);
    }
}

// run tests sequentially
runTest("Kemal", "tests/kemal.test.js");
runTest("Farha", "tests/farha.test.js");
runTest("Ali", "tests/ali.test.js");