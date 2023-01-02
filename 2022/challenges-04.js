function fitsInOneBox(boxes) {
  boxes.sort((a, b) => a.l - b.l);

  let fits = true;

  [...new Array(boxes.length - 1).keys()].forEach((i) => {
    const { l: currentL, w: currentW, h: currentH } = boxes[i];
    const { l: nextL, w: nextW, h: nextH } = boxes[i + 1];

    if (currentL >= nextL || currentW >= nextW || currentH >= nextH) {
      fits = false;
    }
  });

  return fits;

  // for (let i = 0; i < boxes.length - 1; i++) {
  //   const {l: currentL, w: currentW, h: currentH} = boxes[i];
  //   const {l: nextL, w: nextW, h: nextH} = boxes[i+1];

  //   if (currentL >= nextL || currentW >= nextW || currentH >= nextH) {
  //     return false
  //   }
  // }

  // return true
}
