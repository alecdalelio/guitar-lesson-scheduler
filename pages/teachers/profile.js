import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeacherProfile from '../../components/TeacherProfile';

function TeacherProfilePage() {
  // Fetch teacher data from the API

  const teacher = {}; // Replace with fetched teacher data

  return (
    <div>
      <Header />
      <h1>Teacher Profile</h1>
      <TeacherProfile {...teacher} />
      <Footer />
    </div>
  );
}

export default TeacherProfilePage;
