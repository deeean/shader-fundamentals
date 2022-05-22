import * as THREE from 'three';
import Entity from '~/internal/Entity';
import fragmentShader from '~/assets/shaders/default.frag';
import vertexShader from '~/assets/shaders/wave2.vert';

export class Wave2 extends Entity {
  geometry: THREE.PlaneBufferGeometry;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;

  async start() {
    this.geometry = new THREE.PlaneBufferGeometry(2, 2, 10, 50);

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
