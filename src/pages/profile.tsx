import Loader from "@/components/Loader";
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/Button";
import InputFile from "@/components/ui/InputFile";
import FormModel from "@/models/form-model";
import { clearErrors, updateProfile } from "@/slices/profile/profileAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
const cookie = new Cookies();
const user = cookie.get("user");

interface profileProps {}

const Profile: FC<profileProps> = () => {
  const dispatch = useAppDispatch();
  const { loading, success, msg, errors } = useAppSelector(
    (state) => state.updateProfile
  );
  const [first_name, setfirst_name] = useState<string>("");
  const [last_name, setlast_name] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [image, setimage] = useState<string>("");
  const [imagePreview, setimagePreview] = useState("");
  const [birthday, setbirthday] = useState<string>("");

  const handleImg = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setimagePreview(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
    setimage(e.target.files[0]);
  };

  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    first_name && formData.append("first_name", first_name);
    last_name && formData.append("last_name", last_name);
    email && formData.append("email", email);
    phone && formData.append("phone", phone);
    image && formData.append("image", image);
    birthday && formData.append("birthday", birthday);
    formData.append("_method", "put");

    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (success === true && msg) {
      toast.success(msg);
      // window.location.reload();
    }
    if (success === false && msg) {
      toast.error(msg);
    }
    // return () => dispatch(clearErrors());
  }, [success, msg]);

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
        onSubmit={handleUpdate}
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
          onChange={handleImg}
          error={errors?.image}
        />
        <div>
          {imagePreview ? (
            <img
              className="w-24 h-24 object-contain"
              src={imagePreview}
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
