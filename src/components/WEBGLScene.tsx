import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

const Wave = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const mesh = meshRef.current;
    const geometry = mesh.geometry as THREE.PlaneGeometry;

    const position = geometry.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < position.count; i++) {
      vertex.fromBufferAttribute(position, i);
      vertex.z = Math.sin(vertex.x * 2 + time * 2) * 0.3;
      position.setZ(i, vertex.z);
    }

    position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <meshStandardMaterial color="#3ecf8e" wireframe />
    </mesh>
  );
};

const WaveScene = () => {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[1, 2, 2]} intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Wave />
    </Canvas>
  );
};

export default WaveScene;