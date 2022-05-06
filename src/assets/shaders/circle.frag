precision mediump float;

uniform float time;

varying vec2 vUv;

void main() {
  vec2 st = vUv;
  float dist = distance(st, vec2(0.5));
  dist = step(dist, 0.5);

  gl_FragColor = vec4(1.0) * dist;
}