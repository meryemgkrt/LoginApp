import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
const UseModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const schema = Yup.object().shape({
    terms: Yup.bool().oneOf([true], "Kullanıcı sözleşmesini kabul etmelisiniz"),
  });

  const formik = useFormik({
    initialValues: {
      terms: false,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="relative w-full flex flex-col">
      <label className="inline-flex items-center mt-3">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600"
          required
        />
        <span className="ml-2 text-gray-700">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-green-600 hover:text-green-900 "
          >
            Kullanıcı sözleşmesini kabul ediyorum.
          </button>
        </span>
      </label>

      {/* Modal */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Kullanıcı Sözleşmesi</h2>
            <p>Burada kullanıcı sözleşmesi metniniz yer alacak.</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Kabul Et
            </button>
          </div>
        </div>
      )}
      <Link
        to={"/register"}
        className="text-white w-full mt-4 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sing Up
      </Link>
    </div>
  );
};

export default UseModal;
