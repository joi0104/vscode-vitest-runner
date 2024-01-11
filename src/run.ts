import * as path from 'path';
import * as vscode from 'vscode';



export function runInTerminal(text: string, filename: string, options: { watch: boolean } = { watch: false }) {
    const filePath = path.dirname(filename);
    const fileName = path.basename(filename);

    const terminalName = `vitest - yarn runner`;
    const testTerminal = vscode.window.terminals.find(terminal => terminal.name === terminalName);
    const terminal = testTerminal ?? vscode.window.createTerminal(terminalName);

    const caseFileStr = JSON.stringify(filePath);
    const caseNameStr = JSON.stringify(text);

    const cdArgs = ['cd', caseFileStr];
    const cdCommand = cdArgs.join(' ');

    const testArgs = ['yarn', 'run', 'vitest', options.watch ? '--watch' : '',  './' + fileName, '-t', caseNameStr];
    const testCommand = testArgs.join(' ');

    const command = [cdCommand, testCommand].join(' && ');
    terminal.sendText(command, true);

    terminal.show();
}
