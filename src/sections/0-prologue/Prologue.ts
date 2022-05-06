import * as THREE from 'three';
import Entity from '~/internal/Entity';
import fragmentShader from '~/assets/shaders/prologue.frag';
import vertexShader from '~/assets/shaders/default.vert';

export class Prologue extends Entity {
  geometry: THREE.PlaneBufferGeometry;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;

  start() {
    this.geometry = new THREE.PlaneBufferGeometry(2, 2);

    this.material = new THREE.ShaderMaterial({
      fragmentShader,
      vertexShader,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.app.scene.add(this.mesh);
  }

  update(delta: number) {}
}
