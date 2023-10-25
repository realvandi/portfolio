import {Button} from '@nextui-org/button'; 
import Image from 'next/image'
import AlvandiInteractiveTest from './AlvandiInteractiveTest';
import MyComponent from './MyComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AlvandiInteractiveTest/>
      <MyComponent/>
    </main>
  )
}
