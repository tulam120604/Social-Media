import mongoose from "mongoose";

const schema_catalog_video = new mongoose.Schema(
  {
    nameCatalog :String,
    description : String
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Catalog_video', schema_catalog_video)