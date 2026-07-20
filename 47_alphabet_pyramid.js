let n = 4;

for (let i = 1; i <= n; i++) {
    let pattern = " ";

    for (let j = 1; j <= n - i; j++)
        pattern += " ";

    for (let j = 0; j < i; j++)
        pattern += String.fromCharCode(65 + j);

    for (let j = i - 2; j >= 0; j--)
        pattern += String.fromCharCode(65 + j);

    console.log(pattern);
}