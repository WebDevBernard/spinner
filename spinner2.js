const spinner = ['\\', '|', '/', '-', '\\', '|', '/', '-', '\\'];

let iterations = 0;
for (const i of spinner)
  setTimeout(() => {
    process.stdout.write(`\r${i}  `);
  }, iterations += 100);
