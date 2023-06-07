import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProfileGrid from '../../components/ProfileGrid';

function TeachersPage() {
  // Fetch teachers data from the API

  const teachers = []; // Replace with fetched teachers data

  return (
    <div>
      <Header />
      <h1>Browse Teachers</h1>
      <ProfileGrid teachers={teachers} />
      <Footer />
    </div>
  );
}

export default TeachersPage;
