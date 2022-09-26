import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
`

export const SelectContainerStyled = styled.div`
    text-align: left;
    border: 1px solid #ccc;
    position: relative;
    border-radius: 5px;
    min-width: 200px;
`
export const SelectHeaderStyled = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
`
export const SelectOptionsStyled = styled.div`
    position: absolute;
    transform: translateY(4px);
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: auto;
    max-height: 150px;
`
export const SelectOptionStyled = styled.div<{ selected: boolean }>`
    padding: 5px;
    cursor: pointer;
    background-color: ${props => props.selected ? '#0d6efd' : 'unset'};
    color: ${props => props.selected ? '#fff' : 'unset'};
    &:hover {
        background-color: #9fc3f870;
    }
`
export const SelectOptionTagsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`
export const SelectOptionTagStyled = styled.div`
    background-color: #ddd;
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
`
export const SelectOptionTagClose = styled.span`
    display: flex;
    align-items: center;
`
export const SelectSearchBox = styled.div`
    padding: 5px;
    background-color: #eee;
`
export const SelectSearchBoxInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`