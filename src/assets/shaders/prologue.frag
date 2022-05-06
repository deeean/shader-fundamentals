precision mediump float;

varying vec2 vUv;

void main() {
  vec2 st = vUv;
  gl_FragColor = vec4(st.x, st.y, 1.0, 1.0);
}