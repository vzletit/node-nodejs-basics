const parseEnv = () => {
    const result = Object.entries(process.env)
    .reduce((acc, current) => {
        const [key, value] = current;
        return key.startsWith('RSS_')
        ? acc.concat(`${key}=${value}; `)
        : acc;    
    }, ``);

console.log(result);
};

parseEnv();