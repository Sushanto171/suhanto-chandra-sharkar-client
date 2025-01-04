import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="bg-background">
      <div className="max-w-screen-lg px-1 md:px-2 py-2 lg:px-0 mx-auto">
        {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string.isRequired,
};

export default Container;