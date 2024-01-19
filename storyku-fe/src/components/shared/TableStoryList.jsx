import { EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Button, Card, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Title", "Writes", "Category", "Tags", "Status", "Action"];

const TABLE_ROWS = [
  {
    title: "John Michael",
    writes: "Manager",
    category: "Technology",
    tags: ["satu", "dua"],
    status: "draft"
  },
  {
    title: "Alexa Liras",
    writes: "Developer",
    category: "Technology",
    tags: ["satu", "dua"],
    status: "draft"
  },
  {
    title: "Laurent Perrier",
    writes: "Executive",
    category: "Technology",
    tags: ["satu", "dua"],
    status: "draft"
  },
  {
    title: "Michael Levi",
    writes: "Developer",
    category: "Technology",
    tags: ["satu", "dua"],
    status: "draft"
  },
  {
    title: "Richard Gran",
    writes: "Manager",
    category: "Technology",
    tags: ["satu", "dua"],
    status: "draft"
  },
];

const TableStoryList = () => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ title, writes, category, tags, status }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {title}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {writes}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {category}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {tags}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {status}
                </Typography>
              </td>
              <td className="p-4">
                <Menu placement="bottom-end">
                  <MenuHandler>
                    <IconButton variant="text">
                      <EllipsisHorizontalCircleIcon className="w-5" color="gray"/>
                    </IconButton>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>View</MenuItem>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default TableStoryList