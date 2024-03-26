import { styled } from "styled-components";


export const DetailDescLeftWrapper = styled.div`
  
  flex: 70%;
  .summary{
    margin: 10px 0;
    font-size: 16px;
    font-weight: normal;
  }
  .infrastructure{
    display: flex;
    font-size: 14px;
  }

  .assess{
    display: flex;
    align-items: center;
    padding: 15px 30px;
    border:1px solid #e5e5e5;
    border-radius: 10px;
    width: fit-content;
    margin-top: 30px;

    .rating,
    .review{
      padding: 0 50px;
    }

    > * + *{
      border-left: 2px solid #ddd;
    }
    .review{
      text-align: center;
      font-weight: bold;

      .number{
        font-size: 16px;
      }

      .text{
        font-size: 12px;
        text-decoration: underline;
      }

    }
  }

`

