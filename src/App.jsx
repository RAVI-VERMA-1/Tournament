import { useEffect, useState } from "react";
import { styled } from "styled-components";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
// import useDataFun from "./useData";
import uploadData from "./Upload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = styled.input`
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #000;
  border-radius: 7px;
  padding: 3px 6px;
  margin-right: 10px;
  color: var(--color-input-00);
`;
const Article = styled.article`
  display: flex;
  justify-content: center;
  /* border: 2px solid; */
  padding: 14px 0px;
  margin: 50px 0px;
  /* border-radius: 20px; */
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  border: 2px solid;
  padding: 14px 0px;
  margin: 20px 0px;
  border-radius: 20px;
  /* background-color: black; */
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 500px;
  padding: 20px 40px;
`;
const FormRow = styled.div`
  display: grid;
  align-items: center;
  /* justify-content: center; */
  grid-template-columns: 12rem 24rem;
  gap: 0.1rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 17px;
  color: black;
`;

const Button = styled.button`
  border: 2px solid black;
  width: fit-content;
  align-self: center;
  font-size: 16px;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 4px;
  background-color: lightblue;
`;

function App() {
  // useEffect(function () {}, []);

  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [alternateMobile, setAlternateMobile] = useState(0);
  const [email, setEmail] = useState("");
  const [state, setState] = useState("Arunachal Pradesh");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState(0);
  const [district, setDistrict] = useState("");
  const [event, setEvent] = useState("event1");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(18);
  const [aadhar, setAadhar] = useState("");
  const objSet = {
    setAadhar,
    setAge,
    setGender,
    setEvent,
    setDistrict,
    setPin,
    setCity,
    setState,
    setEmail,
    setAlternateMobile,
    setMobile,
    setLastName,
    setFirstName,
  };
  let data = {};

  function handleSubmit(e) {
    e.preventDefault();
    data.firstName = FirstName;
    data.lastName = LastName;
    data.mobile = mobile;
    data.alternateMobile = alternateMobile;
    data.email = email;
    data.state = state;
    data.city = city;
    data.district = district;
    data.pin = pin;
    data.event = event;
    data.aadhar = aadhar;
    data.gender = gender;
    data.age = age;

    // console.log(data);

    if (data.mobile.length != 10) {
      // alert("😬 Insert Valid Mobile Number 😬!!!!");
      toast.error("Insert Valid Mobile Number", {
        position: "top-center",
        theme: "colored",
      });
      return;
    } else if (data.firstName.length <= 1) {
      toast.warn("Insert Valid First name", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      if (
        data.mobile !== "" &&
        data.email !== "" &&
        data.firstName !== "" &&
        data.lastName !== ""
      ) {
        uploadData(data, objSet);
      } else {
        toast.error("fill All required fields 👨‍💻", {
          position: "top-center",
          theme: "colored",
        });
        return;
      }
    }
  }

  return (
    <div className="w-full  bg-stone-50">
      <p className="text-5xl text-blue-500 font-bold font-mono">
        Tournament XYZ
      </p>
      <Main>
        <Form className="flex flex-col border-black-solid gap-1">
          <FormRow>
            <Label>First Name : </Label>
            <Input
              type="text"
              id="firstName"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Last Name: </Label>
            <Input
              type="text"
              id="lastname"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Mobile: </Label>
            <Input
              type="number"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Alternate Mobile: </Label>
            <Input
              type="number"
              id="alternateMobile"
              value={alternateMobile}
              onChange={(e) => setAlternateMobile(e.target.value)}
            />
          </FormRow>
          <FormRow>
            <Label>Email: </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>State: </Label>
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="ArunachalPradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="chhattisgarh">Chattisgarh</option>
              <option value="Madhyapradesh">Madhya Pradesh</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Kerala">Kerala</option>
              <option value="Tamilnadu">TamilNadu</option>
              <option value="Aandhra Pradesh">Aandhra pradesh</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Uttarpradesh">uttarpradesh</option>
              <option value="Maharastra">Maharastra</option>
              <option value="Telangana">Telangana</option>
            </select>
          </FormRow>
          <FormRow>
            <Label>District: </Label>
            <Input
              type="text"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>City: </Label>
            <Input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Pin Code: </Label>
            <Input
              type="number"
              id="PinCode"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Event Name: </Label>
            <select value={event} onChange={(e) => setEvent(e.target.value)}>
              <option value="event1">Event 1</option>
              <option value="event2">Event 2</option>
            </select>
          </FormRow>
          <FormRow>
            <Label>Age: </Label>
            <Input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Aadhar No: </Label>
            <Input
              type="number"
              id="Aadhar"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              required
            />
          </FormRow>
          <FormRow>
            <Label>Gender</Label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
            </select>
          </FormRow>

          <Button onClick={(e) => handleSubmit(e)} type="submit">
            Submit
          </Button>
        </Form>

        <Article>Payment Aggregator</Article>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <ToastContainer />
      </Main>
    </div>
  );
}

export default App;
