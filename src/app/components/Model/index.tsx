import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@chakra-ui/react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
import { MeshNormalMaterial } from 'three'
import { Html, useProgress } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const ModelLoad = () => {
  const material = new MeshNormalMaterial()
  const object = useLoader(OBJLoader, '/3dmodel.obj')
  object.traverse(child => {
    child.material = material
  })

  useEffect(() => {
    // we have bad model, have to rotate it
    object.rotateY(Math.PI)
    object.rotateZ(-Math.PI / 15)
  }, [object])

  let lastX = window.innerHeight / 2
  let lastY = window.innerWidth / 2

  const rotateModel = event => {
    const middleHeight = window.innerHeight / 2
    const middleWidth = window.innerWidth / 2

    const maxRotationY = Math.PI / 80 // 45 degree
    const maxRotationX = Math.PI / 40 // 22.5 degree

    const verticalRotation =
      (1 - (middleHeight - (event.pageY - lastY)) / middleHeight) * maxRotationY
    const horizontalRotation =
      (1 - (middleWidth - (event.pageX - lastX)) / middleWidth) * maxRotationX
    lastX = event.pageX
    lastY = event.pageY
    object.rotateY(horizontalRotation)
    object.rotateX(-verticalRotation)
  }
  window.addEventListener('mousemove', rotateModel)

  return <primitive object={object} scale={14} position={[0, -2.0, 0]} />
}

export function Model() {
  const { t } = useTranslation()
  const { progress } = useProgress()
  return (
    <Box>
      <Canvas camera={{ position: [1, 0, 3] }}>
        <Suspense
          fallback={
            <Html center>
              {progress} % {t('loaded', 'загружено')}
            </Html>
          }
        >
          <ModelLoad />
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
        </Suspense>
      </Canvas>
    </Box>
  )
}
