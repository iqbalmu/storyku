import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import MainLayout from '../components/layout/MainLayout'
import { BreadcrumbsWithIcon } from '../components/shared/Breadcrumbs'
import InputText from '../components/ui/InputText'
import TextArea from '../components/ui/TextArea'
import SelectOption from '../components/ui/SelectOption'
import InputImages from '../components/ui/InputImages'
import { NavLink, useParams } from 'react-router-dom'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'
import InputTags from '../components/ui/InputTags'
import { useEffect, useState } from 'react'
import useGetStoriesById from '../services/api/stories/useGetStoriesById'

const TABLE_HEAD = ["Title", "Last Updated", "Action"];


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
    name: "Edit",
  },
]

const StoryEdit = () => {
  const [form, setForm] = useState()
  const { id } = useParams()
  const { data: fetchedData, loading } = useGetStoriesById(id)
  const [data, setData] = useState(fetchedData)

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
  }

  console.log("Form : ", form);

  useEffect(() => {
    if(!loading){
      setData(fetchedData)
    }
  }, [fetchedData])

  return (
    <MainLayout>
      {!loading ? (
        <div className='h-full w-full'>
          <Card>
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className='flex justify-between items-center'>
                <Typography variant="h5" color="blue-gray">
                  Edit Story
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
                    value={data && data.title}
                    name="title"
                    onchange={handleInputChange}
                  />
                  <InputText
                    label="Writer Name"
                    placeholder="your name or username"
                    name="writer"
                    value={data && data.writer}
                    onchange={handleInputChange}
                  />
                </div>
                <div className='mb-3'>
                  <TextArea label="Synopsis" name="synopsis" onchange={handleInputChange} value={data && data.synopsis} />
                </div>
                <div className="mb-3 flex gap-6">
                  <SelectOption
                    label="Category"
                    options={categoryOption}
                    value={data && data.category}
                    onchange={(value) => { handleSelectChange("category", value) }}
                  />
                  <div className='w-full'>
                    <InputTags items={handleInputTags} label="Keyword or Tags" name="tags" value={data && data.tags} />
                  </div>
                </div>
                <div className="mb-3 flex gap-6">
                  <InputImages label="Cover Image" onchange={handleInputImages} value={data && data.cover} />
                  <SelectOption
                    label="Status"
                    value={data && data.status}
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
                    {data && data.length ? data && data.map(
                      ({ title, date }, index) => {
                        const isLast = index === data && data.length - 1;
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
      ) : (
        <p>loading..</p>
      )}

    </MainLayout>
  )
}

export default StoryEdit