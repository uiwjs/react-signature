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
        <CreatePath key={key} data={data[key]} />
      ))}
    </Fragment>
  );
};

type CreatePathProps = {
  data: number[][];
};

const CreatePath = ({ data = [] }: CreatePathProps) => {
  const options = useOptionStore();
  const stroke = getStroke(data, options);
  const pathData = getSvgPathFromStroke(stroke);
  return (
    <Fragment>
      <path d={pathData} />
    </Fragment>
  );
};
