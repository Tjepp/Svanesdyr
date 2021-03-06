/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
// import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import { withRouter } from 'react-router-dom';

import {
  Page,
  Banner,
  Column,
  MetaDogCool,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  // DogCourseSimple,
  TextList,
  Image,
  StyledLink,
} from '../components';
import Responsive from '../components/layout/Responsive';
import DogMenu from '../components/menu/DogMenu';
import {
  CoolAgainOne,
  CoolAgainTwo,
  CoolAgainThree,
  CoolAgainFour,
  CoolAgainFive,
  CoolAgainSix,
} from '../assets';

const CoolContinuedBenefits = [
  'Personlig sparring omkring din hund og jeres hverdag sammen',
  'Hele 7 ugers træning med ugentligt møde',
  'Max 3 andre holdkammerater, så der er god tid til dig',
  'Udleveret en klikker til valgfrit brug i træningen',
];

const ContinuedCoolProgram = [
  'Indlæring af at finde ro og slappe af, når i skal lave ”ingenting” sammen',
  'Rolige gåture: Øvelse i at gå væk fra andre hunde',
  'Rolige gåture: Øvelse i fortovspassager med andre hunde',
  'Rolige gåture: Øvelse i stop-op og hilsemøder med andre',
  'Hverdagsgåture med kontakt og ro i nye miljøer',
  'Ro og kontakt nær flere forstyrrelser på én gang',
  'Afventende ro omkring spændende sager i bevægelse',
  'Placering af hunden: Indlæring af bliv',
];

const DogCoolContinued = () => (
  <Page>
    <MetaDogCool />
    <Banner text="Hundehold i Horsens">
      <BreadCrumps currentPage="Fortsat Helt-Cool" />
    </Banner>
    <Background>
      <Row marginTop="25px" marginBottom="45px">
        <Column widthPercentage="20%">
          <Title text="Udbud af hundehold" showHorizontalRuler />
          <DogMenu />
        </Column>
        <Column widthPercentage="75%">
          <Title text="Fortsat Helt-Cool i Horsens" showHorizontalRuler />
          <Text>
            Ved efterspørgsel udbydes der fortsætterhold for kursister, som har deltaget på
            Helt-Cool kurset.
            <br />
            Programmets primære fokus er at give din hund det sorte bælte i god impulskontrol! Hvor
            de rolige gåture praktiseres i stor stil. Du får en mere afslappet hverdag, med en hund
            der selv kan finde ro når du er i ro og som kan gå pænt i snor uden at hive armen af
            dig. Kurset henvender sig til alle hunde i alle aldre.
          </Text>
          <Text>
            Al træning foregår med{' '}
            <StyledLink to="/minemetoder"> belønningsbaserede træningsmetoder</StyledLink>, hvor vi
            bruger klikker eller "dygtig" til at markere korrekt adfærd og belønner hunden med mad
            og leg. Hvis din hund laver fejl hjælper vi den ved at gøre opgaven nemmere og mere
            letforståelig. Alle bliver sat op til succes.
          </Text>
          <Text>
            <b>Træningsprogram for holdet</b>
            <br />I løbet af vores 7 uger sammen vil vi komme igennem følgende:
          </Text>
          <TextList texts={ContinuedCoolProgram} />
          <Text>
            <b>Hvad kan du forvente at få med?</b>
            <br />
            Ved deltagelse på Fortsat Helt-Cool får du:
          </Text>
          <TextList texts={CoolContinuedBenefits} />
          <Text>
            Der tages hensyn til sensitive hunde og praktiseres god afstand før, under og efter
            timerne. Til de legeglade hunde er der mulighed for lidt{' '}
            <StyledLink to="/hundehold"> kontrolleret leg</StyledLink> efter timen.
          </Text>
          <br />

          <Title text="Skema for kommende holdstart" showHorizontalRuler />
          <TitleColor text="Din investering: 1095 kr." />
          <Text>
            i at kunne nyde jeres daglige gåture, med en hund der er helt-cool omkring andre.
          </Text>
          <br />
          <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>

          <Title text="Alle igangværende hold er desværre fyldt op." />

          <br />
          <TitleColor text="Jeg oplever i øjeblikket overvældende stor efterspørgsel på mine holdforløb." />
          <Text>
            Derfor kan jeg ikke love plads på hold indenfor kort tid. Jeg kan kun anbefale at være
            ude i god tid.
            <br />I øjeblikket er mine hold fyldt et par måneder på forhånd. Næste holdstart i år er
            til <b>oktober</b>.
            <br /> Ønsker du at skrives op til en plads på et fremtidigt holdforløb er du velkommen
            til at
            <StyledLink to="/kontakt"> kontakte mig</StyledLink>.
          </Text>

          {/* <Title text="Maj start:" />
          <Table>
            <DogCourseSimple />
            <Tbody>
              <Tr>
                <Td>Cool G</Td>
                <Td>Mandag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>20.30 - 21.15</Td>
                <Td>3. maj</Td>
                <Td>14. juni</Td>
                <Td>
                  <font color="#D60E0E">*Venteliste*</font>
                </Td>
              </Tr>
            </Tbody>
          </Table> */}
          <br />

          <Title text="Helt-Cool Miljøhold" showHorizontalRuler />
          <Text>
            Efter at have deltaget på de to første kursusforløb er der mulighed for at tage
            træningen med ud i hverdagen.
            <br />
            På miljøholdet fokuseres der på de kendte Cool-principper med kontakt og ro, som udøves
            i <u>nye miljøer</u> over 6 lektioner. Vi mødes hver 14. dag på dette hold og på en ny
            lokation til hver lektion.
          </Text>

          <br />
          <TitleColor text="Jeg oplever i øjeblikket overvældende stor efterspørgsel på mine holdforløb." />
          <Text>
            Derfor kan jeg ikke love plads på hold indenfor kort tid. Jeg kan kun anbefale at være
            ude i god tid.
            <br />I øjeblikket er mine hold fyldt et par måneder på forhånd. Næste holdstart i år er
            til <b>oktober</b>.
            <br /> Ønsker du at skrives op til en plads på et fremtidigt holdforløb er du velkommen
            til at
            <StyledLink to="/kontakt"> kontakte mig</StyledLink>.
          </Text>

          {/* <Title text="April start:" />
          <Table>
            <DogCourseTableHead />
            <Tbody>
              <Tr>
                <Td>Miljø-Cool B</Td>
                <Td>Søndag</Td>
                <Td>8700</Td>
                <Td>
                  <StyledLink to="/kontakt">Kontakt mig</StyledLink>
                </Td>
                <Td>13.30 - 14.15</Td>
                <Td>11. april</Td>
                <Td>20. juni</Td>
                <Td>Ulige uger</Td>
                <Td>
                  <font color="#D60E0E">*Venteliste*</font>
                </Td>
              </Tr>
            </Tbody>
          </Table> */}
          <br />

          <Title text="Stemningsbilleder fra Helt-Cool kursus" showHorizontalRuler />
          <Row>
            <Column>
              <Image src={CoolAgainOne} />
            </Column>
            <Column>
              <Image src={CoolAgainTwo} />
            </Column>
            <Column>
              <Image src={CoolAgainThree} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Image src={CoolAgainFour} />
            </Column>
            <Column>
              <Image src={CoolAgainFive} />
            </Column>
            <Column>
              <Image src={CoolAgainSix} />
            </Column>
          </Row>
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(DogCoolContinued);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
