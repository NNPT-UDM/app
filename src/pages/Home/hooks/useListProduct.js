import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import productApi from '../../../api/productApi';

export default function useListProduct() {
  const [listProduct, setListProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.getListProduct();
        if (!result.data) return history.push('/404');
        setListProduct(result.data);
      } catch (error) {
        history.push('/404');
      }
      setLoading(false);
    })();
  }, []);
  return { listProduct, loading };
}
