import { string, number, boolean, object } from 'yup';
const nameRegex = /^[a-zA-Z]+$/;
export const validation = object().shape({
  username: string()
    .min(6, ' username باید حداقل ۶ کاراکتر باشد')
    .required('اجباری'),
  name: string()
    .required('اجباری')
    .matches(nameRegex, 'اسم نادرست هست'),
  email: string()
    .email('.ایمیل درست نمی باشد')
    .required('اجباری'),
  role: string().required('اجباری'),
  id: number().required('اجباری'),
  mobile: number().min(11),
  local: boolean(),
  registerDate: string()
});
