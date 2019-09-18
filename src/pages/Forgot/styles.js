import styled from 'styled-components'
export const Container = styled.div`
  margin-top: 10%;

  @media only screen and (max-width: 600px){
    padding: 0 5%;
  }
  
  .link {
    text-align: center;
    font-size: 12px;
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    padding: 20 10%;
    
  }

  .lin {
    margin-top: 10px;
    color: #1f71f4;
    display: inline-block;
    padding: 17px 3px 13px 13px;
    text-decoration: none;
    position: relative;
    border: 0px solid;
    border-radius: 3px;
    text-align: center;
    color: #FFF;
    overflow: hidden;
    width: 50%;
    height: 50px;
    background-color: teal;
  }
`;