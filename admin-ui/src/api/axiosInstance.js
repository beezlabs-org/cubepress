// Requires axios as a dependency. Uncomment if HTTP calls are needed to be made
// import axios from 'axios'
// Uncomment if authentication is needed
// import Vue from 'vue'
// import { InteractionRequiredAuthError } from '@azure/msal-browser'

// Requires axios as a dependency. Uncomment if HTTP calls are needed to be made
// let baseURL = process.env.VUE_APP_API_ENDPOINT
// const axiosInstance = axios.create({ baseURL })

// Uncomment if authentication is needed
// axiosInstance.interceptors.request.use(async (config) => {
//   const authService = Vue.prototype.$auth
//
//   let token
//   if (authService.user) {
//     let account = authService.msalClient.getAccountByHomeId(authService.user.homeAccountId)
//     let request = {
//       account,
//       scopes: [process.env.VUE_APP_SCOPE, process.env.VUE_APP_NOTIFICATION_SCOPE]
//     }
//     try {
//       token = await authService.msalClient.acquireTokenSilent(request)
//     } catch (err) {
//       if (err instanceof InteractionRequiredAuthError) {
//         token = await authService.msalClient.acquireTokenPopup(request)
//       }
//     }
//   }
//   config.headers['Authorization'] = `Bearer ${token.accessToken}`
//   return config
// })

// Requires axios as a dependency. Uncomment if HTTP calls are needed to be made
// export default axiosInstance
