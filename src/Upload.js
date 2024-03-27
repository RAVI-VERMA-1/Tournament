import supabase from "./supabase";

async function uploadData(data) {
  console.log("Hello " + data);

  let email1 = await supabase
    .from("participants")
    .select("email")
    .eq("email", data?.email);

  let mobile1 = await supabase
    .from("participants")
    .select("mobile")
    .eq("mobile", data?.mobile);

  console.log(email1);
  if (email1?.data?.length == 1 || mobile1?.data?.length == 1) {
    alert("User already exists!!!");
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

      alert("your data successfully fetched🎉");
    } catch (err) {
      alert("Something Went Wrong🌋");
      return;
    }
  }
}

export default uploadData;
