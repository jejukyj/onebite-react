import { useParams } from 'react-router-dom';

const Edit = () => {
  const params = useParams();

  return <h4>Edit 페이지는 {params.id}번 일기입니다💭</h4>;
};

export default Edit;
