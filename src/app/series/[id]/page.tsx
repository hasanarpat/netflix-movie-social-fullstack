import './page.scss';

const SingleSeries = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  console.log(id);
  return <div className="singleSeries"></div>;
};

export default SingleSeries;
