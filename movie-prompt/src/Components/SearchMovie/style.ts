import styled from '@emotion/styled';

// styled.HTML-tag-name
export const SearchSection = styled.section`
    background-color: green;
`

/**
 * Takes an existing styled component and extends it further
 * by adding more to what's inherited from the class/component
 * inside styled()
 */
export const BiggerSearchSection = styled(SearchSection)`
    padding: 20px;
`