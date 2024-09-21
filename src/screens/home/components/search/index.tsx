import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { SearchFormModel } from './types'
import ControlledSearchInput from 'src/components/controlledSearchInput'
import { TagsEnum } from 'src/data/types'
import { useNavigate } from 'src/hooks'

const HomeSearch = () => {
  const navigation = useNavigate()

  const methods = useForm<SearchFormModel>()
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<SearchFormModel> = (data) =>
    navigation.navigate('Doctors Display', { category: TagsEnum.All, name: data.query })

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
