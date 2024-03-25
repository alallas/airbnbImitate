import { styled } from "styled-components";




export const HomeListImgWrapper = styled.div`

  position: relative;
  padding: 66.66% 8px 0;
  border-radius: 10px;
  overflow: hidden;
  
  img,
  .empty{
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
  }
  .empty{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
  }
  .empty.ant-empty{
    margin-inline: 0;
  }
  .empty.ant-empty-normal{
    margin-block: 0;
  }
  .empty-text{
    color: #999;
    font-size: 14px;
  }
`