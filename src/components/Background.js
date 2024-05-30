import React, { useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
  useEffect(() => {
    let scene, camera, renderer;
    let stars, starGeo;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();
      let positions = new Float32Array(6000 * 3);

      for (let i = 0; i < 6000; i++) {
        positions[i * 3] = Math.random() * 600 - 300;
        positions[i * 3 + 1] = Math.random() * 600 - 300;
        positions[i * 3 + 2] = Math.random() * 600 - 300;
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      let sprite = new THREE.TextureLoader().load('/star.png');
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
        transparent: true
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener('resize', onWindowResize, false);

      animate();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      let positions = starGeo.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.2;

        if (positions[i + 1] < -200) {
          positions[i + 1] = 200;
        }
      }

      starGeo.attributes.position.needsUpdate = true;
      stars.rotation.y += 0.002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    init();
  }, []);

  return null;
};

export default Background;
