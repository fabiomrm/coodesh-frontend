import styled from 'styled-components';

export const StyledTable = styled.table`
    background-color: #FFF;
    border-collapse: collapse;

    thead {
        background-color: #CCC;
    }

    th, td {
        border: 1px solid #DDD;
        padding: 10px 20px;
        width: 150px;
    }

    td,
    td > button {
        font-size: 14px;
    }
    
`;