const dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background: yellow;
          }
        `}
      </style>
      <div className="dummy">dummy</div>
    </>
  );
};
export default dummy;
