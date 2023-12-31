const date = new Date()

export const currenYear = date.getFullYear()
export const currenMonth =
  date.getMonth().toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
export const currenDay =
  date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate()

export const currentDate = `${currenYear}-${currenMonth}-${currenDay}`

export const formatDate = (currenYear: number, currenMonth: number, currenDay: number) =>
  `${currenYear}-${currenMonth}-${currenDay}`
