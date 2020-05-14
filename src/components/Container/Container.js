
import styled from "@emotion/styled"
import {BREAKPOINTS,READING_WIDTH} from "../../constants"

const Container = styled.div`
  width:100%;
  max-width:${READING_WIDTH}px;
  margin-left:auto;
  margin-right:auto;
  padding-left:32px;
  padding-right:32px;
  
  // @media ${BREAKPOINTS.sm}{
  //   padding-left:16px;
  //   padding-right:16px;
  // }
`
export default Container