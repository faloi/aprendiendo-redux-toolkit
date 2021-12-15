import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export const onInputUpdated =
  (setter: Dispatch<SetStateAction<string>>) =>
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setter(e.target.value)
