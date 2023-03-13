import { bucket } from "../config/firebase"
import { v4 as uuidv4 } from "uuid"

export async function uploadImageToStorage(
  file: Express.Multer.File
) {
  const tokenId = uuidv4()

  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No image file")
    }
    let fileUpload = bucket.file(file.originalname)

    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
        metadata: {
          firebaseStorageDownloadTokens: tokenId,
        },
      },
    })

    blobStream.on("error", (error: any) => {
      reject(error)
    })

    blobStream.on("finish", async () => {
      await fileUpload.makePublic()
      const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${file.originalname}?alt=media&token=${tokenId}`

      resolve(url)
    })

    blobStream.end(file.buffer)
  })
}
export async function deleteFileFromStorage(fileName: string) {
  const file = bucket.file(fileName)
  await file.delete()
}
