precision mediump float;

uniform float time;
uniform sampler2D channel;

varying vec2 vUv;

void main() {
    vec2 st = vUv;

    gl_FragColor = texture2D(channel, st);
}