import { FormProvider, useForm } from 'react-hook-form'
import { SearchFormModel } from './types'
import ControlledSearchInput from 'src/components/controlledSearchInput'

const HomeSearch = () => {
  const methods = useForm<SearchFormModel>()
  const { watch } = methods

  const watchSearchInput = watch('query')
  // TODO: query to filter therapists

  return (
    <FormProvider {...methods}>
      <ControlledSearchInput fieldName="query" type="secondary" placeholderText="Search doctor ..." />
    </FormProvider>
  )
}

export default HomeSearch
