import Home from '@/components/Home'
import MyDescription from '@/components/MyDescription'
import WhoAmI from "@/components/WhoAmI";

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/myDescription',
    name: 'MyDescription',
    component: MyDescription
  },
  {
    path: '/whoami',
    name: 'whoami',
    component: WhoAmI
  }
]
