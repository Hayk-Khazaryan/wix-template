import "./style.css";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import ButtonWrapper from "../../shared/button-wrapper";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from "../../shared/Map";

function ContactForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return null;
      case Status.FAILURE:
        return null;
      case Status.SUCCESS:
        return <MyMapComponent />;
    }
  };
  return (
    <div className="ContactForm">
      <p className="title">CONTACT</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("firstName")}
          required
          id="filled-required"
          label="First Name"
          defaultValue=""
          variant="filled"
        />
        <TextField
          {...register("lastName")}
          required
          id="filled-required"
          label="Last Name"
          defaultValue=""
          variant="filled"
        />
        <TextField
          {...register("email")}
          required
          id="filled-required"
          label="Email"
          defaultValue=""
          variant="filled"
        />
        <TextField
          {...register("subject")}
          required
          id="filled-required"
          label="Subject"
          defaultValue=""
          variant="filled"
        />
        <div className="input-submit">
          <TextField
            {...register("message")}
            className="text-filed"
            required
            id="filled-required"
            label="Message"
            defaultValue=""
            variant="filled"
          />
          <ButtonWrapper name="Submit" className="contact-submit" />
        </div>
        <Wrapper render={render} />
      </form>
    </div>
  );
}

export default ContactForm;
