import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setErrors(validateForm(form));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value.trim() });
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (
      Object.keys(errors).length === 0 &&
      form.name.length > 10 &&
      form.email.length > 10 &&
      form.comment.length > 4
    ) {
      setLoading(true);

      const data = new FormData(e.target);

      try {
        const res = await fetch("https://formspree.io/xyyalggr", {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) {
          throw {
            status: res.status || 500,
            statusText:
              res.statusText ||
              "Internal Several Error. Reload the website and try again",
          };
        } else {
          setResponse(false);
          setTimeout(() => {
            setLoading(false);
            setResponse(true);
          }, 1500);
        }
      } catch (err) {
        setLoading(false);
        setResponse(err);
      }
    } else return;
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
