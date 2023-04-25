import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

enum Subject {
  WEBSITE = "website",
  E_COMMERCE = "ecommerce",
  BLOG = "blog",
  WEB_DESIGN = "webdesign",
  BUSINESS_SOFTWARE = "business-software",
  PHONE_APP = "phone-app",
  OTHER = "other",
}

interface Form {
  subject: Subject;
  name: string;
  mail: string;
  message: string;
  file: FileList | null;
}

interface UploadForm extends Omit<Form, "file"> {
  file: string;
}

export const useContact = () => {
  const { register, handleSubmit, watch, formState } = useForm<Form>();
  const [errorSend, setErrorSend] = useState<string | null>(null);
  const file = watch("file", null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const readImage = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        if (!e?.target?.result) {
          reject(null);
        } else {
          resolve(e.target.result);
        }
      });
      reader.addEventListener("error", (e) => reject(e));
      reader.readAsDataURL(file);
    });

  const uploadFormData = (formData: UploadForm) =>
    new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_FORM_SERVER_URI}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: formData.subject,
          name: formData.name,
          mail: formData.mail,
          message: formData.message,
          file: formData.file,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            reject(res.status);
          }
          resolve(200);
        })
        .catch((e) => {
          reject(e);
        });
    });

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setErrorSend(null);
    const file = data.file?.[0];
    let image = null;

    if (file) {
      const fileType = file.type;
      const fileSize = file.size;

      if (
        fileType !== "image/jpeg" &&
        fileType !== "image/png" &&
        fileType !== "image/webp" &&
        fileType !== "image/gif"
      ) {
        setErrorSend("Załączono niedozwolony plik!");
        return;
      }

      if (Number((fileSize / 1024 / 1024).toFixed(2)) > 10) {
        setErrorSend(
          "Załączony plik jest za duży! Maksymalny rozmiar to 10 MB."
        );
        return;
      }

      try {
        image = await readImage(file);
      } catch (e) {
        // @ts-ignore
        setErrorSend(e);
      }
    }

    try {
      setLoading(true);

      await uploadFormData({
        subject: data.subject,
        name: data.name,
        mail: data.mail,
        message: data.message,
        file: image as string,
      });

      setIsSent(true);
    } catch (e) {
      setErrorSend(
        "Nie udało wysłać się formularza... Spróbuj ponownie później."
      );
    }

    setLoading(false);
  };

  return {
    handleSubmit: () => handleSubmit(onSubmit),
    register,
    file,
    isLoading,
    isSent,
    errorSend,
    errorState: formState.errors,
  };
};
