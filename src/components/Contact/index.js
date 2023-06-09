import { useForm } from "@/hooks/useForm";
import styles from "./index.module.css";
import Alert from "../../../public/icons/alert.svg";
import Check from "../../../public/icons/check.svg";
import Loader from "../../../public/contact/loader.svg";
import Image from "next/image";

const initialForm = {
  name: "",
  email: "",
  comment: "",
};

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{10,30}$/,
  email:
    /^[a-z0-9]+(\.[_a-z0-9]+)*@+([a-z0-9-]{4,15})+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$/,
};

const Contact = ({ t }) => {
  const { title, inputs, textarea, alerts, submitBtn } = t;

  const validations = (form) => {
    let errors = {};

    if (!form.name.trim()) {
      errors.name = alerts.name.required;
    } else if (form.name.trim().length < 10) {
      errors.name = alerts.name.min;
    } else if (form.name.trim().length > 30) {
      errors.name = alerts.name.max;
    } else if (!expressions.name.test(form.name)) {
      errors.name = alerts.name.err;
    }

    if (!form.email.trim()) {
      errors.email = alerts.email.required;
    } else if (form.email.trim().length > 40) {
      errors.email = alerts.email.max;
    } else if (!expressions.email.test(form.email)) {
      errors.email = alerts.email.err;
    }

    if (!form.comment.trim()) {
      errors.comment = alerts.comment.required;
    } else if (form.comment.trim().length < 4) {
      errors.comment = alerts.comment.min;
    } else if (form.comment.trim().length > 255) {
      errors.comment = alerts.comment.max;
    }

    return errors;
  };

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validations);

  const handleValue = (e) => {
    let { name, value } = e.target;

    let modifiedValue;

    switch (name) {
      case "name":
        modifiedValue = value.replace(/\s+/g, " ");
        value = modifiedValue;
        handleChange(name, value);
        break;
      case "email":
        modifiedValue = value
          .replace(/\s+/g, "")
          .toLowerCase()
          .replace(/\@+/g, "@");
        value = modifiedValue;
        handleChange(name, value);
        break;
      case "comment":
        modifiedValue = value.replace(/\s+/g, " ");
        value = modifiedValue;
        handleChange(name, value);
        break;
    }
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className="animate">{title}</h2>
      {response === null && (
        <form className="animate" onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            {inputs.map((el, index) => (
              <div className={styles.inputContainer} key={index}>
                <label htmlFor={el.label.for}>{el.label.value}</label>
                <div className={styles.input}>
                  <input
                    type={el.input.type}
                    name={el.label.for}
                    id={el.label.for}
                    placeholder={el.input.placeholder}
                    autoComplete="off"
                    onChange={handleValue}
                    onBlur={handleBlur}
                    value={form[el.label.for]}
                  ></input>
                  <div className={styles.icon}>
                    {errors[el.label.for] && <Alert />}
                    {form[el.label.for] && !errors[el.label.for] && <Check />}
                  </div>
                </div>
                <div className={styles.alert}>
                  {errors[el.label.for] && <p>{errors[el.label.for]}</p>}
                </div>
              </div>
            ))}
            <div className={styles.inputContainer}>
              <label htmlFor={textarea.label.for}>{textarea.label.value}</label>
              <div className={styles.input}>
                <textarea
                  name={textarea.label.for}
                  id={textarea.label.for}
                  placeholder={textarea.input.placeholder}
                  onChange={handleValue}
                  onBlur={handleBlur}
                  value={form.comment}
                ></textarea>
              </div>
              <div className={styles.alert}>
                {errors.comment && <p>{errors.comment}</p>}
              </div>
            </div>
          </div>
          <button
            className={`${styles.submitBtn} ${
              Object.keys(errors).length === 0 &&
              form.name.length > 10 &&
              form.email.length > 10 &&
              form.comment.length > 4
                ? styles.ready
                : ""
            }`}
            type="submit"
            aria-label={submitBtn.arialLabel}
          >
            {submitBtn.value}
          </button>
        </form>
      )}
      {loading && (
        <div className={styles.loader}>
          <p>{t.loading}</p>
          <Loader arial-label={t.loading} />
        </div>
      )}
      {response === true && (
        <div className={styles.send}>
          <p>{t.response.true}</p>
          <Image
            src="/contact/animate-messenger.svg"
            alt={t.response.true}
            width={300}
            height={300}
          />
        </div>
      )}
      {response !== null && typeof response === "object" && (
        <div className={styles.error}>
          <p>{`Error ${response.status} - ${response.statusText}`}</p>
          <Image
            src="/contact/animate-fail.svg"
            alt={t.response.false}
            width={300}
            height={300}
          />
        </div>
      )}
    </section>
  );
};

export default Contact;
