import { Text3D } from '@react-three/drei'

export const Name3d = () => {
    return (
        <>
            <Text3D
                font='/fonts/inter/bold.json'
                position={[1.4, -0.1, -0.7]}
                rotation-y={-1.5}
                scale={0.5}
                curveSegments={30}
                bevelEnabled
                bevelThickness={0.25}
                letterSpacing={-0.15}
            >
                Sam
                <meshNormalMaterial />
            </Text3D>
            <Text3D
                font='/fonts/inter/bold.json'
                position={[1.4, -0.65, -0.7]}
                rotation-y={-1.5}
                scale={0.5}
                curveSegments={30}
                bevelEnabled
                bevelThickness={0.25}
                letterSpacing={-0.15}
            >
                Azevedo
                <meshNormalMaterial />
            </Text3D>
        </>
    )
}
