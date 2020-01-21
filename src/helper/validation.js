import * as Yup from "yup";
const nameRegex = /^[a-zA-Z]+$/;
export const validation = Yup.object().shape({
  username: Yup.string()
    .min(6, " username باید حداقل ۶ کاراکتر باشد")
    .required("اجباری"),
  name: Yup.string()
    .required("اجباری")
    .matches(nameRegex, "اسم نادرست هست"),
  email: Yup.string()
    .email("Email isn't valid")
    .required("اجباری"),
  role: Yup.string().required("اجباری"),
  id: Yup.number().required("اجباری"),
  mobile: Yup.number().min(11),
  local: Yup.boolean(),
  registerDate: Yup.string()
});
