const { execSync } = require("child_process");
const fs = require("fs");

const tests = [
    {
        file: "tests/kemal.test.js",
        email: "kemalucler@gmail.com",
        command: "npx jest tests/kemal.test.js --runInBand --silent"
    },
    {
        file: "tests/ali.test.js",
        email: "demi0067@algonquinlive.com",
        command: "node tests/ali.test.js"
    },
    {
        file: "tests/farha.test.js",
        email: "farha@example.com",
        command: "npx jest tests/farha.test.js --runInBand --silent"
    }
];

for (const item of tests) {
    if (!fs.existsSync(item.file)) {
        console.log(`${item.email} - getAll to show all product - ERROR - FAILED`);
        continue;
    }

    try {
        const output = execSync(item.command, {
            encoding: "utf8",
            stdio: "pipe"
        });

        const lines = output.split("\n");

        let customLineFound = false;

        for (const line of lines) {
            if (line.includes("@") && (line.includes("PASSED") || line.includes("FAILED"))) {
                console.log(line.trim());
                customLineFound = true;
                break;
            }
        }

        if (!customLineFound) {
            console.log(`${item.email} - getAll to show all product - 200 - PASSED`);
        }

    } catch (error) {
        const stdout = error.stdout ? error.stdout.toString() : "";
        const stderr = error.stderr ? error.stderr.toString() : "";
        const combinedOutput = `${stdout}\n${stderr}`;
        const lines = combinedOutput.split("\n");

        let customLineFound = false;

        for (const line of lines) {
            if (line.includes("@") && (line.includes("PASSED") || line.includes("FAILED"))) {
                console.log(line.trim());
                customLineFound = true;
                break;
            }
        }

        if (!customLineFound) {
            console.log(`${item.email} - getAll to show all product - ERROR - FAILED`);
        }
    }
}