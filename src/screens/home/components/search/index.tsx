import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { SearchFormModel } from './types'
import ControlledSearchInput from 'src/components/controlledSearchInput'
import { mockTherapists } from 'src/data/mock.data'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from 'src/navigation/homeNavigator/types'

const HomeSearch = () => {
  const navigation = useNavigation<NavigationProp>()

  const methods = useForm<SearchFormModel>()
  const { handleSubmit } = methods

  // TODO: navigate to 'Doctors List' with doctor name
  const onSubmit: SubmitHandler<SearchFormModel> = (data) => console.log('data', data)

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

export default HomeSearch
