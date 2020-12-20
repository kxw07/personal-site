import Home from '@/components/Home'
import MyDescription from '@/components/MyDescription'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/myDescription',
    name: 'MyDescription',
    component: MyDescription
  }
]
