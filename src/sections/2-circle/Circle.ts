import * as THREE from 'three';
import Entity from '~/internal/Entity';
import fragmentShader from '~/assets/shaders/circle.frag';
import vertexShader from '~/assets/shaders/default.vert';

export class Circle extends Entity {
  geometry: THREE.PlaneBufferGeometry;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;

  start() {
    this.geometry = new THREE.PlaneBufferGeometry(2, 2);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: {
          value: 0,
        },
      },
      fragmentShader,
      vertexShader,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.app.scene.add(this.mesh);
  }

  update(delta: number) {
    const elapsedTime = this.app.clock.getElapsedTime();

    this.material.uniforms.time.value = elapsedTime;
  }
}
