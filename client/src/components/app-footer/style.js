import { styled } from "styled-components";

export const FooterWrapper=styled.div`

  .main{
    display: flex;
    align-items: center;
    padding: 50px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;

    .column{
      flex: 1;

      .column-title{
        font-weight: bold;
      }

      .column-list{
        margin-top: 15px;

        .column-link:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .copyright{
    margin-top: 20px;

    p{
      margin: 10px;
      text-align: center;
    }
  }

`