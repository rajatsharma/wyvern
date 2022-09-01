import { Command } from "commander";
import { promises as fs } from "fs";
import * as packageInfo from "../package.json";

const program = new Command();
program.name("Wyvern").version(packageInfo.version);

program
  .description("Run wasm files")
  .argument("<filepath>", "Path to wasm file")
  .argument("[function]", "Name of function to run, default: main")
  .option("-a, --args <args...>", "Args to pass into the function")
  .action(async (filepath: string, functionName = "main", { args }) => {
    const wasmBuffer = await fs.readFile(filepath);
    const wasmModule = await WebAssembly.instantiate(wasmBuffer);
    const wasmFunction = wasmModule.instance.exports[functionName] as (
      ...args: Array<string | number>
    ) => void;
    console.log(wasmFunction(...args));
  });

program.parse();
