import { useParams } from 'react-router-dom'; // URL Parameter

const Diary = () => {
  const params = useParams();

  return <div>{params.id}번 일기입니다^_^</div>;
};

export default Diary;
