import * as fs from "fs";
import * as path from "path";

interface Fixture {
    path: string;
    contents?: string;
}
export function fixture(name: string, relativePath: string): Fixture {
    const fixture = path.resolve(fixtureDir(name), relativePath);
    let contents: string;
    if (fs.existsSync(fixture)) {
        contents = fs.readFileSync(fixture, "utf8");
    } else {
        contents = `fixture file does not exist: ${fixture}`;
    }
    return {
        path: fixture,
        contents,
    };
}

export function fixtureDir(name: string) {
    return path.resolve(__dirname, "..", "..", "test", "fixtures", name);
}