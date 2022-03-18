import requests from "@/api/mock";
export const reqGridList = () => requests({
  url: "/grid"
})