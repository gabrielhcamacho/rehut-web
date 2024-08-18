import styled, {css} from 'styled-components';

export const StatusText = styled.span`

  ${props =>
    props.status == 'ativo' &&
    css`
        color:  #36b578;
        border: 1px solid #36b578;
        border-radius: 5px;
        padding: 3px 6px;
        
    `};

    ${props =>
    props.status == 'suspenso' &&
    css`
        color:  #ffd64f;
        border: 1px solid #ffd64f;
        border-radius: 5px;
        padding: 3px 6px;
    `};

    ${props =>
    props.status == 'inativo' &&
    css`
        color:  #d95087;
        border: 1px solid  #d95087;
        border-radius: 5px;
        padding: 3px 6px;
    `};
`