import imageCompression from 'browser-image-compression'

export const fileNameCompressor = (str: string, limit: number) => {
  let fileName = str
  const arr = str.split('.')
  const name = arr[0]
  const ext = arr[arr.length - 1]

  if (name.length > limit) {
    fileName = name.substring(0, limit).trim() + '... .' + ext
  }
  return fileName
}

export const imageUploadHandler = async (
  e: any,
  type: string,
  setUploadData: any,
  uploadData: any
) => {
  const inputFile = e.target.files[0]
  const _inputFile = inputFile.type.split('/')
  const inputFileType = _inputFile[0]
  const inputFileExec = _inputFile[1]
  const inputFileName = fileNameCompressor(inputFile.name, 20)

  const fileSize = inputFile.size / (1024 * 1024)

  const acceptedImageFormats = ['png', 'jpg', 'jpeg', 'gif']
  const acceptedVideoFormats = ['mp4', 'mkv', '3gp', 'avi', 'webm']

  switch (type) {
    case 'video':
      if (
        !acceptedVideoFormats.some((format) => format.includes(inputFileExec))
      ) {
        // swal("🔴 Please select video format of mp4 , mkv , av ");
        e.target.value = ''
        return
      }
      if (fileSize > 10) {
        // swal("🔴 Please select a video less than 10MB file size");
        e.target.value = ''
        return
      }
      break
    case 'image':
      if (
        !acceptedImageFormats.some((format) => format.includes(inputFileExec))
      ) {
        // swal("🔴 Please select image format of png , jpg , jpeg , gif ");
        e.target.value = ''
        return
      }
      if (fileSize > 2) {
        // swal("🔴 Please select an image less than 2MB file size");
        e.target.value = ''
        return
      }
      break
    default:
      // swal("😮 OOPS...!!! Invalid file format");
      e.target.value = ''
      return
  }

  let compressedInputFile = inputFile
  if (inputFileType === 'image') {
    //compression algorithm
    const compressionOptions = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }

    try {
      compressedInputFile = await imageCompression(
        inputFile,
        compressionOptions
      )
    } catch (error) {
      alert(error)
    }
  }

  let inputFileDataBase64
  const file = new FileReader()
  if (compressedInputFile) {
    file.onloadend = (fileLoadedEvent: any) => {
      inputFileDataBase64 = fileLoadedEvent.target.result
      setUploadData({
        ...uploadData,
        file: {
          type: inputFileType,
          name: inputFileName,
          data: inputFileDataBase64
        }
      })
    }
    file.readAsDataURL(compressedInputFile)
  }

  // clear the file input event value
  e.target.value = ''
}
