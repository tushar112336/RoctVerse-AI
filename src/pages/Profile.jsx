import { useEffect, useState } from "react";
import api from "../services/api";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaTrophy,
  FaCertificate,
  FaStar,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";

export default function Profile() {

  const [user, setUser] = useState(null);

  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    role: "",
    careerGoal: "",
    location: "",
    github: "",
    linkedin: "",
    portfolio: "",
    profileImage: "",
    skills: [],
    certificates: [],
    education: {
      college: "",
      degree: "",
      branch: "",
      year: "",
      cgpa: "",
    },
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {

      const res = await api.get("/auth/profile");

      const u = res.data.user;

      setUser(u);

      setForm({
        name: u.name || "",
        email: u.email || "",
        phone: u.phone || "",
        bio: u.bio || "",
        role: u.role || "",
        careerGoal: u.careerGoal || "",
        location: u.location || "",
        github: u.github || "",
        linkedin: u.linkedin || "",
        portfolio: u.portfolio || "",
        profileImage: u.profileImage || "",
        skills: u.skills || [],
        certificates: u.certificates || [],
        education: u.education || {
          college: "",
          degree: "",
          branch: "",
          year: "",
          cgpa: "",
        },
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {

    try {

      await api.put("/auth/profile", form);

      alert("Profile Updated Successfully");

      setEditMode(false);

      fetchProfile();

    } catch (err) {

      alert(err.response?.data?.message || "Update Failed");

    }

  };

  if (!user) {

    return (
      <div className="min-h-screen bg-[#060B1A] flex justify-center items-center text-white text-3xl">
        Loading...
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-[#060B1A] text-white p-10">

      <div className="bg-[#111827] rounded-3xl p-8 border border-violet-500">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-8">

            <img
              src={form.profileImage || "https://i.pravatar.cc/200"}
              className="w-36 h-36 rounded-full border-4 border-violet-500"
              alt=""
            />

            <div>

              {
                editMode ?

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-[#1B2436] p-3 rounded-xl text-3xl font-bold"
                />

                :

                <h1 className="text-4xl font-bold">
                  {user.name}
                </h1>

              }
                            <div className="mt-4">

                {editMode ? (

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-[#1B2436] p-3 rounded-xl w-full"
                    placeholder="Email"
                  />

                ) : (

                  <p className="text-gray-400">{user.email}</p>

                )}

              </div>

              <div className="mt-4">

                {editMode ? (

                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    rows="3"
                    className="bg-[#1B2436] p-3 rounded-xl w-full"
                    placeholder="Write about yourself..."
                  />

                ) : (

                  <p className="text-gray-400">
                    {user.bio || "No bio added"}
                  </p>

                )}

              </div>

              <div className="mt-4">

                {editMode ? (

                  <input
                    name="careerGoal"
                    value={form.careerGoal}
                    onChange={handleChange}
                    className="bg-[#1B2436] p-3 rounded-xl w-full"
                    placeholder="Career Goal"
                  />

                ) : (

                  <p className="text-violet-400">
                    {user.careerGoal || "No Career Goal"}
                  </p>

                )}

              </div>

              <div className="flex gap-6 mt-6 text-2xl">

                <a
                  href={form.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="hover:text-violet-400" />
                </a>

                <a
                  href={form.linkedin || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="hover:text-violet-400" />
                </a>

                <a href={`mailto:${form.email}`}>
                  <FaEnvelope className="hover:text-violet-400" />
                </a>

              </div>

            </div>

          </div>

          <div>

            {editMode ? (

              <div className="flex gap-4">

                <button
                  onClick={saveProfile}
                  className="px-6 py-3 bg-green-600 rounded-xl flex items-center gap-2"
                >
                  <FaSave />
                  Save
                </button>

                <button
                  onClick={() => setEditMode(false)}
                  className="px-6 py-3 bg-red-600 rounded-xl flex items-center gap-2"
                >
                  <FaTimes />
                  Cancel
                </button>

              </div>

            ) : (

              <button
                onClick={() => setEditMode(true)}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 flex items-center gap-3"
              >
                <FaEdit />
                Edit Profile
              </button>

            )}

          </div>

        </div>

      </div>
            {/* Skills */}

      <div className="bg-[#111827] rounded-3xl border border-gray-800 p-8 mt-10">

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold flex items-center gap-3">

            <FaCode />

            Skills

          </h2>

          {editMode && (

            <button
              onClick={() =>
                setForm({
                  ...form,
                  skills: [...form.skills, ""],
                })
              }
              className="px-5 py-2 rounded-lg bg-violet-600"
            >
              + Add Skill
            </button>

          )}

        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          {form.skills.length > 0 ? (

            form.skills.map((skill, index) => (

              <div
                key={index}
                className="flex items-center gap-2"
              >

                {editMode ? (

                  <>

                    <input
                      value={skill}
                      onChange={(e) => {

                        const arr = [...form.skills];

                        arr[index] = e.target.value;

                        setForm({
                          ...form,
                          skills: arr,
                        });

                      }}
                      className="bg-[#1B2436] px-4 py-2 rounded-lg"
                    />

                    <button
                      onClick={() => {

                        const arr = [...form.skills];

                        arr.splice(index, 1);

                        setForm({
                          ...form,
                          skills: arr,
                        });

                      }}
                      className="bg-red-600 px-3 py-2 rounded-lg"
                    >
                      X
                    </button>

                  </>

                ) : (

                  <span className="px-5 py-3 rounded-full bg-violet-600/20 border border-violet-500">

                    {skill}

                  </span>

                )}

              </div>

            ))

          ) : (

            <p className="text-gray-400">

              No Skills Added Yet

            </p>

          )}

        </div>

      </div>
            {/* Education */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        <div className="bg-[#111827] rounded-3xl border border-gray-800 p-8">

          <h2 className="text-3xl font-bold flex items-center gap-3">

            <FaGraduationCap />

            Education

          </h2>

          <div className="mt-8 space-y-4">

            {editMode ? (

              <>

                <input
                  placeholder="College"
                  value={form.education.college}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      education: {
                        ...form.education,
                        college: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-[#1B2436] p-3 rounded-xl"
                />

                <input
                  placeholder="Degree"
                  value={form.education.degree}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      education: {
                        ...form.education,
                        degree: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-[#1B2436] p-3 rounded-xl"
                />

                <input
                  placeholder="Branch"
                  value={form.education.branch}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      education: {
                        ...form.education,
                        branch: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-[#1B2436] p-3 rounded-xl"
                />

                <input
                  placeholder="Passing Year"
                  value={form.education.year}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      education: {
                        ...form.education,
                        year: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-[#1B2436] p-3 rounded-xl"
                />

                <input
                  placeholder="CGPA"
                  value={form.education.cgpa}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      education: {
                        ...form.education,
                        cgpa: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-[#1B2436] p-3 rounded-xl"
                />

              </>

            ) : (

              <div className="space-y-2">

                <h3 className="text-xl font-bold">
                  {user.education?.degree || "Degree"}
                </h3>

                <p>{user.education?.college}</p>

                <p>{user.education?.branch}</p>

                <p>Year : {user.education?.year}</p>

                <p>CGPA : {user.education?.cgpa}</p>

              </div>

            )}

          </div>

        </div>

        {/* Career Goal */}

        <div className="bg-[#111827] rounded-3xl border border-gray-800 p-8">

          <h2 className="text-3xl font-bold flex items-center gap-3">

            <FaTrophy />

            Career Goal

          </h2>

          <div className="mt-8">

            {editMode ? (

              <textarea
                rows="7"
                name="careerGoal"
                value={form.careerGoal}
                onChange={handleChange}
                className="w-full bg-[#1B2436] p-4 rounded-xl"
              />

            ) : (

              <p className="text-gray-300">

                {user.careerGoal || "No Career Goal Added"}

              </p>

            )}

          </div>

        </div>

      </div>

      {/* Certificates */}

      <div className="bg-[#111827] rounded-3xl border border-gray-800 p-8 mt-10">

        <div className="flex justify-between items-center">

          <h2 className="text-3xl font-bold flex items-center gap-3">

            <FaCertificate />

            Certificates

          </h2>

          {editMode && (

            <button
              onClick={() =>
                setForm({
                  ...form,
                  certificates: [...form.certificates, ""],
                })
              }
              className="bg-violet-600 px-5 py-2 rounded-lg"
            >
              + Add
            </button>

          )}

        </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {form.certificates.length > 0 ? (

            form.certificates.map((cert, index) => (

              <div
                key={index}
                className="bg-[#1B2436] rounded-xl p-5"
              >

                {editMode ? (

                  <>

                    <input
                      value={cert}
                      onChange={(e) => {

                        const arr = [...form.certificates];

                        arr[index] = e.target.value;

                        setForm({
                          ...form,
                          certificates: arr,
                        });

                      }}
                      className="w-full bg-[#111827] p-3 rounded-lg"
                    />

                    <button
                      onClick={() => {

                        const arr = [...form.certificates];

                        arr.splice(index, 1);

                        setForm({
                          ...form,
                          certificates: arr,
                        });

                      }}
                      className="mt-3 bg-red-600 px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </>

                ) : (

                  <>

                    <FaCertificate className="text-3xl text-yellow-400"/>

                    <h3 className="mt-4 font-semibold">

                      {cert}

                    </h3>

                  </>

                )}

              </div>

            ))

          ) : (

            <p className="text-gray-400">

              No Certificates Added

            </p>

          )}

        </div>

      </div>

      {/* Statistics */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

        <div className="bg-[#111827] rounded-2xl p-6">

          <h3 className="text-gray-400">

            Skills

          </h3>

          <h2 className="text-4xl font-bold text-violet-400 mt-2">

            {form.skills.length}

          </h2>

        </div>

        <div className="bg-[#111827] rounded-2xl p-6">

          <h3 className="text-gray-400">

            Certificates

          </h3>

          <h2 className="text-4xl font-bold text-green-400 mt-2">

            {form.certificates.length}

          </h2>

        </div>

        <div className="bg-[#111827] rounded-2xl p-6">

          <h3 className="text-gray-400">

            Career Score

          </h3>

          <h2 className="text-4xl font-bold text-orange-400 mt-2">

            {user.careerScore || 0}%

          </h2>

        </div>

        <div className="bg-[#111827] rounded-2xl p-6">

          <h3 className="text-gray-400">

            Resume Score

          </h3>

          <h2 className="text-4xl font-bold text-cyan-400 mt-2">

            {user.resumeScore || 0}%

          </h2>

        </div>

      </div>

      {/* AI Recommendation */}

      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 mt-10">

        <h2 className="text-3xl font-bold flex items-center gap-3">

          <FaStar/>

          AI Career Recommendation

        </h2>

        <p className="mt-6 leading-8 text-lg">

          Based on your profile, AI recommends learning
          <strong> Node.js, Express.js, MongoDB and System Design</strong>.
          Complete at least
          <strong> 5 Full Stack Projects</strong>
          to become job ready.

        </p>

      </div>

    </div>

  );

}