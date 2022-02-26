import styled from 'styled-components';
import { useOutlet } from 'react-router-dom';
import { Header } from 'components';
const Page = () => {
  const outlet = useOutlet();
  return (
    <Div>
      <Header />
      <section>{outlet}</section>
    </Div>
  );
};

const Div = styled.div`
  font-family: 'Noto Sans KR', 'sans-serif';
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default Page;
