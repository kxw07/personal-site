import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import MyDescription from '@/components/MyDescription'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/myDescription',
    name: 'MyDescription',
    component: MyDescription
  }
]
