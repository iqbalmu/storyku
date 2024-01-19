import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import MainLayout from '../components/layout/MainLayout'
import { BreadcrumbsWithIcon } from '../components/shared/Breadcrumbs'
import InputText from '../components/ui/InputText'
import Editor from '../components/shared/Editor'

const ChapterAdd = () => {

  const breadItems = [
    {
      name: "Story",
      path: "/story"
    },
    {
      name: "Add",
      path: "/story/add"
    },
    {
      name: "New Chapter",
      path: "/story/id/add-chapter"
    },
  ]

  return (
    <MainLayout>
      <div className='w-full h-full'>
        <Card className='pb-5'>
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className='flex justify-between items-center'>
              <Typography variant="h5" color="blue-gray">
                Create New Chapter
              </Typography>
              <BreadcrumbsWithIcon items={breadItems} />
            </div>
          </CardHeader>

          <CardBody>
            <InputText label="Title" placeholder="type your story title" />
            <div className='mt-4'>              
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Story
              </Typography>              
              <Editor />
            </div>
          </CardBody>
        </Card>

        <div className='mt-5 flex justify-end gap-3'>
          <Button size='sm' variant='outlined'>Cancel</Button>
          <Button size='sm'>Save</Button>
        </div>
      </div>
    </MainLayout>
  )
}

export default ChapterAdd