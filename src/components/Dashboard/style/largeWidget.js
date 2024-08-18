import styled, {css} from 'styled-components';

export const StatusButton = styled.div`
  display: flex;
  padding: 3px 0px;
  border:none;
  border-radius:10px;
  
  color: white;
  justify-content: center;
  max-width: 100px;
  :hover {
    filter: brightness(110%) saturate(110%);
  }

    ${props =>
    props.type == 'Aprovado' &&
    css`
        color:  #36b578;
        border: 1px solid #36b578;
        border-radius: 5px;
        padding: 3px 6px;
        
    `};

    ${props =>
    props.type == 'Aguardando' &&
    css`
        color:  #ffd64f;
        border: 1px solid #ffd64f;
        border-radius: 5px;
        padding: 3px 6px;
    `};

    ${props =>
    props.type == 'Rejeitado' &&
    css`
        color:  #d95087;
        border: 1px solid  #d95087;
        border-radius: 5px;
        padding: 3px 6px;
    `};
`