import { useState } from "react";
import ModalStoryFilter from "../components/shared/ModalStoryFilter";
import { Button } from "@material-tailwind/react";

const TestPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpenFilter = () => setOpen((cur) => !cur)

  return (
    <div className="App">
      <Button onClick={handleOpenFilter}>Sign In</Button>
      <ModalStoryFilter open={open} handleOpenFilter={handleOpenFilter} />
    </div>
  );
}

export default TestPage