import Application from './internal/Application';
import { Prologue } from '~/sections/0-prologue/Prologue';
import { Uniform } from '~/sections/1-uniform/Uniform';
import { Circle } from '~/sections/2-circle/Circle';
import { Rotate } from '~/sections/3-rotate/Rotate';
import { Palette } from '~/sections/4-palette/Palette';

window.addEventListener('load', () => {
  const app = new Application();
  app.addEntity(new Prologue());
  // app.addEntity(new Uniform());
  // app.addEntity(new Circle());
  // app.addEntity(new Rotate());
  // app.addEntity(new Palette());
});
