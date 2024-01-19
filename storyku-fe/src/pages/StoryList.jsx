import {
  MagnifyingGlassIcon,
  FunnelIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import MainLayout from '../components/layout/MainLayout'
import { useEffect, useState } from "react";
import ModalStoryFilter from "../components/shared/ModalStoryFilter";
import useGetStories from "../services/api/stories/useGetStories";
import useDeleteStories from "../services/api/stories/useDeleteStories";

const TABLE_HEAD = ["Title", "Writes", "Category", "Tags", "Status", "Action"];

const StoryList = () => {
  const { data, error, loading } = useGetStories()
  const { deleteItem } = useDeleteStories()
  const [open, setOpen] = useState(false);
  const handleOpenFilter = () => setOpen((cur) => !cur)
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredData = data && data.filter(item => {
      return (
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredData);
  }, [data, query]);

  const handleInputSearch = event => {
    setQuery(event.target.value);
  };

  if (error) return <p>Somethine error</p>

  return (
    <MainLayout>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Story List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                List of stories you have created
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-4 sm:flex-row items-center">
              <div className="w-full md:w-64">
                <Input
                  label="search"
                  placeholder="type category or name"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  onChange={handleInputSearch}
                />
              </div>
              <IconButton variant="outlined" className="rounded-full" size="sm" onClick={handleOpenFilter}>
                <FunnelIcon className="h-5 w-5" />
              </IconButton>
              <NavLink to="/story/add" className="flex items-center gap-3">
                <Button size="sm">
                  Add Story
                </Button>
              </NavLink>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {!loading ? searchResults && searchResults.map(
                ({ id, title, writer, category, tags, status }, index) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <NavLink to={`/story/${id}/detail`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold hover:underline"
                            >
                              {title.substring(0, 30)}...
                            </Typography>
                          </NavLink>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {writer}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {category}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={tags}
                            color={"blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={status}
                            color={status ? "publish" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Menu placement="bottom-end">
                          <MenuHandler>
                            <IconButton variant="text">
                              <EllipsisHorizontalCircleIcon className="w-6" />
                            </IconButton>
                          </MenuHandler>
                          <MenuList>
                            <NavLink to={`/story/${id}/detail`}>
                              <MenuItem>View</MenuItem>
                            </NavLink>
                            <NavLink to={`/story/${id}/edit`}>
                              <MenuItem>Edit</MenuItem>
                            </NavLink>
                            <MenuItem onClick={() => { deleteItem(id) }}>Delete</MenuItem>
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  );
                },
              ) : (
                <p>loading...</p>
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      <ModalStoryFilter open={open} handleOpenFilter={handleOpenFilter} />

    </MainLayout>
  )
}

export default StoryList