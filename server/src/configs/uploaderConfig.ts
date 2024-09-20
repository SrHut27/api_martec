import multer from "multer";
import { dataDir } from "../handlers/filesDirectory";

const storage = multer.diskStorage({
    destination: (req, file, cb)  => {
        cb(null, dataDir)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

export const upload = multer({ storage: storage });