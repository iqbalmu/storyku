import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import StoryList from './pages/StoryList'
import StoryAdd from './pages/StoryAdd'
import './index.css'
import ChapterAdd from './pages/ChapterAdd'
import TestPage from './pages/TestPage'
import StoryDetail from './pages/StoryDetail'
import StoryEdit from './pages/StoryEdit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/story',
    element: <StoryList />
  },
  {
    path: '/story/add',
    element: <StoryAdd />
  },
  {
    path: '/story/:id/detail',
    element: <StoryDetail />
  },
  {
    path: '/story/:id/edit',
    element: <StoryEdit />
  },
  {
    path: '/story/:id/add-chapter',
    element: <ChapterAdd />
  },
  {
    path: '/test',
    element: <TestPage />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
