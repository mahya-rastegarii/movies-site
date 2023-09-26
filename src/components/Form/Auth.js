import * as Yup from 'yup'

export const Schema = Yup.object().shape({
    name : Yup.string()
    .min(3,'نام کاربری حداقل باید 3 کاراکتر باشد')
    .max(12, ' نام کاربری حداکثر باید 12 کاراکتر باشد')
    .required(' اسم را وارد نمایید'),
    phone :Yup.number()
    .required(' شماره تلفن را وارد نمایید'),   
     password: Yup.string()
    .min(8,'رمز عبور حداقل باید 8 کاراکتر باشد')
    .required(' رمز عبور را وارد نمایید'),
    confirmPassword : Yup.string()
    .oneOf([Yup.ref("password")],' رمز عبور وارد شده با این فیلد مطابقت ندارد')
})