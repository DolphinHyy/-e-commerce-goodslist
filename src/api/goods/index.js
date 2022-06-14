import client from "../../utils/request";

export function getGoodsList() {
  return client.get('/list')
}

export function getCateList() {
  return client.get('/cate')
}

export async function getScrollGoodsList(nextId) {
  const res = await client.get('/list')
  await new Promise((resolve) => setTimeout(() => {
    resolve(1)
  }, 1000))
  return {
    list: res
  }
}
