import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const useGetUuid = () => useSelector((state: RootState) => state.user.user.basicInfo.uuid)

const useGetUserLocation = () => useSelector((state: RootState) => state.user.user.basicInfo.location.address)

const useGetUserEmail = () => useSelector((state: RootState) => state.user.user.basicInfo.email)

export { useGetUuid, useGetUserLocation, useGetUserEmail }
