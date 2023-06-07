import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MessengerApp from '../../components/MessengerApp';

function MessengerPage() {
  const teacherId = 'teacher123'; // Replace with the actual teacher ID

  return (
    <div>
      <Header />
      <h1>Messenger</h1>
      <MessengerApp teacherId={teacherId} />
      <Footer />
    </div>
  );
}

export default MessengerPage;
