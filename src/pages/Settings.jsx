import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUserCog,
  FaMoon,
  FaBell,
  FaLock,
  FaGlobe,
  FaSave,
} from "react-icons/fa";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName(res.data.user.name);
      setEmail(res.data.user.email);
    } catch (err) {
      console.log(err);
    }
  };

  const saveChanges = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      // Update Profile
      await axios.put(
        "http://localhost:5000/api/auth/profile",
        {
          name,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Change Password
      if (newPassword !== "") {
        if (newPassword !== confirmPassword) {
          alert("Passwords do not match");
          setLoading(false);
          return;
        }

        await axios.put(
          "http://localhost:5000/api/auth/change-password",
          {
            currentPassword,
            newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }

      alert("Profile Updated Successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B1A] text-white p-10">

      <h1 className="text-5xl font-bold">Settings</h1>

      <p className="text-gray-400 mt-3">
        Manage your account preferences and application settings.
      </p>

      {/* Account */}

      <div className="bg-[#111827] rounded-3xl p-8 mt-10 border border-gray-800">

        <div className="flex items-center gap-4">
          <FaUserCog className="text-3xl text-violet-400" />
          <h2 className="text-2xl font-bold">Account Information</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#1B2436] p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1B2436] p-4 rounded-xl outline-none"
          />

        </div>

      </div>

      {/* Preferences */}

      <div className="bg-[#111827] rounded-3xl p-8 mt-8 border border-gray-800">

        <h2 className="text-2xl font-bold">Preferences</h2>

        <div className="mt-8 space-y-8">

          <div className="flex justify-between">

            <div className="flex gap-4 items-center">

              <FaBell className="text-yellow-400" />

              <div>
                <h3>Notifications</h3>
                <p className="text-gray-400 text-sm">
                  Receive AI recommendations
                </p>
              </div>

            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />

          </div>

          <div className="flex justify-between">

            <div className="flex gap-4 items-center">

              <FaMoon className="text-blue-400" />

              <div>
                <h3>Dark Mode</h3>
                <p className="text-gray-400 text-sm">
                  Enable Dark Mode
                </p>
              </div>

            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />

          </div>

          <div className="flex justify-between">

            <div className="flex gap-4 items-center">

              <FaGlobe className="text-green-400" />

              <div>
                <h3>Language</h3>
                <p className="text-gray-400 text-sm">
                  Preferred Language
                </p>
              </div>

            </div>

            <select className="bg-[#1B2436] rounded-lg px-4 py-2">
              <option>English</option>
              <option>Hindi</option>
            </select>

          </div>

        </div>

      </div>

      {/* Change Password */}

      <div className="bg-[#111827] rounded-3xl p-8 mt-8 border border-gray-800">

        <div className="flex items-center gap-4">

          <FaLock className="text-red-400 text-2xl" />

          <h2 className="text-2xl font-bold">
            Change Password
          </h2>

        </div>

        <div className="grid gap-5 mt-8">

          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="bg-[#1B2436] p-4 rounded-xl outline-none"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-[#1B2436] p-4 rounded-xl outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-[#1B2436] p-4 rounded-xl outline-none"
          />

        </div>

      </div>

      {/* Save */}

      <div className="mt-10 flex justify-end">

        <button
          onClick={saveChanges}
          disabled={loading}
          className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500"
        >
          <FaSave />
          {loading ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </div>
  );
}