export function getBase64FromImage(imgElement: HTMLImageElement): string {
  let canvas = document.createElement("canvas");
  canvas.width = imgElement.naturalWidth;
  canvas.height = imgElement.naturalHeight;

  let ctx = canvas.getContext("2d");
  ctx!.drawImage(imgElement, 0, 0);

  let base64Image = canvas.toDataURL("image/png"); // Change the format if needed

  return base64Image;
}
