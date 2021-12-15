import { ChangeEvent, Dispatch, SetStateAction } from 'react'

type ElementWithValue =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement

export const onInputUpdated =
  (setter: Dispatch<SetStateAction<string>>) =>
  (e: ChangeEvent<ElementWithValue>) =>
    setter(e.target.value)
