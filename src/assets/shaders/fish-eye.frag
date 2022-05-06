precision mediump float;

uniform float time;
uniform sampler2D channel;

varying vec2 vUv;


void main() {
    vec2 st = vUv;
    st -= 0.5;
    float dist = length(st);
    float angle = atan(st.y, st.x);

    vec2 newUv = vec2(cos(angle), sin(angle)) * pow(dist, 1.5);
    newUv += 0.5;

    gl_FragColor = texture2D(channel, newUv);
}