import TeacherProfile from "./TeacherProfile";

function ProfileGrid({ teachers }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {teachers.map((teacher) => (
        <TeacherProfile
          key={teacher.id}
          name={teacher.name}
          bio={teacher.bio}
          photo={teacher.photo}
        />
      ))}
    </div>
  );
}

export default ProfileGrid;
