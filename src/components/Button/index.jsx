import { Container } from "./styles"

export function Button({ icon: Icon, ...rest}) {
  return(
    <Container type="button" {...rest}>
      {Icon && <Icon/>}
    </Container>
  )
}