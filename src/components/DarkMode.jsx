


const DarkMode = ({getToggle, toggle}) => {
  return (
    <>
      <div
        onClick={getToggle}
        className={toggle ? "toggle-weather" : "toggle-weather dark"}
      >
        <div className="toggle"></div>
      </div>
    </>
  );
};

export default DarkMode;
