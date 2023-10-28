import useUpdate from "@/Hook/useUpdate";
import Loader from "@/components/Loader";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import { uploadImg } from "@/lib/utils";
import FormModel from "@/models/form-model";
import { clearErrors, updateProfile } from "@/slices/profile/profileAction";
import { FC, FormEvent, useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookie = new Cookies();
const user = cookie.get("user");

interface profileProps {}

const Profile: FC<profileProps> = () => {
  const { loading, handleUpdate, errors } = useUpdate({
    states: "updateProfile",
    updateFun: updateProfile,
    clearFun: clearErrors(),
  });
  const [first_name, setfirst_name] = useState<string>("");
  const [last_name, setlast_name] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [image, setimage] = useState<{ img: File }>();
  const [birthday, setbirthday] = useState<string>("");

  const handleFormUpdate = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    first_name && formData.append("first_name", first_name);
    last_name && formData.append("last_name", last_name);
    email && formData.append("email", email);
    phone && formData.append("phone", phone);
    image?.img && formData.append("image", image?.img);
    birthday && formData.append("birthday", birthday);
    formData.append("_method", "put");

    handleUpdate(formData);
  };

  useEffect(() => {
    if (user.email) {
      setfirst_name(user.first_name);
      setlast_name(user.last_name);
      setemail(user.email);
      setphone(user.phone);
      setimage(user.image);
      setbirthday(user.birthday);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="contain">
      <div className="relative mb-5 bg-slate-900 rounded-md h-52 w-full">
        <div className="w-24 h-24 overflow-hidden bg-slate-400 rounded-full absolute -bottom-8 left-8">
          <img
            src={`http://localhost:8000/storage/${image}`}
            className="rounded-full object-contain"
            alt=""
          />
        </div>
      </div>
      <FormModel
        title=""
        disc=""
        onSubmit={handleFormUpdate}
        className="flex flex-col gap-3 mt-10 p-3 border border-slate-300 rounded-md shadow-md w-full"
      >
        <FormInput
          className="w-full"
          label="First name"
          name="first_name"
          type="text"
          placeholder="ahmed"
          value={first_name}
          onChange={(e) => setfirst_name(e.target.value)}
          error={errors?.first_name}
          required
        />
        <FormInput
          className="w-full"
          label="Last name"
          name="last_name"
          type="text"
          placeholder="elgendy"
          value={last_name}
          onChange={(e) => setlast_name(e.target.value)}
          error={errors?.last_name}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="example@test.com"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          error={errors?.email}
          required
        />
        <FormInput
          label="phone"
          name="phone"
          type="number"
          placeholder="012345678910"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          error={errors?.phone}
        />
        <FormInput
          label="birthday"
          name="birthday"
          type="date"
          placeholder="example@test.com"
          value={birthday}
          onChange={(e) => setbirthday(e.target.value)}
          error={errors?.birthday}
        />
        <InputFile
          label="image"
          name="image"
          onChange={(e) => setimage(uploadImg(e))}
          error={errors?.image}
        />
        <div>
          {image?.img ? (
            <img
              className="w-24 h-24 object-contain"
              src={image?.img && URL?.createObjectURL(image?.img)}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        <Button
          type="submit"
          className="mt-3"
          variant={"outline"}
          text="Update"
        />
      </FormModel>
    </div>
  );
};

export default Profile;
