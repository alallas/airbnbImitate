import { styled } from 'styled-components';
import "../../assets/css/index.less"

export const HeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  margin-top: 10px;

  .left{
    flex: 1;
    margin-left: 50px;

    .company-link{
      display: flex;
      align-items: center;
      width: fit-content;

      .company-icon{
        color: var(--icon-color);
      }

      .company-name{
        font-size: 25px;
        font-weight: bold;
        color: var(--icon-color);
        margin-left: 5px;
      }
    }
  }

  .center{
    display: flex;
    justify-content: flex-end;
    width: 250px;
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 5px;
    cursor: pointer;
    transition: box-shadow 200ms ease-in-out;

    &:hover{
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }

    .center-search{
      position: relative;
      background-color: var(--icon-color);
      width: 35px;
      height: 35px;
      border-radius: 50%;

      .search-btn{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
      }
    }
  }

  .right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 50px;

    .slogan,
    .global-icon{
      font-weight: bold;
      padding: 15px 20px;
      margin-right: -8px;
      border-radius: 30px;
      cursor: pointer;
      transition: background 200ms ease-in-out;

      &:hover{
        background-color: #f7f7f7;
      }
    }

    .user-info{
      display: flex;
      align-items: center;
      padding: 10px 15px;
      margin-left: 13px;
      border: 1px solid #ddd;
      border-radius: 30px;
      cursor: pointer;
      transition: box-shadow 200ms ease-in-out;

      &:hover{
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      }

      .user-icon-bg{
        position: relative;
        background-color: #717171;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-left: 15px;

        .user-icon{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); 
        }
      }
    }
  }
`