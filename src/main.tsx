import React from 'react';
import ReactLayaRenderer from './react-laya/index';

import Integral from './components/Integral';

const { Stage, Handler, Sprite } = Laya;

function App() {
  let stage;
  // Laya.Config.isAntialias = true;
  Laya.init(1334, 750, Laya.WebGL);
  stage = Laya.stage;
  stage.scaleMode = Stage.SCALE_FIXED_AUTO;
  stage.alignH = Stage.ALIGN_CENTER;
  stage.alignV = Stage.ALIGN_MIDDLE;
  stage.screenMode = Stage.SCREEN_HORIZONTAL;

  Laya.Stat.show();

  // ScenseManager.loadScense('/integral');
  ReactLayaRenderer.render(<Integral/>, stage);
};

window.addEventListener('DOMContentLoaded', App);