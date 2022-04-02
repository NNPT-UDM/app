import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
      
        setProduct(result.data);
      } catch (error) {
        // console.log('Fail to fetch product', error);
        history.push('/shop');
      }
      setLoading(false);
    })();
  }, [productId]);
  return { product, loading };
}
