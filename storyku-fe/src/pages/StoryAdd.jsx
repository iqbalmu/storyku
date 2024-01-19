import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import MainLayout from '../components/layout/MainLayout'
import { BreadcrumbsWithIcon } from '../components/shared/Breadcrumbs'
import InputText from '../components/ui/InputText'
import TextArea from '../components/ui/TextArea'
import SelectOption from '../components/ui/SelectOption'
import InputImages from '../components/ui/InputImages'
import { NavLink } from 'react-router-dom'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'
import InputTags from '../components/ui/InputTags'
import { useState } from 'react'
import useStoreStories from '../services/api/stories/useStoreStories'

const TABLE_HEAD = ["Title", "Last Updated", "Action"];

const TABLE_ROWS = [
  {
    title: "John Michael",
    date: "23/04/18",
  },
  {
    title: "Alexa Liras",
    date: "23/04/18",
  },
  {
    title: "Laurent Perrier",
    date: "19/09/17",
  },
];


const categoryOption = [
  { name: 'technology', value: 'technology' },
  { name: 'comedy', value: 'comedy' }
]

const statusOption = [
  { name: 'draft', value: 'draft' },
  { name: 'publish', value: 'publish' }
]

const breadItems = [
  {
    name: "Story",
    path: "/story"
  },
  {
    name: "Add",
    path: "/story/add"
  },
]

const StoryAdd = () => {
  const [form, setForm] = useState()
  // eslint-disable-next-line no-unused-vars
  const { response, error, loading } = useStoreStories(form)
  const [data, setData] = useState({
    title: undefined,
    writer: undefined,
    synopsis: undefined,
    category: undefined,
    tags: undefined,
    cover: undefined,
    status: undefined,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInputTags = (value) => {
    setData(prev => ({
      ...prev,
      tags: value.join(",")
    }))
  }

  const handleInputImages = (e) => {

    const images = e.target.files[0]
    setData(prev => ({
      ...prev,
      cover: images
    }))
  }

  const handleSaveStory = () => {
    setForm(data)
    if (form !== undefined) {
      window.location.href = "/story"
    }else{
      console.log('asdhoasd');
    }
  }

  return (
    <MainLayout>
      <div className='h-full w-full'>
        <Card>
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className='flex justify-between items-center'>
              <Typography variant="h5" color="blue-gray">
                Create Story
              </Typography>

              <BreadcrumbsWithIcon items={breadItems} />
            </div>
          </CardHeader>
          <hr className='font-bold h-[2px] bg-gray-400 mt-5' />
          <CardBody>
            <div className="mb-2 -mt-2 w-full">
              <div className="mb-3 flex gap-6">
                <InputText
                  label="Title"
                  placeholder="type your story title"
                  value={data.title}
                  name="title"
                  onchange={handleInputChange}
                />
                <InputText
                  label="Writer Name"
                  placeholder="your name or username"
                  name="writer"
                  value={data.writer}
                  onchange={handleInputChange}
                />
              </div>
              <div className='mb-3'>
                <TextArea label="Synopsis" name="synopsis" onchange={handleInputChange} />
              </div>
              <div className="mb-3 flex gap-6">
                <SelectOption
                  label="Category"
                  options={categoryOption}
                  onchange={(value) => { handleSelectChange("category", value) }}
                />
                <div className='w-full'>
                  <InputTags items={handleInputTags} label="Keyword or Tags" name="tags" />
                </div>
              </div>
              <div className="mb-3 flex gap-6">
                <InputImages label="Cover Image" onchange={handleInputImages} />
                <SelectOption
                  label="Status"
                  options={statusOption}
                  onchange={(value) => { handleSelectChange("status", value) }}
                />
              </div>
            </div>
          </CardBody>
          <hr className='font-bold h-[2px] bg-gray-400' />
          <CardFooter>
            <div className='flex justify-end mb-4'>
              <NavLink to="/story/id/add-chapter">
                <Button size='sm'>
                  Add Chapter
                </Button>
              </NavLink>
            </div>
            <div>
              <table className="w-full min-w-max table-auto text-left">
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
                  {TABLE_ROWS.length ? TABLE_ROWS.map(
                    ({ title, date }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <div className="w-max">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {title}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="w-max">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {date}
                              </Typography>
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
                                <MenuItem>View</MenuItem>
                                <MenuItem>Edit</MenuItem>
                                <MenuItem>Delete</MenuItem>
                              </MenuList>
                            </Menu>
                          </td>
                        </tr>
                      );
                    },
                  ) : (
                    <tr>
                      <td colSpan={3} className='border text-center py-3'>There are no story chapters yet</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardFooter>
        </Card>
        <div className='mt-5 flex justify-end gap-3'>
          <NavLink to="/story">
            <Button size='sm' variant='outlined'>Cancel</Button>
          </NavLink>
          <Button size='sm' onClick={handleSaveStory}>Save</Button>
        </div>
      </div>
    </MainLayout>
  )
}

export default StoryAdd