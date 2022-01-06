/**
 *
 * 3DModel
 *
 */
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLoader } from '@react-three/fiber';
import { MeshNormalMaterial } from 'three';
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
interface Props {}

const ModelLoad = () => {
  const material = new MeshNormalMaterial();
  const object = useLoader(OBJLoader, '/3dmodel.obj');
  object.traverse(child => {
    child.material = material;
  });

  useEffect(() => {
    object.rotateY(Math.PI);
    object.rotateZ(-Math.PI / 15);
  }, []);
  return (
    <primitive object={object} scale={14} position={[0, -2.0, 0]} />
  )
}

export function Model(props: Props) {
  // TODO rotate 3D model with mouse move
  const { t } = useTranslation()
  const { progress } = useProgress()

  // @ts-ignore
  const orbit = <OrbitControls />;
  return (
    <Box>
      <Canvas camera={{ position: [1, 0, 3] }}>
        <Suspense fallback={<Html center>{progress} % {t('loaded', 'загружено')}</Html>}>
          <ModelLoad/>
          {orbit}
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
        </Suspense>
      </Canvas>
    </Box>
  );
}
