import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

export function NavbarSimple() {

  return (
    <Navbar className="min-w-full px-6 py-2 mb-2 shadow-md">
      <div className="flex items-center justify-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          StoryKu
        </Typography>
      </div>
    </Navbar>
  );
}