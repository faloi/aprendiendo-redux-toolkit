import React from 'react'
import { useAppSelector } from '../../app/hooks'

export interface PostAuthorParams {
  userId: string
}

export const PostAuthor = ({ userId }: PostAuthorParams) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  )

  return <span>by {author ? author.name : 'Unknown author'}</span>
}
