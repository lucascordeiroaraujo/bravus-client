import styled from 'styled-components';

export default styled.li`
  margin: 5px 0px 5px 15px;
  display: flex;
  a {
    width: 100%;
    font-size: 19px;
    text-transform: uppercase;
    padding: 15px 30px;
    color: ${props => props.theme.colors.secondary};
    transition: 0.5s;
    text-align: center;
    background-color: ${props => props.theme.colors.info};
    &:hover {
      color: ${props => props.theme.colors.light};
      background-color: #576473 !important;
    }
  }
  &:first-child a {
    background-color: ${props => props.theme.colors.light};
  }
  &:last-child a {
    background-color: ${props => props.theme.colors.primary};
  }
  @media (max-width: 992px) {
    margin: 5px 15px 5px 0px;
  }
  @media (max-width: 576px) {
    margin: 5px 0px 5px 0px;
    width: 100%;
  }
`;
