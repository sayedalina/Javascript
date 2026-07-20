let rows = 4;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    let ch = String.fromCharCode(64 + i);

    for (let j = 1; j <= i; j++) {
        pattern += ch + " ";
    }

    console.log(pattern);
}