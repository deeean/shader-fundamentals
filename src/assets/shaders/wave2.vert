precision mediump float;

uniform float time;

varying vec2 vUv;

void main()	{
    vUv = uv;

    vec4 wavePosition = vec4(0.0, 0.0, 0.0, 0.0);
    wavePosition.x = sin(position.y * 2.0 + time * 5.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0) + wavePosition;
}