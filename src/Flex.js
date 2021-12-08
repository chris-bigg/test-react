import "./App.css";

function Flex() {
  return (
    <div className="Flex">
      <div class="px-2">
        <div class="flex flex-wrap -mx-2">
          <div class="w-full px-4 md:w-1/3">
            <div class="bg-gray-400 h-12"></div>
          </div>
          <div class="w-full px-4 md:w-1/3">
            <div class="bg-gray-500 h-12"></div>
          </div>
          <div class="w-full px-4 md:w-1/3">
            <div class="bg-gray-400 h-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flex;
