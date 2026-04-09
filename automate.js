// run commands from terminal
const { execSync } = require("child_process");

// list of tests with their commands and emails
const tests = [
    {
        email: "kemalucler@gmail.com",
        command: "npx jest tests/kemal.test.js --runInBand --silent"
    },
    {
        email: "demi0067@algonquinlive.com",
        command: "node tests/ali.test.js"
    },
    {
        // Farha did not provide a URL, so it is a dummy command that will fail
        email: "farha@example.com",
        command: "npx jest tests/farha.test.js --runInBand --silent"
    }
];

// run each test one by one
for (const item of tests) {
    try {
        // execute test and capture output
        const output = execSync(item.command, {
            encoding: "utf8",
            stdio: "pipe"
        });

        // split output into lines
        const lines = output.split("\n");

        let printed = false;

        // check if test already printed result line
        for (const line of lines) {
            if (line.includes("@") && (line.includes("PASSED") || line.includes("FAILED"))) {
                console.log(line.trim());
                printed = true;
                break;
            }
        }

        // if no result line, assume test passed
        if (!printed) {
            console.log(`${item.email} - getAll to show all product - 200 - PASSED`);
        }

    } catch (error) {
        // get error output if test failed
        const output = (error.stdout || "") + (error.stderr || "");
        const lines = output.split("\n");

        let printed = false;

        // try to find result line in error output
        for (const line of lines) {
            if (line.includes("@") && (line.includes("PASSED") || line.includes("FAILED"))) {
                console.log(line.trim());
                printed = true;
                break;
            }
        }

        // if nothing found, print default fail message
        if (!printed) {
            console.log(`${item.email} - getAll to show all product - ERROR - FAILED`);
        }
    }
}