import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import MainLayout from '../components/layout/MainLayout'
import { BreadcrumbsWithIcon } from '../components/shared/Breadcrumbs'
import InputText from '../components/ui/InputText'
import TextArea from '../components/ui/TextArea'
import SelectOption from '../components/ui/SelectOption'
import InputImages from '../components/ui/InputImages'
import { NavLink, useParams } from 'react-router-dom'
import InputTags from '../components/ui/InputTags'
import useGetStoriesById from '../services/api/stories/useGetStoriesById'

const TABLE_HEAD = ["Title", "Last Updated"];


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
    name: "Detail",
  },
]

const StoryDetail = () => {
  const { id } = useParams()
  const { data: fetchedData, loading } = useGetStoriesById(id)

  return (
    <MainLayout>
      {!loading ? (
        <div className='h-full w-full'>
          <Card>
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className='flex justify-between items-center'>
                <Typography variant="h5" color="blue-gray">
                  Detail Story
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
                    value={fetchedData.title}
                    name="title"
                    disabled={true}
                  />

                  <InputText
                    label="Writer Name"
                    placeholder="your name or username"
                    name="writer"
                    value={fetchedData.writer}
                    disabled={true}
                  />
                </div>
                <div className='mb-3'>
                  <TextArea label="Synopsis" name="synopsis" value={fetchedData.synopsis} disabled={true} />
                </div>
                <div className="mb-3 flex gap-6">
                  <SelectOption
                    label="Category"
                    options={categoryOption}
                    value={fetchedData.category}
                    disabled={true}
                  />
                  <div className='w-full'>
                    <InputTags label="Keyword or Tags" name="tags" value={fetchedData.tags} disabled={true} />
                  </div>
                </div>
                <div className="mb-3 flex gap-6">
                  <InputImages label="Cover Image" value={fetchedData.cover} disabled={true} />
                  <SelectOption
                    label="Status"
                    value={fetchedData.status}
                    options={statusOption}
                    disabled={true}
                  />
                </div>
              </div>
            </CardBody>
            <hr className='font-bold h-[2px] bg-gray-400' />
            <CardFooter>
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
                    {fetchedData.length ? fetchedData.map(
                      ({ title, date }, index) => {
                        const isLast = index === fetchedData.length - 1;
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
                          </tr>
                        );
                      },
                    ) : (
                      <tr>
                        <td colSpan={2} className='border text-center py-3'>There are no story chapters yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardFooter>
          </Card>
          <div className='mt-5 flex justify-end gap-3'>
            <NavLink to="/story">
              <Button size='sm' variant='gradient'>Back</Button>
            </NavLink>
          </div>
        </div>
      ) : (
        <p>loading..</p>
      )}

    </MainLayout>
  )
}

export default StoryDetail