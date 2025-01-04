// eslint-disable-next-line react/prop-types
const SectionTitle = ({ label }) => {
  return (
    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
      {label}
    </h2>
  );
};

export default SectionTitle;
