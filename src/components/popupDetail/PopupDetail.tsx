import './popupDetail.scss';

const PopupDetail = ({
  detail,
  visible,
}: {
  detail: { title: string; plot: string; year: string; director: string[] };
  visible: boolean;
}) => {
  const { title, plot, year, director } = detail;
  return (
    <div className={visible ? 'details visible' : 'details'}>
      <h1 className="popup-text detailTitle">{title}</h1>
      <p className="popup-text detailDesc">{plot}</p>
      <p className="popup-text detailYear">{year}</p>
      <p className="popup-text detailDirectors">{director.join(', ')}</p>
    </div>
  );
};

export default PopupDetail;
