const parseArgs = () => {
    const result = process.argv
    .flatMap((item, index) => item.startsWith('--')
        ? `${item.slice(2)}=${process.argv[index + 1]}`
        : null)
    .filter(item => item)
    .join(', ');

    console.log(result);
};

parseArgs();