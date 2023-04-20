import { model, Schema, models } from "mongoose";

interface IForm {
  subject: string;
  name: string;
  mail: string;
  message: string;
  file?: string;
  date: Date;
}

const FormSchema = new Schema<IForm>({
  subject: { type: String, required: true },
  name: { type: String, required: true },
  mail: { type: String, required: true },
  message: { type: String, required: true },
  file: { type: String },
  date: { type: Date, required: true },
});

export const Form = models.Form || model<IForm>("Form", FormSchema);
