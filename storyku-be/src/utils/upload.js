import multer from 'multer'
import fs from 'fs'
import path from 'path'

const upload = (folderName) => {
  return multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        const path = `${process.cwd()}/public/upload/${folderName}/`;
        fs.mkdirSync(path, { recursive: true })
        cb(null, path);
      },      
      filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
      }
    }),
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|JPG|webp|jpeg|JPEG|png|PNG|gif|GIF|jfif|JFIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(null, false);
      }
      cb(null, true);
    }
  })
}

export { upload }