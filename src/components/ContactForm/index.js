import "./style.css"
import { useForm } from "react-hook-form"
import { TextField } from "@mui/material"
import ButtonWrapper from "../../shared/button-wrapper"
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import MyMapComponent from "../../shared/Map"
import data from "./data"

function ContactForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  })
  const onSubmit = (data) => console.log(data)
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return null
      case Status.FAILURE:
        return null
      case Status.SUCCESS:
        return <MyMapComponent />
    }
  }
  return (
    <div className="ContactForm">
      <p className="title">CONTACT</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="textFiled" >
          {
            data.map(item => (
              <TextField
                {...register(`${item.register}`)}
                required
                id="filled-required"
                label={item.label}
                defaultValue=""
                variant="filled"
                className={item.className}
              />
            ))
          }
        </div>
        <div className="input-submit">
          <TextField
            {...register(`${data[4].register}`)}
            className={`${data[4].className}`}
            required
            id="filled-required"
            label={`${data[4].label}`}
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
