precision mediump float;

uniform float time;

varying vec2 vUv;

void main() {
  vec2 st = vUv;
  gl_FragColor = vec4(st.x, st.y, sin(time), 1.0);
}