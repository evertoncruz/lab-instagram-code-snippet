import * as S from './styles'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Title>CODE SNIPPET</S.Title>
      <S.Logo
        src="/img/instagram-principal.png"
        alt="Imagem de um quadrado de bordas arrendadas"
      />
      <S.Description>
        Componentes extraídos de posts do instagram com code snippet.
      </S.Description>
    </S.Wrapper>
  )
}

export default Main
