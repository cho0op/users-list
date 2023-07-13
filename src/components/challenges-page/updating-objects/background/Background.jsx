const Background = ({ position }) => {
    return (
        <div
            style={{
                position: 'absolute',
                transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
                width: 150,
                height: 150,
                backgroundColor: 'rgba(200, 200, 0, 0.2)',
            }}
        />
    );
};

export default Background;
