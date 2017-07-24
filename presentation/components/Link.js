import styled from 'styled-components'

export default styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferer',
})`
  color: ${p => (p.primary ? p.theme.primary : p.theme.secondary)};  
  text-decoration: none;

  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${p => (p.primary ? p.theme.primary : p.theme.secondary)};
  }

  &:hover {
    text-decoration: none;
    color: ${p => (p.primary ? p.theme.secondary : p.theme.primary)};
  }
`
