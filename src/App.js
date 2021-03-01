import React from "react";
import Header from "./components/Header/Header";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import Solarpanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from "./components/Item/Item";

const App = () => {
  return (
    <div>
      <Header />
      {/* Snappng items */}
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money Back Guarantee"
          descLink=""
          backgroudImg={Solarpanels}
          leftBtnTxt="ORDER NOW"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroudImg={ModelS}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model 3"
          desc="Money Back guarantee"
          descLink=""
          backgroudImg={Model3}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model X"
          desc="Money Back guarantee"
          descLink=""
          backgroudImg={ModelX}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Money Back guarantee"
          descLink=""
          backgroudImg={ModelY}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Solar for New Roofs"
          desc="Money Back guarantee"
          descLink=""
          backgroudImg={SolarRoof}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc="Money Back guarantee"
          descLink=""
          backgroudImg={Accessories}
          leftBtnTxt="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnTxt="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />
      </div>
    </div>
  );
};

export default App;
