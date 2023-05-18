function generateKey() {
    const input = document.getElementById("input").value;
    const length = input.length;

    let outkey = "";
    for (let i = 0; i < length; i++) {
        outkey += Math.floor(Math.random() * 10);
    }

    document.getElementById("key").value = outkey;
}

function Encrypt() {
    const text = document.getElementById("input").value;
    let key = document.getElementById("key").value;
    key = String(key);

    let encodedText = '';
    for (let i = 0; i < text.length; i++) {
        encodedText += String.fromCharCode(text.charCodeAt(i) + parseInt(key[i]));
    }

    document.getElementById("output").value = encodedText;
}

function Decrypt() {
    const text = document.getElementById("input").value;
    let key = document.getElementById("key").value;
    key = String(key);

    let encodedText = '';
    for (let i = 0; i < text.length; i++) {
        encodedText += String.fromCharCode(text.charCodeAt(i) - parseInt(key[i]));
    }

    document.getElementById("output").value = encodedText;
}
