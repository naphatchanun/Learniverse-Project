import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/user";
import { AxiosLib } from "../../lib/axiosLib";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Profile = () => {
  const auth = useContext(AuthContext);
  const Navigate = useNavigate();

  const [profile, setProfile] = useState({});
  const [profileTemp, setProfileTemp] = useState({});
  const [password, setPassword] = useState({});

  const handleProfile = async () => {
    try {
      const result = await AxiosLib.get(`/user/${auth.userId}`);
      setProfile(result.data[0]);
      setProfileTemp(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditChange = async (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = async (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password does not match",
      });
      return;
    }
    try {
      const result = await AxiosLib.put(
        `/user/changePassword/${auth.userId}`,
        password
      );
      if (result.status === 200) {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Password changed",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditSumbit = async (e) => {
    e.preventDefault();
    console.log(profile);
    try {
      const result = await AxiosLib.put(`/user/edit/${auth.userId}`, profile);
      if (result.status === 200) {
        Navigate(0);
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleProfile();
  }, [auth]);
  return (
    <main className="flex justify-center items-center">
      <div className="rounded-md bg-gray-100 px-10 mt-8 py-10 w-8/12">
        <h1 className="text-center font-bold text-2xl">My Profile</h1>
        <div className="grid md:grid-cols-[4fr_6fr] grid-cols-2 space-x-2 mt-3">
          <div className="shadow-md">
            <div className="flex justify-start">
              <div className="rounded-md bg-gray-300 px-4 py-5">
                <h1 className="text-lg mt-3">
                  Playname:
                  <p className="rounded-md bg-white w-64 h-8 px-3 mt-1">
                    {profileTemp.displayName}
                  </p>
                </h1>
                <h2 className="text-lg mt-3">
                  Firstname:
                  <p className="rounded-md bg-white w-64 h-8 px-3 mt-1">
                    {profileTemp.firstName}
                  </p>
                </h2>
                <h2 className="text-lg mt-3">
                  Lastname:
                  <p className="rounded-md bg-white w-64 h-8 px-3 mt-1">
                    {profileTemp.lastName}
                  </p>
                </h2>
                <h2 className="text-lg mt-3">
                  Email:
                  <p className="rounded-md bg-white w-64 h-8 px-3 mt-1 ">
                    {profileTemp.email}
                  </p>
                </h2>
                <h2 className="text-lg mt-3">
                  Phone:
                  <p className="rounded-md bg-white px-3 mt-1">
                    {profileTemp.phone}
                  </p>
                </h2>
              </div>
            </div>
          </div>
          <div className="rounded-md px-10 py-8">
            <div className="grid md:grid-cols-[4fr_6fr] grid-cols-2 space-x-5">
              <div className="flex justify-center">
                <div className="rounded-md px-4 ">
                  <h1 className="text-lg">Edit Profile</h1>
                  <form onSubmit={handleEditSumbit} className="">
                    <input
                      type="text"
                      name="firstName"
                      className="w-64 h-8 rounded-md px-2 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder={profile.firstName}
                      onChange={handleEditChange}
                    />
                    <input
                      type="text"
                      name="lastName"
                      className="w-64 h-8 rounded-md px-2 mt-2 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder={profile.lastName}
                      onChange={handleEditChange}
                    />
                    <input
                      type="text"
                      name="displayName"
                      className="w-64 h-8 rounded-md px-2 mt-2 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder={profile.displayName}
                      onChange={handleEditChange}
                    />
                    <input
                      type="text"
                      name="email"
                      className="w-64 h-8 rounded-md px-2 mt-2 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder={profile.email}
                      onChange={handleEditChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      className="w-64 h-8 rounded-md px-2 mt-2 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      placeholder={profile.phone}
                      onChange={handleEditChange}
                    />
                    {/* <input type="submit" value="Save" /> */}
                    <div className="mt-4 flex justify-center">
                      <botton className="rounded-md bg-[#FB6D48] text-white px-12 py-1">
                        Save
                      </botton>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  <h1 className="text-lg">Change password</h1>
                  <form onSubmit={handlePasswordSubmit}>
                    <input
                      type="password"
                      placeholder="Old password"
                      className="w-64 h-8 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      name="oldPassword"
                      onChange={handlePasswordChange}
                    />
                    <input
                      type="password"
                      placeholder="New password"
                      className="w-64 h-8 rounded-md px-2 mt-2 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      name="newPassword"
                      onChange={handlePasswordChange}
                    />
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-64 h-8 rounded-md px-2 mt-2 border-2 rounded-md px-2 mt-2 focus:outline-none focus:border-[#FB6D48] focus:ring-1 focus:ring-[#FB6D48]
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                      name="confirmPassword"
                      onChange={handlePasswordChange}
                    />
                    <div className="mt-4 flex justify-center">
                      <botton className="rounded-md bg-[#FB6D48] text-white px-12 py-1">
                        Save
                      </botton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
