import { MouseSensor, useSensor } from '@dnd-kit/core';

const withDragAndDrop = (Component) => {
  const WithDragAndDrop = (props) => {
    const onClickSensor = useSensor(MouseSensor, {
      activationConstraint: { distance: 10 },
      whileActive: ({ e }) => {
        e.stopPropagation();
      },
    });

    return <Component {...props} onClickSensor={onClickSensor} />;
  };

  return WithDragAndDrop;
};

export default withDragAndDrop;