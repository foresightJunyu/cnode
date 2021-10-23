import { AxiosStatic, AxiosRequestConfig, AxiosResponse } from 'axios'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.svg' {
  const content: string
  export default content
}
declare module 'vue/types/vue' {
// 3. 声明为 Vue 补充的东西
  interface Vue {
    $axios: AxiosStatic
  }
}
// theFileYouDeclaredTheCustomConfigIn.ts
declare module 'axios' {
  export interface AxiosRequestConfig {
    page: number,
    limit: number
  }
}
