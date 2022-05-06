precision mediump float;

uniform float time;

varying vec2 vUv;

const float PI = 3.141592653589793;

void main() {
  vec2 st = vUv;
  float dist = distance(st, vec2(0.5));

  st -= 0.5;

  float angle = atan(st.y, st.x);
  angle += time;

  vec2 newUv = vec2(cos(angle), sin(angle));

  vec4 a = vec4(newUv.x, newUv.y, 1.0, 1.0);
  vec4 b = vec4(1.0, newUv.x, newUv.y, 1.0);

  gl_FragColor = mix(a, b, dist);
}