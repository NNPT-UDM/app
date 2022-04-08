import cartApi from '../../../api/cartApi';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useCart(cartId) {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await cartApi.get(cartId);
        // console.log(result);
        if (!result.data.items) {
          history.push('/cart');
          setCart({});
        } else {
          setCart(result.data.items);
        }
      } catch (error) {
        history.push('/cart');
      }
      setLoading(false);
    })();
  }, [cartId]);
  return { cart, loading };
}
