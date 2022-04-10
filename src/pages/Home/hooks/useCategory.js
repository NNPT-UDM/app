import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import categoryApi from '../../../api/categoryApi';

export default function useCategory(slug) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await categoryApi.get(slug);
        if (!result.data) return history.push('/404');
        setProduct(result.data);
      } catch (error) {
        history.push('/404');
      }
      setLoading(false);
    })();
  }, [slug]);
  return { product, loading };
}
