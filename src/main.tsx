import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import { Scene } from './components/three/Scene'
import { Canvas } from '@react-three/fiber'

const root = createRoot(document.getElementById('root')!)
root.render(
    <StrictMode>
        <Canvas
            dpr={[1, 2]}
            className='r3f'
            camera={{
                fov: 45,
                near: 0.2,
                far: 2000,
                position: [-3, 0.9, 5],
            }}
        >
            <Scene />
        </Canvas>
    </StrictMode>
)
