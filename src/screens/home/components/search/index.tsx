import { FormProvider, useForm } from 'react-hook-form'
import ControlledTextInput from 'src/components/custom/controlledTextInput'
import { SearchFormModel } from './types'

const HomeSearch = () => {
  const methods = useForm<SearchFormModel>()
  const { watch } = methods

  const watchSearchInput = watch('query')
  // TODO: query to filter therapists

  return (
    <FormProvider {...methods}>
      <ControlledTextInput fieldName="query" type="secondary" iconType="search" placeholderText="Search ..." />
    </FormProvider>
  )
}

export default HomeSearch
