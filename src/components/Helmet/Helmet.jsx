const Helmet = (props) => {
  document.title = "Multimart-" + props.title;
  return <div className="w-full">{props.children}</div>;
};

export default Helmet;
