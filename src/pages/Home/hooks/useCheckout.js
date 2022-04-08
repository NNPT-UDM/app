import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import orderApi from '../../../api/orderApi';

export default function useCheckout(cartId) {
  const [data, setData] = useState({});
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        const result = await orderApi.getByCart(cartId);
        console.log(result);
        if (result.data.length > 0) {
          localStorage.removeItem(StorageKeys.CART_ID);
          history.push('/cart');
          setData({});
        }
        console.log(data);
        setData(result);
      } catch (error) {
        history.push('/cart');
      }
    })();
  }, [cartId]);
  return { data };
}
