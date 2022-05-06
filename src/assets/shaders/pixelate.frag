precision mediump float;

uniform float time;
uniform sampler2D channel;

varying vec2 vUv;

void main() {
    vec2 st = vUv;
    float pixels = 30.0;

    st = ceil(st * pixels) / pixels;

    gl_FragColor = texture2D(channel, st);
}