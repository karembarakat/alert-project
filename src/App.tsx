import Alert from "./components/ui/Alert/Alert"
import { BellRing } from 'lucide-react';
function App() {

  return (
    <div className="app-wrapper">

      <Alert type={"alert-default"} icon={<BellRing />} title={"hello"}>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas. <a href="">Link Is here</a>
        </p>
      </Alert>
      <Alert type={"alert-info"} icon={<BellRing />} title={"hello"} desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas." />
      <Alert type={"alert-warning"} icon={<BellRing />} title={"hello"} desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas." />
      <Alert type={"alert-success"} icon={<BellRing />} title={"hello"} desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas." />
      <Alert type={"alert-error"} icon={<BellRing />} title={"hello"} desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas." />
    </div>
  )
}

export default App
