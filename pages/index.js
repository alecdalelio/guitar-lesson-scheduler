import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfileGrid from "../components/ProfileGrid";
import MessengerApp from "../components/MessengerApp";
import TeacherAvailabilityCalendar from "../components/TeacherAvailabilityCalendar";
import LessonForm from "../components/LessonForm";

function HomePage() {
  const teachers = [
    {
      id: 1,
      name: "John Doe",
      bio: "Experienced guitar teacher with over 10 years of teaching experience.",
      photo: "/images/teacher1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      bio: "Passionate about teaching guitar and helping students achieve their musical goals.",
      photo: "/images/teacher2.jpg",
    },
    // Add more teachers as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Guitar Lesson Scheduler App!
        </h1>
      </div>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Available Teachers</h2>
            <ProfileGrid teachers={teachers} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Teacher Availability</h2>
            <TeacherAvailabilityCalendar />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Messenger</h2>
          <MessengerApp teacherId={1} />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Schedule a Lesson</h2>
          <LessonForm teacherId={1} onLessonScheduled={() => {}} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
