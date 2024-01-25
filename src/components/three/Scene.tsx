import { Suspense } from 'react'
import { Environment, Sparkles } from '@react-three/drei'
import { Laptop } from './Laptop'

export const Scene = () => {
    return (
        <Suspense fallback={null}>
            <color args={['#2A303A']} attach='background' />
            <Environment preset='city' />
            <Laptop />
            <Sparkles />
        </Suspense>
    )
}
