import {
    Float,
    PresentationControls,
    useGLTF,
    Html,
    ContactShadows,
} from '@react-three/drei'

import { Name3d } from './Name3d'
import { useRef } from 'react'
import * as THREE from 'three'

export const Laptop = () => {
    const laptop = useGLTF('cyberpunk_laptop/scene.gltf')

    // const { size, camera, scene } = useThree()
    const laptopRef = useRef<THREE.Mesh>(null!)
    const iframeRef = useRef<HTMLIFrameElement>(null!)

    return (
        <>
            <PresentationControls
                global
                rotation={[-0.1, 0.2, 0]}
                polar={[-0.3, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <Float rotationIntensity={0.5}>
                    <rectAreaLight
                        width={2.5}
                        height={1.65}
                        intensity={65}
                        color={'#B0E73A'}
                        rotation={[0.1, Math.PI, 0]}
                        position={[0, 0.55, -1.15]}
                    />

                    <primitive
                        object={laptop.scene}
                        position-y={-0.8}
                        ref={laptopRef}
                    >
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={0.48}
                            position={[0.05, 0.85, -0.9]}
                            rotation={[-0.17, 0.02, 0]}
                            scale={1.5}
                        >
                            <iframe
                                src='https://samazevedo.dev'
                                ref={iframeRef}
                            ></iframe>
                        </Html>
                    </primitive>
                    <Name3d />
                </Float>
            </PresentationControls>
            <ContactShadows
                position={[0, -1.4, 0]}
                opacity={0.4}
                scale={3}
                blur={0.9}
            ></ContactShadows>
        </>
    )
}
