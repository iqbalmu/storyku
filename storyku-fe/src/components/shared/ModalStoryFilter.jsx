/* eslint-disable react/prop-types */
import { Button, Card, CardBody, CardFooter, CardHeader, Dialog, Typography } from '@material-tailwind/react'
import SelectOption from '../ui/SelectOption';

const categoryOption = [
  { name: 'technology', value: 'technology' },
  { name: 'comedy', value: 'comedy' }
]

const statusOption = [
  { name: 'draft', value: 'draft' },
  { name: 'publish', value: 'publish' }
]

const ModalStoryFilter = ({ open, handleOpenFilter }) => {
  return (
    <>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpenFilter}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader floated={false} shadow={false} className="rounded-none px-2">
            <Typography variant="h5" color="blue-gray">
              Filter
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div>
              <SelectOption label="Category" options={categoryOption} />
            </div>
            <div>
              <SelectOption label="Status" options={statusOption} />
            </div>
          </CardBody>
          <CardFooter className="pt-0 mt-3 flex justify-between">
            <Button variant="filled" color='blue-gray' size='sm' onClick={handleOpenFilter}>
              Reset
            </Button>
            <div className='flex gap-1'>
              <Button variant="outlined" size='sm' onClick={handleOpenFilter}>
                Cancel
              </Button>
              <Button variant="filled" size='sm' onClick={handleOpenFilter}>
                Filter
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}

export default ModalStoryFilter