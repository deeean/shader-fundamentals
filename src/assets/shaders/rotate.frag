precision mediump float;

uniform float time;

varying vec2 vUv;

const float PI = 3.141592653589793;
const float HALF_PI = PI * 0.5;
const float TWO_HALF_PI = HALF_PI * 0.5;

mat2 rotate2d(float angle) {
  return mat2(
    cos(angle), -sin(angle),
    sin(angle), cos(angle)
  );
}

void main() {
  vec2 st = vUv;
  vec2 position = vec2(0.5);

  st -= position;
  st *= rotate2d(TWO_HALF_PI);
  st += position;

  vec2 size = vec2(0.25);
  vec2 rect = step(position - size, st) * step(st, position + size);

  float dist = rect.x * rect.y;

  gl_FragColor = vec4(1.0) * dist;
}