import { request } from "@/utils/request";


export const getresutl = () =>
  request({
    url: '/artist/songs',
    method: 'get'
  })