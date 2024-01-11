import * as vscode from 'vscode';
import { runInTerminal } from './run';

export class RunVitestCommand implements vscode.Command {
    static ID = 'vitest.runTest';
    title = 'Run(Vitest)';
    command = RunVitestCommand.ID;
    arguments?: [string, string];

    constructor(text: string, filename: string) {
        this.arguments = [text, filename];
    }
}

vscode.commands.registerCommand(
    RunVitestCommand.ID,
    (text: string, filename: string) => {
        runInTerminal(text, filename);
    }
);



export class RunVitestWatchCommand implements vscode.Command {
    static ID = 'vitest.runTestWatch';
    title = 'Run:Watch(Vitest)';
    command = RunVitestWatchCommand.ID;
    arguments?: [string, string];

    constructor(text: string, filename: string) {
        this.arguments = [text, filename];
    }
}

vscode.commands.registerCommand(
    RunVitestWatchCommand.ID,
    (text: string, filename: string) => {
        runInTerminal(text, filename, { watch: true });
    }
);

