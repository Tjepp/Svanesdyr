/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
// import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';
import {
  Page,
  Banner,
  Column,
  Meta,
  Title,
  TitleColor,
  Text,
  Image,
  BreadCrumps,
  // LectureTableHead,
  // StyledExternal,
  Row,
  StyledLink,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { lectureFearAndAgression, lectureDogLanguage, lectureCalmDownFido } from '../assets';
import '../components/table/TableCss.css';

const Lecture = () => (
  <Page>
    <Meta />
    <Banner text="Foredrag hos Svanes Dyr">
      <BreadCrumps currentPage="Foredrag" />
    </Banner>
    <Background>
      <Row marginTop="25px">
        <Column widthPercentage="65%">
          <Title text="Foredrag med Sabrina Svane" showHorizontalRuler />
          <Text>
            Jeg underviser ugentligt mange hundeejere i at blive klogere på deres hunde, ikke blot
            med hvordan de indlærer basal lydighed, men ligesåmeget i at forstå hundens sprog, vide
            hvordan hjernen fungerer på deres firbenede familiemedlem og hvor opmærksom de skal være
            på stress og dens negative følger, så de får hverdagen til at fungere.
          </Text>
          <Text>
            Min passion er at give ejere en hverdag i harmoni med deres dyr. Alle mine foredrag
            tager udgangspunkt i at give en god sum baggrundsviden, som fx i hvad stress er, hvordan
            hjernen fungerer og hvordan hunde kommunikerer. Og derefter vise hvordan den information
            kan bruges til at få succesoplevelser i hverdagen, uanset om deltagerne ønsker at
            forebygge eller ændre en uønsket adfærd.
          </Text>
          <Text>
            Jeg udbyder ofte foredrag i de populære emner omkring angst og aggression, stress og
            gøende adfærd hos hunde, som du kan læse mere om længere nede på siden. Er du fra en
            hundeklub, et dyrlægehus eller er privatperson og ønsker du et andet fokusemne, så tøv
            ikke med at
            <StyledLink to="/kontakt"> kontakte mig</StyledLink> for at høre mere. Jeg tilbyder
            foredrag for både hunde- og kattejere, samt fagfolk indenfor træningsverdenen.
          </Text>
        </Column>
        <Column>
          <Title text="Priser for foredrag" showHorizontalRuler />
          <TitleColor text="Alle priser er inkl. moms" />
          <Text>
            <b>Timepris</b>
            <br />
            Hverdage man-fre:
            <b> 1.450,- kr/time</b>
            <br />
            Weekend lør-søn:
            <b> 1.750,- kr/time</b>
          </Text>
          <Text>Inklusiv forberedelsestillæg og udprint.</Text>
          <Text>
            <b>Kørsel</b>
            <br />
            Tillæg efter statens takster 3,44 kr/km begge veje.
          </Text>
        </Column>
      </Row>
      <Row>
        <Column widthPercentage="100%">
          <Title text="Kommende foredrag og workshops om hundeadfærd 2021" showHorizontalRuler />
          <Text>
            Grundet de nuværende restriktioner med Corona er foredrag sat midlertidigt på pause.
          </Text>
          {/* <TitleColor text="Hos FOF - Ane Staunings Vej 21, 8700 Horsens:" smallTitle />
          <Text>Bemærk; Priser er fastsat af FOF og tilmelding foregår via deres hjemmeside.</Text> */}
          {/* <Table>
            <LectureTableHead />
            <Tbody>
              <Tr>
                <Td>17.03.2021</Td>
                <Td>Hundens sprog - Hvad fortæller den dig?</Td>
                <Td>
                  <StyledExternal href="https://cm.fof.dk/da/sydostjylland/kurser/friluftsliv/hundetraening-teori/hundens-sprog-workshop/210821">
                    Klik her
                  </StyledExternal>
                </Td>
                <Td>18.30 - 21.30</Td>
                <Td>200 kr. </Td>
                <Td>
                  <font color="#D60E0E">10 pladser</font>
                </Td>
              </Tr>
              <Tr>
                <Td>20.03.2021</Td>
                <Td>Angst og Aggression - Forebyggelse og behandling</Td>
                <Td>
                  <StyledExternal href="https://cm.fof.dk/da/sydostjylland/kurser/friluftsliv/hundetraening-teori/angst-og-aggression-forebyggelse-og-behandling/210822">
                    Klik her
                  </StyledExternal>
                </Td>
                <Td>10.00 - 15.45 </Td>
                <Td>335 kr. </Td>
                <Td>
                  <font color="#D60E0E">10 pladser</font>
                </Td>
              </Tr>
              <Tr>
                <Td>17.04.2021</Td>
                <Td>Slap af Fido! - få ro på hverdagen </Td>
                <Td>
                  <StyledExternal href="https://cm.fof.dk/da/sydostjylland/kurser/friluftsliv/hundetraening-teori/slap-af-fido-f-ro-p-hverdagen-workshop/210823">
                    Klik her
                  </StyledExternal>
                </Td>
                <Td>10.00 - 15.45 </Td>
                <Td>335 kr. </Td>
                <Td>
                  <font color="#D60E0E">10 pladser</font>
                </Td>
              </Tr>
              <Tr>
                <Td>22.05.2021</Td>
                <Td>Det gøende mareridt </Td>
                <Td>
                  <StyledExternal href="https://cm.fof.dk/da/sydostjylland/kurser/friluftsliv/hundetraening-teori/det-goeende-mareridt-workshop/210824">
                    Klik her
                  </StyledExternal>
                </Td>
                <Td>10.00 - 15.45 </Td>
                <Td>335 kr. </Td>
                <Td>
                  <font color="#D60E0E">10 pladser</font>
                </Td>
              </Tr>
            </Tbody>
          </Table> */}
        </Column>
      </Row>
      <Row>
        <Title text="Udbud af foredrag om hundeadfærd" showHorizontalRuler />
      </Row>
      <Row marginBottom="25px">
        <Column>
          <Image src={lectureDogLanguage} />
          <TitleColor text="Hundens sprog - hvad fortæller den dig?" smallTitle />
          <Text>
            <b>Kursus på min. 3 timer</b>
            <br />
            Foredraget indeholder bl.a. hundens udvikling fra deres forfader ulven og frem til i
            dag, samt masser af billeder og videoer, som giver dig et godt indblik i de forskellige
            signaler. Du lære at aflæse disse signaler og undgå stressede situationer, således angst
            eller aggression kan forebygges.
          </Text>
        </Column>
        <Column>
          <Image src={lectureFearAndAgression} />
          <TitleColor text="Angst og aggression: Forebyggelse og behandling" smallTitle />
          <Text>
            <b>Kursus på min. 5 timer</b>
            <br />
            Reagerer din hund på andre hunde på gåturen? Snerrer den af gæsterne? Er den skrækslagen
            for dyrlægen? Foredraget omhandler bl.a. hundens indlæringsevner, hundens sprog, samt
            stress og dens negative indflydelse. Du får indsigt i, hvad der spiller en rolle for din
            hund og hvordan du kan ændre det.
          </Text>
        </Column>
        <Column>
          <Image src={lectureCalmDownFido} />
          <TitleColor text="Slap af Fido! - få ro på hverdagen" smallTitle />
          <Text>
            <b>Kursus på min. 5 timer</b>
            <br />
            Føler du din hund er lidt af et damp barn? Bliver den hyper når der sker noget, er svær
            at få ro på hjemme? Foredraget omhandler bl.a. hundens indlæringsevner, stress og dens
            negative indflydelse, samt hvilke faktorer i hverdagen, der spiller en rolle for din
            stressede hund.
          </Text>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(Lecture);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
