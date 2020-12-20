import MyDescription from '@/components/MyDescription'
import WhoAmI from "@/components/WhoAmI";

export const routes = [
  {
    path: '/',
    component: WhoAmI
  },
  {
    path: '/myDescription',
    name: 'MyDescription',
    component: MyDescription
  }
]
