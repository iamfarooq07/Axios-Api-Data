import { Button } from "@/components/ui/button";
import ContextApi from "./context/ContextApi";
import Navbar from "./Dashboard/Navbar";

function App() {
  return (
    <div>
      {/* <Button>Click me</Button> */}
      <Navbar />
      <main className="p-6">Content here</main>
      {/* <ContextApi /> */}
    </div>
  );
}

export default App;
