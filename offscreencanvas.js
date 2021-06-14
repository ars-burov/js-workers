onmessage = function(evt) {
    const imgSize = 10000;

    const c = evt.data.canvas;
    const ctx = c.getContext("2d");
    const imgData = ctx.createImageData(imgSize, imgSize);

    const maxValue = imgSize ** 2;
    for (let i = 0; i < imgData.data.length; i+=4) {
        const value = (i / 4 % imgSize) * Math.floor(i / 4 / imgSize);
        const normValue = value * 255 / maxValue;
        imgData.data[i+0] = Math.sin(10 * normValue) * 255;
        imgData.data[i+1] = Math.cos(.1 * normValue) * 255;
        imgData.data[i+2] = 0;
        
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
}