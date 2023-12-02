import React, { useEffect } from 'react';
import { getStroke } from 'perfect-freehand';
import { useStore } from '../store';
import { useOptionStore } from '../options';
import { getSvgPathFromStroke } from '../utils';

export const Paths = () => {
  const data = useStore();
  const { container, ...option } = useOptionStore();

  const canvas = container as unknown as HTMLCanvasElement;
  const ctx = canvas?.getContext('2d');
  useEffect(() => {
    if (!canvas) return;
    if (ctx) {
      ctx?.clearRect(0, 0, canvas.width || 0, canvas.height || 0);
    }
    Object.keys(data).forEach((key, index) => {
      const stroke = getStroke(data[key], option);
      const pathData = getSvgPathFromStroke(stroke);
      if (ctx) {
        const myPath = new Path2D(pathData);
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.fill(myPath);
      }
    });
  }, [data, canvas, option]);
  return null;
};
