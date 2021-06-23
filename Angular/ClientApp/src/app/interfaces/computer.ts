export interface Computer {
  id: number;
  ramId: number;
  ramDescription?: string;
  graphicsCardId: number;
  graphicsCardDescription?: string;
  hardDriveId: number;
  hardDriveDescription?: string;
  usbCounts: {
    usb2?: number;
    usb3?: number;
    usbC?: number;
  }
  psu: number;
  weightQuantity: number;
  weightUnitId: number;
  weightUnitDescription?: string;
  processorId: number;
  processorDescription: string;
}
