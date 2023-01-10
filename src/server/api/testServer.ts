interface Res {
  fileSizeBytes: number
  url: string
}
export default defineEventHandler(async () => {
  const res = await fetch('https://v1.jinrishici.com/all.json')
  const json = await res.json() as Res
  return { data: json }
})
