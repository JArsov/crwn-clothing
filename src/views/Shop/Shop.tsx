import React, { useState } from "react";
import SHOP_DATA, { ShopData } from "../../shared/shop.data";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const Shop: React.FC<{}> = () => {
  const [collections] = useState<ShopData[]>(SHOP_DATA);
  return (
    <div>
      {collections.map(collection => (
        <CollectionPreview
          key={collection.id}
          {...collection}
        ></CollectionPreview>
      ))}
    </div>
  );
};

export default Shop;
