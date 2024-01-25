import {
    Float,
    PresentationControls,
    useGLTF,
    Html,
    ContactShadows,
    Resize,
} from '@react-three/drei'

import { Name3d } from './Name3d'
import { useRef } from 'react'
import * as THREE from 'three'

export const Laptop = () => {
    const laptop = useGLTF('cyberpunk_laptop/scene.gltf')

    // const { size, camera, scene } = useThree()
    const laptopRef = useRef<THREE.Mesh>(null!)
    const iframeRef = useRef<HTMLIFrameElement>(null!)

    // // adjust the position and scale of the iframe
    // const updateIframePosition = () => {
    //     if (!laptopRef.current || !iframeRef.current) return

    //     // calculate the new position based on the camera and laptop screen position
    //     const laptopScreen = laptopRef.current
    //     const vector = new THREE.Vector3()
    //     laptopScreen.getWorldPosition(vector)

    //     // convert 3d position to 2d position
    //     vector.project(camera)
    //     vector.x = (vector.x * 0.5 + 0.5) * size.width
    //     vector.y = -(vector.y * 0.5 - 0.5) * size.height

    //     // Update the position of the iframe
    //     iframeRef.current.style.left = `${vector.x}px`
    //     iframeRef.current.style.top = `${vector.y}px`
    // }

    // useEffect(() => {
    //     // const handleResize = () => {
    //     //     //update the position of the HTML component
    //     //     // based on the new size and camera position
    //     // }
    //     window.addEventListener('resize', updateIframePosition)

    //     // initial position update
    //     updateIframePosition()

    //     return () => {
    //         // remove event listener
    //         window.removeEventListener('resize', updateIframePosition)
    //     }
    // }, [size, camera, scene])

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
                    <Resize scale={2}>
                        <primitive
                            object={laptop.scene}
                            position-y={-1}
                            ref={laptopRef}
                        >
                            <Html
                                transform
                                wrapperClass='htmlScreen'
                                distanceFactor={0.7}
                                position={[0, 0.67, -0.8]}
                                rotation={[-0.17, 0, 0]}
                            >
                                <iframe
                                    src='https://samazevedo.dev'
                                    ref={iframeRef}
                                ></iframe>
                            </Html>
                        </primitive>
                        <Name3d />
                    </Resize>
                </Float>
            </PresentationControls>
            {/* <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.7}
                scale={3}
                blur={1}
            ></ContactShadows> */}
        </>
    )
}
