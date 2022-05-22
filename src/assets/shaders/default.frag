precision mediump float;

uniform float time;

varying vec2 vUv;

const float PI = 3.141592653589793;

void main() {
  vec2 st = vUv;
  gl_FragColor = vec4(st.x, st.y, 1.0, 1.0);
}