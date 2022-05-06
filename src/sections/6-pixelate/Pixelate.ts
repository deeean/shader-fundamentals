import * as THREE from 'three';
import Entity from '~/internal/Entity';
import fragmentShader from '~/assets/shaders/pixelate.frag';
import vertexShader from '~/assets/shaders/default.vert';
import baboon from '~/assets/textures/baboon.png';

export class Pixelate extends Entity {
  geometry: THREE.PlaneBufferGeometry;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;

  async start() {
    this.geometry = new THREE.PlaneBufferGeometry(2, 2);

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
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.app.scene.add(this.mesh);

    const texture = await new THREE.TextureLoader().loadAsync(baboon);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.NearestFilter;

    this.material.uniforms.channel.value = texture;
  }

  update(delta: number) {
    const elapsedTime = this.app.clock.getElapsedTime();

    this.material.uniforms.time.value = elapsedTime;
  }
}
