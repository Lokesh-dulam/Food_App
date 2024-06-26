/* eslint-disable react/prop-types */
import { CDN_URL,BG_IMG} from "../utils/constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-4 m-3 h-72 border border-gray-100 bg-gray rounded-md  hover:shadow-lg bg-gray-50  ">
      <img
        className="rounded-md"
        src={
          !cloudinaryImageId
            ? BG_IMG
            : CDN_URL + cloudinaryImageId
        }
      />

      <h2 className="text-xl font-semibold py-1">{name}</h2>
      <h3 className="cuisines text-sm text-gray-500 ">{cuisines.join(", ")}</h3>
      <h4 className="distance text-sm">📍 {lastMileTravelString} away</h4>
    </div>
  );
};

export default RestrauntCard;