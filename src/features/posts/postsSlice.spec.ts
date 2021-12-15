import postsReducer, { postAdded, Post } from './postsSlice'

describe('posts reducer', () => {
  const initialState: Post[] = []

  it('should handle initial state', () => {
    expect(postsReducer(undefined, { type: 'unknown' })).toEqual([
      { id: '1', title: 'First Post!', content: 'Hello!' },
      { id: '2', title: 'Second Post', content: 'More text' },
    ])
  })

  it('should handle postAdded', () => {
    const actual = postsReducer(
      initialState,
      postAdded({ id: 'abc123', title: '¡Hola!', content: '¿Cómo estás?' })
    )
    expect(actual).toHaveLength(1)
  })
})
