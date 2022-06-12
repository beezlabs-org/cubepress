import axiosInstance from '../axiosInstance'
import { sampleRoutes } from '../route'

const getSample = () => {
  return axiosInstance.get(sampleRoutes.getSample())
}

export const userApi = { getSample }
