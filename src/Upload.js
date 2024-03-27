import supabase from "./supabase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
async function uploadData(data, objSet) {
  //   console.log("Hello " + data);

  let email1 = await supabase
    .from("participants")
    .select("email")
    .eq("email", data?.email);

  let mobile1 = await supabase
    .from("participants")
    .select("mobile")
    .eq("mobile", data?.mobile);

  //   console.log(email1);
  if (email1?.data?.length == 1 || mobile1?.data?.length == 1) {
    toast.error("User Already Exists with this Mobile/Email 😊", {
      position: "top-center",
      theme: "colored",
    });
    return;
  } else {
    try {
      const { data1, error } = await supabase
        .from("participants")
        .insert([
          {
            firstName: data.firstName,
            lastName: data.lastName,
            mobile: data.mobile,
            alternateMobile: data.alternateMobile,
            email: data.email,
            state: data.state,
            district: data.district,
            city: data.city,
            pin: data.pin,
            event: data.event,
            age: data.age,
            aadhar: data.aadhar,
            gender: data.gender,
            payment: true,
          },
        ])
        .select();

      toast.success("Your data saved successfully🎉✌️", {
        position: "top-center",
        theme: "colored",
      });
      objSet.setAge(18);
      objSet.setFirstName("");
      objSet.setLastName("");
      objSet.setMobile(0);
      objSet.setEmail("");
      objSet.setGender("Male");
      objSet.setCity("");
      objSet.setAlternateMobile(0);
      objSet.setPin(0);
      objSet.setAadhar("");
    } catch (err) {
      toast.error("Something went wrong🌋", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }
  }
}

export default uploadData;
