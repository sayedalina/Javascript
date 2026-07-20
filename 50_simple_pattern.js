let n = 4;

for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= n; j++) {
        pattern += i + " ";
    }

    console.log(pattern);
}