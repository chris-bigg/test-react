import "./App.css";
import image from "./img/card-top.jpg";

function Flex() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
          <img className="w-full" src={image} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
          <img className="w-full" src={image} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
          <img className="w-full" src={image} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 text-center max-w-7xl m-auto mb-5">
        <div className="col-start-2 col-span-4 bg-green-300 rounded-lg p-5">
          1
        </div>
        <div className="col-start-1 col-end-3 bg-green-300 rounded-lg p-5">
          2
        </div>
        <div className="col-end-7 col-span-2 bg-green-300 rounded-lg p-5">
          3
        </div>
        <div className="col-start-1 col-end-7 bg-green-300 rounded-lg p-5">
          4
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-7xl m-auto text-center">
        <div className="bg-blue-300 rounded-lg p-5">1</div>
        <div className="bg-blue-300 rounded-lg p-5">2</div>
        <div className="bg-blue-300 rounded-lg p-5">3</div>
        <div className="bg-blue-300 rounded-lg p-5">4</div>
        <div className="col-span-2 bg-blue-300 rounded-lg p-5">5</div>
        <div className="col-span-2 bg-blue-300 rounded-lg p-5">6</div>
        <div className="bg-blue-300 rounded-lg p-5">7</div>
      </div>
    </>
  );
}

export default Flex;
