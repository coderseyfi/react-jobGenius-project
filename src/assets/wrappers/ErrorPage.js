import styled from 'styled-components';

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    text-decoration: underline;
    text-transform: capitalize;

  }
  .err-btn{
    background-color:#F9A826;
    color: #fff;
    text-decoration: none;
    padding:10px;
    margin-top:0.5rem;
    display:inline-block;
    border-radius:4px;
    transition:.5s;
  }
  .err-btn:hover{
    transform:scale(1.1);
    transition:.5s;
  }
`;

export default Wrapper;
