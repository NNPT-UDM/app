import CloseIcon from "@mui/icons-material/Close";
import {
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";
import React from "react";
import { useDispatch } from "react-redux";
import { formatPrice } from "utils";
import { removeFormCart } from "../../cartSlice";
import QuantityItem from "../QuantityItem";

CartItem.propTypes = {};

function CartItem({ item = {} }) {
  const dispatch = useDispatch();
  const thumbnailURL = item.product.photos.length
    ? `${STATIC_HOST}/${item.product.photos[0]}`
    : THUMBNAIL_PLACEHOLDER;

  const handleDeleteCartItem = async () => {
    await dispatch(removeFormCart(item.id));
  };
  return (
    <>
      <div className="card">
        <div className="p-1 row">
          <div className="col-3">
            <div
              style={{
                overflow: "hidden",
                border: " 2px solid #d8a9a1",
                borderRadius: 2,
                width: "100%",
                height: "100px",
              }}
            >
              {" "}
              <img
                style={{ objectFit: "cover", height: "100%" }}
                src={thumbnailURL}
                alt={item.product.name}
                width="100%"
              />
            </div>
          </div>
          <div className="px-1 col-6">
            <p className="h5">{item.product.name}</p>
            <p className="mb-1">{formatPrice(item.product.price.sell)}</p>
            {item.size ? (
              <div className="mb-1 h6">
                Size:
                <span>{item.size}</span>
              </div>
            ) : (
              <></>
            )}
            <QuantityItem cartItem={item} />
          </div>
          <div className="col-3">
            <div className="h-100 d-flex flex-column justify-content-between align-content-end">
              <button
                className="btn btn-close-white"
                onClick={handleDeleteCartItem}
              ></button>
              <p className="h6">
                {formatPrice(item.product.price.sell * item.qty)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default CartItem;
