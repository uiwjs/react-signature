import React, { Fragment } from 'react';
import { getStroke } from 'perfect-freehand';
import { useStore } from './store';
import { useOptionStore } from './options';
import { getSvgPathFromStroke } from './utils';

export const Paths = () => {
  const data = useStore();
  return (
    <Fragment>
      {Object.keys(data).map((key, index) => (
        <CreatePath key={key} keyName={key} index={index} data={data[key]} />
      ))}
    </Fragment>
  );
};

type CreatePathProps = {
  data: number[][];
  keyName: string;
  index: number;
};

const CreatePath = ({ data = [], index, keyName }: CreatePathProps) => {
  const { renderPath, container, ...options } = useOptionStore();
  const stroke = getStroke(data, options);
  const pathData = getSvgPathFromStroke(stroke);
  const dom = renderPath ? renderPath(pathData, keyName, data, index, container as unknown as SVGSVGElement) : null;
  if (dom) return dom;
  return <path d={pathData} />;
};
