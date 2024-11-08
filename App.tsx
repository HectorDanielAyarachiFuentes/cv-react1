import { useState } from 'react';
import { Edit } from 'lucide-react';

const CV = () => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    objective: 'To obtain a challenging and rewarding position',
    education: [
      { degree: 'Bachelor of Science', institution: 'Anytown University', dates: '2010-2014' },
    ],
    workExperience: [
      { jobTitle: 'Software Engineer', company: 'ABC Corporation', dates: '2014-2018' },
    ],
    skills: ['JavaScript', 'React', 'Node.js'],
    profilePicture: '',
    coverPicture: '',
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleChange = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col mb-4">
        <div className="h-64 w-full bg-gray-200 border-2 border-dashed rounded-xl relative">
          {userInfo.coverPicture ? (
            <img src={userInfo.coverPicture} alt="Cover Picture" className="h-64 w-full object-cover" />
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600">
              Cover Picture
            </div>
          )}
        </div>
        <div className="h-32 w-32 bg-gray-200 border-2 border-dashed rounded-full relative -mt-16 mx-auto">
          {userInfo.profilePicture ? (
            <img src={userInfo.profilePicture} alt="Profile Picture" className="h-32 w-32 object-cover rounded-full" />
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600">
              Profile Picture
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{userInfo.name}</h1>
        <button
          className={`text-gray-600 hover:text-gray-900 ${editMode ? 'hidden' : 'block'}`}
          onClick={handleEdit}
        >
          <Edit className="w-5 h-5" />
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${editMode ? 'block' : 'hidden'
            }`}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-600">Contact Information:</label>
        {editMode ? (
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="text-gray-600">{userInfo.email}</p>
        )}
        {editMode ? (
          <input
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="text-gray-600">{userInfo.phone}</p>
        )}
        {editMode ? (
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="text-gray-600">{userInfo.address}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-600">Objective:</label>
        {editMode ? (
          <textarea
            name="objective"
            value={userInfo.objective}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="text-gray-600">{userInfo.objective}</p>
        )}
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-600">Education:</label>
        {userInfo.education.map((education, index) => (
          <div key={index} className="flex flex-col mb-2">
            {editMode ? (
              <input
                type="text"
                name={`education[${index}].degree`}
                value={education.degree}
                onChange={(e) => {
                  const newEducation = [...userInfo.education];
                  newEducation[index].degree = e.target.value;
                  setUserInfo({ ...userInfo, education: newEducation });
                }}
                className="p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-600">{education.degree}</p>
            )}
            {editMode ? (
              <input
                type="text"
                name={`education[${index}].institution`}
                value={education.institution}
                onChange={(e) => {
                  const newEducation = [...userInfo.education];
                  newEducation[index].institution = e.target.value;
                  setUserInfo({ ...userInfo, education: newEducation });
                }}
                className="p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-600">{education.institution}</p>
            )}
            {editMode ? (
              <input
                type="text"
                name={`education[${index}].dates`}
                value={education.dates}
                onChange={(e) => {
                  const newEducation = [...userInfo.education];
                  newEducation[index].dates = e.target.value;
                  setUserInfo({ ...userInfo, education: newEducation });
                }}
                className="p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-600">{education.dates}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-600">Work Experience:</label>
        {userInfo.workExperience.map((workExperience, index) => (
          <div key={index} className="flex flex-col mb-2">
            {editMode ? (
              <input
                type="text"
                name={`workExperience[${index}].jobTitle`}
                value={workExperience.jobTitle}
                onChange={(e) => {
                  const newWorkExperience = [...userInfo.workExperience];
                  newWorkExperience[index].jobTitle = e.target.value;
                  setUserInfo({ ...userInfo, workExperience: newWorkExperience });
                }}
                className="p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-600">{workExperience.jobTitle}</p>
            )}
            {editMode ? (
              <input
                type="text"
                name={`workExperience[${index}].company`}
                value={workExperience.company}
                onChange={(e) => {
                  const newWorkExperience = [...userInfo.workExperience];
                  newWorkExperience[index].company = e.target.value;
                  setUserInfo({ ...userInfo, workExperience: newWorkExperience });
                }}
                className="p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-600">{workExperience.company}</p>
            )}
            {editMode ? (
              <input
                type="text"
                name={`workExperience[${index}].dates`}
                value={workExperience.dates}
                onChange={(e) => {
                  const newWorkExperience = [...userInfo.workExperience];
                  newWorkExperience[index].dates = e.target.value;
                  setUserInfo({ ...userInfo, workExperience: newWorkExperience });
                }}
                className="p-2 border border-gray-300 rounded"
              />
            ) : (
              <p className="text-gray-600">{workExperience.dates}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-gray-600">Skills:</label>
        {editMode ? (
          <input
            type="text"
            name="skills"
            value={userInfo.skills.join(', ')}
            onChange={(e) => {
              setUserInfo({ ...userInfo, skills: e.target.value.split(', ') });
            }}
            className="p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="text-gray-600">{userInfo.skills.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default CV;