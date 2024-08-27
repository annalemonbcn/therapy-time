import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { SearchFormModel } from './types'
import ControlledSearchInput from 'src/components/controlledSearchInput'

const DoctorsDisplaySearch = ({ handleSearch }: { handleSearch: (name: string) => void }) => {
  const methods = useForm<SearchFormModel>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<SearchFormModel> = (data) => handleSearch(data.query)

  return (
    <FormProvider {...methods}>
      <ControlledSearchInput
        fieldName="query"
        type="secondary"
        placeholderText="Search doctor ..."
        triggerSend={handleSubmit(onSubmit)}
      />
    </FormProvider>
  )
}

export default DoctorsDisplaySearch
