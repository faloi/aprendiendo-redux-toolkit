import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { RouteComponentProps } from 'react-router'

export interface Post {
  id: string
  title: string
  content: string
  userId: string
}

export type PostRouteParams = RouteComponentProps<{ postId: string }>

const initialState: Post[] = [
  { id: '1', title: 'First Post!', content: 'Hello!', userId: '0' },
  { id: '2', title: 'Second Post', content: 'More text', userId: '1' },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
      },
      // Esta función se usa para que la UI no tenga que settear el id.
      prepare(post: Omit<Post, 'id'>) {
        return {
          payload: {
            id: nanoid(),
            ...post,
          },
        }
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
