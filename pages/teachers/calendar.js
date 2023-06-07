import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeacherAvailabilityCalendar from '../../components/TeacherAvailabilityCalendar';

function CalendarPage() {
  return (
    <div>
      <Header />
      <h1>Set Availability</h1>
      <TeacherAvailabilityCalendar />
      <Footer />
    </div>
  );
}

export default CalendarPage;
