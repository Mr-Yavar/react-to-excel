import { getBase64FromImage } from "./getBase64FromImage";

export function AddImage(
  workbook: any,
  sheet: any,
  CellNumber: number,
  RowNumber: number,
  img: HTMLImageElement,
  imgIndex: number
) {
  const imageId = workbook.addImage({
    base64: getBase64FromImage(img),
    extension: "jpeg",
  });

  sheet.addImage(imageId, {
    tl: {
      col: CellNumber + imgIndex - 1,
      row: RowNumber - 1,
    },
    ext: { width: img.width, height: img.height },
  });
}
