import { registerData } from "./registerData";
import { useFormik } from "formik";
import { schema } from "./reigisterSchema";
import UseModal from "./UseModal";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      other: "",
      idNumber: "",
      birthDate: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      terms: false,
    },

    validationSchema: schema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center bg-gray-50  vh-120 h-screen">
      <div className="bg-white p-4 rounded w-[450px] my-6 mx-10">
        <h2 className="text-center text-xl font-bold text-gray-900">
          <strong>Register</strong>
        </h2>
        <form className="space-y-4 mt-6" onSubmit={formik.handleSubmit}>
          {registerData.map((input) => (
            <div key={input.id} className="relative w-full flex flex-col">
              <div className="relative">
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[input.id]}
                  className={`shadow appearance-none items-center border rounded w-full py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched[input.id] && formik.errors[input.id]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {input.icon && (
                  <span className="input-icon absolute inset-y-0 right-0 flex items-center pr-3">
                    <input.icon className="w-5 h-5 text-gray-500" />
                  </span>
                )}
              </div>
              {formik.touched[input.id] && formik.errors[input.id] && (
                <p className="text-red-500 text-xs italic mt-1">
                  {formik.errors[input.id]}
                </p>
              )}
            </div>
          ))}
          <UseModal />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
