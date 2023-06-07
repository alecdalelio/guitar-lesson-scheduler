function TeacherProfile({ name, bio, photo }) {
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <h2 className="text-2xl mb-2">{name}</h2>
      <p className="mb-4">{bio}</p>
      <img src={photo} alt={name} className="w-full rounded-md" />
    </div>
  );
}

export default TeacherProfile;
