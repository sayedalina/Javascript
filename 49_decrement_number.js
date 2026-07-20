let n = 4;

for (let i = n; i >= 1; i--) {
    let pattern = "";

    for (let j = i; j > i - n; j--) {
        pattern += j;
    }

    console.log(pattern);
}