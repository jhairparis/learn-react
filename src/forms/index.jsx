/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const validateEmail = (email) => email === "test@jhairparis.com";

const FormField = ({ label, type, register, required, errors }) => (
  <div className="mb-3">
    <label className="fw-bold">{label}</label>
    <input
      type={type}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="form-control"
      {...register(label.toLowerCase(), { required })}
    />
    {errors[label.toLowerCase()] && (
      <div className="alert alert-danger mt-2" role="alert">
        {`${label} is required`}
      </div>
    )}
  </div>
);

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (validateEmail(data.email)) {
      Swal.fire({
        title: "Validation successful",
        text: "You can continue",
        icon: "success",
        confirmButtonText: "Continue",
      });
    } else {
      Swal.fire({
        title: "Validation failed",
        text: "You cannot continue",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Email"
          type="email"
          register={register}
          required={true}
          errors={errors}
        />
        <FormField
          label="Password"
          type="password"
          register={register}
          required={true}
          errors={errors}
        />
        <div className="d-flex flex-column mt-4">
          <button className="btn btn-primary">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
