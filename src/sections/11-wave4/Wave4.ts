import * as THREE from 'three';
import Entity from '~/internal/Entity';
import fragmentShader from '~/assets/shaders/default.frag';
import vertexShader from '~/assets/shaders/wave4.vert';

export class Wave4 extends Entity {
  geometry: THREE.SphereBufferGeometry;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;

  async start() {
    this.geometry = new THREE.SphereBufferGeometry(1, 128, 128);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 0,
        },
        channel: {
          value: null,
        },
      },
      fragmentShader,
      vertexShader,
      transparent: true,
      wireframe: true,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.app.scene.add(this.mesh);
  }

  update(delta: number) {
    const elapsedTime = this.app.clock.getElapsedTime();

    this.material.uniforms.time.value = elapsedTime;
  }
}
