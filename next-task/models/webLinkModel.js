import mongoose, { Schema } from 'mongoose'

const webSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Web = mongoose.models.Web || mongoose.model('Web', webSchema)

export default Web
