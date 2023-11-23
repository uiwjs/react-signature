import React from 'react';
import './styles/index.less';

export interface MonorepoTemplateProps extends React.AllHTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
}

export default function MonorepoTemplate(props: MonorepoTemplateProps = {}) {
  const { className, prefixCls = 'w-template', children, ...others } = props;
  const cls = [className, prefixCls].filter(Boolean).join(' ');
  return (
    <div {...others} className={cls}>
      {children &&
        React.Children.map(children, (child) => {
          if (React.isValidElement(child)) return child;
          return <span> {child} </span>;
        })}
    </div>
  );
}
