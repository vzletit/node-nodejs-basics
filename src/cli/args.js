const parseArgs = () => {
    const result = process.argv
    .map((item, index) => item.startsWith('--')
        ? `${item.slice(2)} is ${process.argv[index + 1]}`
        : null)
    .filter(item => item)
    .join(', ');

    console.log(result);
};

parseArgs();