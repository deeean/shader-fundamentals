# Uniform

유니폼은 간단하게 CPU -> GPU 로 데이터를 전달하는 다리와 같습니다.

유니폼으로 선언한 변수는 셰이더에서 전역변수가 되며 js를 통해 데이터를 주입 할 수 있습니다.

```glsl
uniform vec2 u_resolution;
uniform float u_time;
uniform bool u_focused;
```

다음 예제에서 유니폼을 선언할때 `u_` 를 접두사로 많이 사용합니다.
