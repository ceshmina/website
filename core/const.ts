export const DEFAULT_LOCATION = 'Tokyo, Japan'
export const IMAGE_DEFAULT_PREFIX = 'medium'
export const IMAGE_THUMBNAIL_PREFIX = 'thumbnail'

type CameraMaster = { type: 'camera' | 'lens', name: string, exif: string }
export const CAMERA_MASTER: CameraMaster[] = [
  { type: 'camera', name: 'α7 III', exif: 'ILCE-7M3' },
  { type: 'camera', name: 'α7S', exif: 'ILCE-7S' },
  { type: 'camera', name: 'iPhone 12', exif: 'foodie' },
  { type: 'camera', name: 'iPhone 12', exif: 'iPhone 12' },
  { type: 'camera', name: 'iPhone 15 Pro', exif: 'iPhone 15 Pro' },
  { type: 'camera', name: 'LUMIX GF9', exif: 'DC-GF9' },
  { type: 'camera', name: 'PEN E-P7', exif: 'E-P7' },
  { type: 'camera', name: 'D5600', exif: 'NIKON D5600' },
  { type: 'lens', name: 'FE 24-105mm F4 G OSS', exif: 'FE 24-105mm F4 G OSS' },
  { type: 'lens', name: 'FE 70-300mm F4.5-5.6 G OSS', exif: 'FE 70-300mm F4.5-5.6 G OSS' },
  { type: 'lens', name: 'FE 24mm F2.8 G', exif: 'FE 24mm F2.8 G' },
  { type: 'lens', name: 'FE 40mm F2.5 G', exif: 'FE 40mm F2.5 G' },
  { type: 'lens', name: 'FE 90mm F2.8 Macro G OSS', exif: 'FE 90mm F2.8 Macro G OSS' },
  { type: 'lens', name: 'Vario-Tessar T* FE 16-35mm F4 ZA OSS', exif: 'FE 16-35mm F4 ZA OSS' },
  { type: 'lens', name: 'Sonnar T* FE 55mm F1.8 ZA', exif: 'FE 55mm F1.8 ZA' },
  { type: 'lens', name: 'CONTAX Planar T* 50mm F1.4 AE', exif: 'CONTAX Planar T* 50mm F1.4 AE' },
  { type: 'lens', name: 'LUMIX G 25mm F1.7 Asph.', exif: 'LUMIX G 25/F1.7' },
  { type: 'lens', name: 'LUMIX G Vario 12-32mm F3.5-5.6 Asph. Mega O.I.S.', exif: 'LUMIX G VARIO 12-32/F3.5-5.6' },
  { type: 'lens', name: 'M.ZUIKO DIGITAL ED 14-42mm F3.5-5.6 EZ', exif: 'OLYMPUS M.14-42mm F3.5-5.6 EZ' },
  { type: 'lens', name: 'M.ZUIKO DIGITAL ED 40-150mm F4-5.6 R', exif: 'OLYMPUS M.40-150mm F4.0-5.6 R' },
  { type: 'lens', name: 'AF-P DX NIKKOR 18-55mm F3.5-5.6G VR', exif: '18.0-55.0 mm f/3.5-5.6' },
  { type: 'lens', name: 'AF-P DX NIKKOR 70-300mm F4.5-6.3G ED VR', exif: '70.0-300.0 mm f/4.5-6.3' },
  { type: 'lens', name: 'AF-S DX NIKKOR 35mm F1.8G', exif: '35.0 mm f/1.8' },
  { type: 'lens', name: 'Utulens 32mm F16', exif: 'Utulens 32mm F16' }
]
