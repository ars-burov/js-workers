onmessage = (e) => {
    const arr = e.data;
    for (let i=0; i < arr.length; i++) {
        arr[i] = i % 1000000;
    }
    postMessage(arr, [arr.buffer]);
}