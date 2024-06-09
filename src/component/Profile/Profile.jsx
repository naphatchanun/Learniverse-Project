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
    <main className="grid grid-cols-3">
      <div>
        <h1>My profile</h1>
        <div>
          <p>{profileTemp.displayName}</p>
          <p>{profileTemp.firstName}</p>
          <p>{profileTemp.lastName}</p>
          <p>{profileTemp.email}</p>
          <p>{profileTemp.phone}</p>
        </div>
      </div>
      <div>
        <h1>Edit Profile</h1>
        <form onSubmit={handleEditSumbit}>
          <input
            type="text"
            name="firstName"
            placeholder={profile.firstName}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder={profile.lastName}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="displayName"
            placeholder={profile.displayName}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="email"
            placeholder={profile.email}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="phone"
            placeholder={profile.phone}
            onChange={handleEditChange}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
      <div>
        <h1>Change password</h1>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="Old password"
            name="oldPassword"
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            placeholder="New password"
            name="newPassword"
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            placeholder="Confirm new password"
            name="confirmPassword"
            onChange={handlePasswordChange}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    </main>
  );
};

export default Profile;
