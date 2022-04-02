import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { IconButton, OutlinedInput } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuantity } from "../../cartSlice";
QuantityItem.propTypes = {};

function QuantityItem({ cartItem }) {
  const { id, qty } = cartItem;
  console.log(cartItem);
  const [qtyItem, setQtyItem] = useState(qty);
  const dispatch = useDispatch();
  function handleChange() {
    dispatch(setQuantity(id, qtyItem));
  }
  const handleDes = async () => {
    await setQtyItem(
      Number.parseInt(qtyItem) ? Number.parseInt(qtyItem) - 1 : 1
    );
    dispatch(setQuantity({ id, qtyItem }));
  };
  const handleIns = async () => {
    await setQtyItem(
      Number.parseInt(qtyItem) ? Number.parseInt(qtyItem) + 1 : 1
    );
    dispatch(setQuantity({ id, qtyItem }));
  };
  return (
    <div>
      <div
        sx={{
          maxWidth: "160px",
          display: "flex",
          alignItems: "center",
          flexflow: "row nowrap",
        }}
      >
        <button onClick={handleDes}>
          <i class="fa fa-minus"></i>
        </button>
        <input size="small" type="number" onChange={handleChange} value={qty} />
        <button onClick={handleIns}>
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default QuantityItem;
