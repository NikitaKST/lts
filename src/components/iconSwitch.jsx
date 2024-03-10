/* eslint-disable react/prop-types */
export default function IconSwitch({icon, onSwitch}) {
  return (
    <div className="icon-menu__wrap">
      <span className="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  );
}