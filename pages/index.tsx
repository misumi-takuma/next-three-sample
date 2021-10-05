import type { NextPage } from "next";
import Head from "next/head";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PerspectiveCamera, Stage } from "@react-three/drei";
import styles from "../styles/Home.module.css";
import { boxesArray } from "./logo";
import { boxesArray2 } from "./logo2";
import { PerspectiveCamera as PerspectiveCameraType } from "three";

type Props = {
  position: number[];
  color: string;
  index: number;
};

const Home: NextPage = () => {
  const camera = React.useRef<PerspectiveCameraType>();
  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll = (): void => {
    const scrollValue = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    setScrollY(scrollValue);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  const Box = (props: Props) => {
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const randomNum = props.index / 3;

    // position={new THREE.Vector3(-2.4, -2.4, 2.4)}
    return (
      <mesh
        position={
          new THREE.Vector3(
            props.position[0] +
              (scrollY / 1000) * props.position[0] * randomNum,
            props.position[1] +
              (scrollY / 1000) * props.position[1] * randomNum,
            props.position[2] + (scrollY / 1000) * props.position[2] * randomNum
          )
        }
        scale={active ? 1.5 : 1}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    );
  };

  const Boxes = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state, delta) => {
      meshRef.current.rotation.x = scrollY / 1000;
      meshRef.current.rotation.y = scrollY / 1000;
    });

    return (
      <instancedMesh ref={meshRef}>
        {boxesArray2.map((item, index) => (
          <Box
            key={index}
            position={item.position}
            color={item.color}
            index={index}
          />
        ))}
      </instancedMesh>
    );
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Canvas
          style={{
            width: 100 + "vw",
            height: 100 + "vh",
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <PerspectiveCamera
            ref={camera}
            fov={75}
            position={[0, 0, 12]}
            makeDefault
          />
          <ambientLight />
          <pointLight position={[8, 8, 6]} />
          <Boxes />
        </Canvas>

        <section className={styles.section}>
          <h2>Section1</h2>
        </section>
        <section className={styles.section}>
          <h2>Section2</h2>
        </section>
        <section className={styles.section}>
          <h2>Section3</h2>
        </section>
        <section className={styles.section}>
          <h2>Section4</h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
