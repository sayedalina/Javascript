let n = 4;

for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = i; j < i + n; j++) {
        pattern += j;
    }

    console.log(pattern);
}