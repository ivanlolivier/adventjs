function executeCommands(commands) {
  const registers = new Array(8).fill(0);

  let commandIndex = 0;
  while (commandIndex < commands.length) {
    const command = commands[commandIndex];
    const [instruction, args] = command.split(" ");

    if (instruction === "MOV") {
      const [source, destiny] = args.split(",");
      const number = source.startsWith("V0")
        ? registers[source.at(-1)]
        : source;

      registers[destiny.at(-1)] = +number;
    }

    if (instruction === "ADD") {
      const [a, b] = args.split(",");

      const result = registers[a.at(-1)] + registers[b.at(-1)];

      registers[a.at(-1)] = result % 256;
    }

    if (instruction === "DEC") {
      const addr = args;

      const result = registers[addr.at(-1)] - 1;

      registers[addr.at(-1)] = result === -1 ? 255 : result;
    }

    if (instruction === "INC") {
      const addr = args;

      const result = registers[addr.at(-1)] + 1;

      registers[addr.at(-1)] = result % 256;
    }

    commandIndex =
      instruction === "JMP" && registers[0] !== 0 ? +args : commandIndex + 1;
  }

  return registers;
}
