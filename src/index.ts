import Application from './internal/Application';
import { Prologue } from '~/sections/0-prologue/Prologue';
import { Uniform } from '~/sections/1-uniform/Uniform';
import { Circle } from '~/sections/2-circle/Circle';
import { Rotate } from '~/sections/3-rotate/Rotate';
import { Palette } from '~/sections/4-palette/Palette';
import { Texture } from '~/sections/5-texture/Texture';
import { Pixelate } from '~/sections/6-pixelate/Pixelate';
import { FishEye } from '~/sections/7-fish-eye/FishEye';

window.addEventListener('load', () => {
  const app = new Application();
  /*
   * 진행중인 챕터에따라 주석을 해제하여 사용하시면 됩니다.
   * */

  // app.addEntity(new Prologue());
  // app.addEntity(new Uniform());
  // app.addEntity(new Circle());
  // app.addEntity(new Rotate());
  // app.addEntity(new Palette());
  // app.addEntity(new Texture());
  // app.addEntity(new Pixelate());
  // app.addEntity(new FishEye());
});
