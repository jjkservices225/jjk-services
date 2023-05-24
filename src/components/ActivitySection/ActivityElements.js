import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  background: #cd84f1;
  height: 70px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const ContainerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RightContent = styled(Link)`
  margin-left: 32px;
  margin-top: 20px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  &:hover {
    color: #01bf71;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const LeftContent = styled.div`
  padding: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  margin: 0 0.5rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const A = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;

  &:hover {
    color: #01bf71;
  }
`;
