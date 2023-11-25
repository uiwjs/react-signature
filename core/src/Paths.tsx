import React, { Fragment } from 'react';
import { getStroke } from 'perfect-freehand';
import { useStore } from './store';
import { useOptionStore } from './options';
import { getSvgPathFromStroke } from './utils';

export const Paths = () => {
  const { options, ...data } = useStore();
  return (
    <Fragment>
      {Object.keys(data).map((key) => (
        <CreatePath key={key} keyName={key} data={data[key]} />
      ))}
    </Fragment>
  );
};

type CreatePathProps = {
  data: number[][];
  keyName: string;
};

const CreatePath = ({ data = [], keyName }: CreatePathProps) => {
  const { renderPath, ...options } = useOptionStore();
  const stroke = getStroke(data, options);
  const pathData = getSvgPathFromStroke(stroke);
  const dom = renderPath ? renderPath(pathData, keyName, data) : null;
  if (dom) return dom;
  return (
    <Fragment>
      <path d={pathData} />
    </Fragment>
  );
};
