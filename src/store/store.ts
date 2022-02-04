import { configureStore } from '@reduxjs/toolkit'
import constraintSlice from './slice/constraintSlicer'
import nodeSlice from './slice/nodeSlicer'
import edgeSlice from './slice/edgeSlicer'
import modelSlice from './slice/modelSlicer'

export const store = configureStore({
    reducer: {
        nodes: nodeSlice,
        edges: edgeSlice,
        constraints: constraintSlice,
        model: modelSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch