import {Button} from '@nextui-org/button'; 
import Image from 'next/image'
import AlvandiInteractiveTest from './AlvandiInteractiveTest';
import MyComponent from './MyComponent';
import { NAVBAR_HEIGHT } from './sizes';

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between p-24 bg-pink-400`} style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}>

    </main>
  )
}
