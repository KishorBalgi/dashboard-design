import "./App.css";
import DashBoardLayout from "./layout/DashBoardLayout";
import PaymentsPage from "./pages/Payments";

function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashBoardLayout>
        <PaymentsPage />
      </DashBoardLayout>
    </>
  );
}

export default App;
