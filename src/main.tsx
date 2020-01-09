import React from 'react';
import ReactLayaRenderer from './react-laya/index';

import App from './App';

const { Stage, Handler, Sprite } = Laya;

function main() {
  Laya.init(1334, 750, Laya.WebGL);
  const stage = Laya.stage;
  stage.scaleMode = Stage.SCALE_FIXED_AUTO;
  stage.alignH = Stage.ALIGN_CENTER;
  stage.alignV = Stage.ALIGN_MIDDLE;
  stage.screenMode = Stage.SCREEN_HORIZONTAL;

  Laya.Stat.show();

  ReactLayaRenderer.render(<App/>, stage);
};

window.addEventListener('DOMContentLoaded', main);