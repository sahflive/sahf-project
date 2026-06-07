import React from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import img1 from "../../assets/Event_and_stories/general_awareness/child_protection.jpg";
import img2 from "../../assets/Event_and_stories/general_awareness/Maternity & Paternity.jpg";
import img3 from "../../assets/Event_and_stories/general_awareness/Role of NGO in Disaster Management.jpg";
import img4 from "../../assets/Event_and_stories/general_awareness/Realization of Human Rights (2).jpg";
import img5 from "../../assets/Event_and_stories/general_awareness/EQUALITY AND INDIVIDUAL ANATOMY.jpg";
import img6 from "../../assets/Event_and_stories/general_awareness/Childhood as a commodity.jpg";
// import img1 from "./events_img/child_protection.jpg";
// import img2 from "./events_img/Maternity & Paternity.jpg";
// import img3 from "./events_img/Role of NGO in Disaster Management.jpg";
// import img4 from "./events_img/Realization of Human Rights (2).jpg";
// import img5 from "./events_img/EQUALITY AND INDIVIDUAL ANATOMY.jpg";
// import img6 from "./events_img/Childhood as a commodity.jpg";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

import "./general_awarness.css";
function General_awarness() {
  return (
    <>

      <Row className="row_general">
        <Col className="column_general">GENERAL AWARENESS</Col>
      </Row>

      <Container className="box_general">
        <Row>
          <Col xs={14} md={4} className="img_general">
            <Image src={img1} thumbnail />
          </Col>
          <Col xs={12} md={8} className="text_general">
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="general_heading_1">
                  <span
                    className="custom-accordion-header"
                    style={{ color: "#343a40" }}
                  >
                    CHILD PROTECTION LAWS IN INDIA
                  </span>
                </Accordion.Header>
                <p className="general_heading_2">
                  - Tasneem Qureshi, UNIVERSITY OF LUCKNOW, UTTAR PRADESH
                </p>
                <Accordion.Body className="body_text_general">
                  Historically we have witnessed a sea change in laws, policies
                  and the recognition of human rights and child rights. We have
                  moved from common law doctrines, which unfortunately favoured
                  the powerful, to a rights-based approach. Whatever welfare
                  happens to vulnerable communities, including their children,
                  depends on the dominant sections of society’s generosity and
                  mercy. The Constitution of India, which came into effect on
                  26th January 1950, guarantees children’s rights. Article 21- A
                  guarantees the right to free and compulsory elementary
                  education for all children in the age group 6-14 years.
                  Article 24 (a) secures the right to be protected from any
                  hazardous employment until 14 years. Further children have
                  equal rights as all other adult citizens of India. Few among
                  them are the right to equality (Article 14), the right to
                  personal liberty and the process of law (Article 21), the
                  right to being protected from being trafficked and forced into
                  bonded labour (Article 23) etc. Child protection laws in India
                  are framed in line with constitutional provisions for
                  safeguarding child rights. More than 250 statutes in India,
                  passed by the Union and State Governments, deal with children.
                  In addition to these child protection laws, we have several
                  criminal laws which give protection to children. These
                  statutes include the Indian Penal Code, 1860, the Indian
                  Evidence Act, 1872 and the Criminal Procedure Code, 1973. Some
                  of the laws passed by the Union Government include the
                  following: <br />
                  <b>Children Pledging of Labour Act, 1933</b> <br />
                  This Act prohibits the pledging of the labour of children.{" "}
                  <br />
                  <b>The Immoral Traffic (Prevention) Act, 1987</b> <br />
                  This Act seeks to stop trafficking in young persons, both boys
                  and Girls. <br />
                  <b>Child Labour (Prohibition and Regulation) Act 1986</b>{" "}
                  <br />
                  This Act prohibits children’s engagement in certain kinds of
                  employment and regulates the conditions of work of children in
                  certain other employments. <br />
                  <b>Prohibition of Child Marriage Act, 2006 </b>
                  <br />
                  This Act follows the basic premise (a) to make a child go
                  through marriage is an offence, and (b) a child or minor is a
                  person up to 18 years of age in the case of girls and 21 years
                  in the case of boys. <br />
                  <b>
                    Right of Children to Free and Compulsory Education Act, 2009
                  </b>{" "}
                  <br />
                  Right to education was only the provision in the Directive
                  Principles of State Policy which had a period of ten years
                  within which the State had to fulfil the mandate to provide
                  free and compulsory education. We now have the Right to
                  Education under the fundamental rights, making it a
                  justifiable right under Article 21a.RTE Act describes
                  modalities of the importance of free and compulsory education
                  for children aged between 6-14 years in India. <br />
                  <b> Protection of Children from Sexual Offences Act, 2012 </b>
                  <br />
                  The Protection of Children from Sexual Offences (POCSO) Act
                  was enacted to address sexual exploitation and sexual abuse of
                  minors. The Act holds that a child is any person below the age
                  of 18 years. The Act makes provisions for creating a
                  childfriendly atmosphere through all stages of the judicial
                  process and avoiding revictimization. <br />
                  <b>
                    Juvenile Justice (Care and Protection of Children) Act, 2015{" "}
                  </b>{" "}
                  <br /> The Juvenile Justice (Care and Protection of Children)
                  Act came into effect on 15th January 2016. It aims at ensuring
                  proper care, development, and social reintegration of children
                  in difficult circumstances by adopting a child-friendly
                  approach. The Act classifies the term “child” into two
                  categories: ‘child in conflict with law’, and ‘child in need
                  of care and protection’. This Act has provisions to protect
                  children from any form of punishment. Law against child
                  beating is one such law under this provision.
                  <br /> <br />
                  <b>Status of Child Protection in India </b> <br />
                  While the World has made significant progress in education,
                  nutrition and child health in the past decade, India has been
                  ranked 112 in the Child Development Index. Despite child
                  protection act, we witness various forms of child rights
                  violations, including the denial and inability to access the
                  right to food, right to education, right to health and rights
                  against exploitation. While our Constitution and various Union
                  and State laws have provided the legal framework that allows
                  us to ensure that all children have a safe and nurturing
                  context to enjoy their childhood, still vast sections of
                  children remain deprived of their rights.
                  <br />
                  <b>What is Needed to Promote Child Protection?</b> <br />{" "}
                  While the constitutional and judicial framework has ensured
                  legal and political rights, much more needs to be done to
                  ensure social and economic rights to vulnerable communities to
                  ensure that the rights of all children are secured. Legal
                  reform alone could not bring change in the rights of children.
                  As Dr B R Ambedkar says, “We must make our political democracy
                  a social democracy as well. Political democracy cannot last
                  unless there lies at the base of its social democracy.”
                  <br />
                  <b>What does an NGO do?</b> <br />
                  NGOs have taken on the mandate of ensuring that all children
                  can live a life of dignity, with the right to protection,
                  nutrition, health and education secured. Through the
                  rights-based approach, we encourage children’s participation
                  in issues that concern them and their communities. Through
                  training, recreation and other learning platforms, children
                  are empowered to challenge any form of violation of their
                  rights. We have seen many budding child rights ambassadors
                  advocating for child rights and challenging various social
                  practices that violate child rights, including child
                  marriages, child labour and child trafficking. The struggle to
                  ensure the ‘gift of childhood’ to all children is indeed a
                  long journey.
                  <br />
                  <br />
                  <b> Author</b> <br />
                  <span style={{ color: " #003366" }}>
                    Tasneem Qureshi <br />
                    UNIVERSITY OF LUCKNOW, UTTAR PRADESH,
                    <br />
                    3rd year wrote this article during his/her internship with
                    SAHF.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="box_general">
        <Row>
          <Col xs={14} md={4}>
            <Image src={img2} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="general_heading_1">
                  <span
                    className="custom-accordion-header"
                    style={{ color: "#343a40" }}
                  >
                    MATERNITY & PATERNITY LAWS IN INDIA
                  </span>
                </Accordion.Header>
                <p className="general_heading_2">
                  - Tasneem Qureshi, UNIVERSITY OF LUCKNOW, UTTAR PRADESH
                </p>
                <Accordion.Body className="body_text_general">
                  The term <b>Work-life balance </b> originated in the U.K.
                  during the time of the Industrial Revolution. It means a
                  balance between the work life and the family life. In the
                  Women's Liberation Movement, women demanded that their working
                  hours should be reduced as they had to do household work and
                  child-rearing. Because society did not put any responsibility
                  on men for housekeeping and women alone bared the pressure of
                  family rearing. With the changing times, men and women are no
                  longer confined to their traditional roles of eating and
                  housekeeping respectively. In today's society, we strive for
                  gender equality yet women continue to struggle alone with the
                  work-life balance. Therefore, paternity leave is a step
                  towards gender equal society. This paper reviews the existing
                  laws related to paternity laws in India and around the globe.
                  It discusses the significance of paternity leave with the help
                  of studies conducted in this field. Traditionally, the society
                  has divided labour based on gender, where household chores and
                  child rearing is considered as women's job whereas men are
                  breadwinners. Society has evolved over the years, women have
                  started working and equally contribute to family income.
                  Similarly, 21st century men are involved in household work and
                  child rearing more than ever. Sadly, this change has not been
                  reflected in governmental policies and laws in India. Men are
                  no more the sole earners and are actively involved in family
                  responsibilities still women remain the primary caregivers.{" "}
                  <br />
                  <b style={{ textDecoration: "underline" }}>
                    Maternity and Paternity Laws in India
                  </b>{" "}
                  <br />
                  <span style={{ fontWeight: "460" }}>
                    Maternity Benefit (Amendment) Act, 2017:
                  </span>
                  <br /> This act is an amendment to Maternity Benefits Act
                  1961. The act makes paid leave available to the mothers of new
                  born. Earlier a pregnant woman was permitted 12 weeks leave
                  out of which up to 6 weeks can be availed before delivery. The
                  amended act has extended the time period of 12 weeks to 26
                  weeks and 6 weeks to 8 weeks. The benefit is reduced for a
                  woman who has two or more than two surviving children. In this
                  case she can take 12 weeks leave out of which up to 6 weeks
                  can be availed before delivery. Further, a new provision has
                  been inserted which allows adoptive mothers to take 12 weeks
                  leave, if the adopted child is below the age of three months.
                  Similarly, a commissioning mother' is allowed to take 12 weeks
                  leave. <br />
                  <span style={{ fontWeight: "460" }}>
                    Paternity Benefit Bill, 2017
                  </span>{" "}
                  <br />
                  This bill was an initiative to grant paternity leave to
                  fathers working in all sectors including private and
                  unorganised sectors. The bill made 15 days fully paid leave
                  available to fathers out of which up to 7 days can be availed
                  preceding the expected date of pregnancy. The leave can be
                  taken within 3 months from the date of delivery of the child.
                  The bill proposed to extend similar benefits to adoptive
                  parents.
                  <br />{" "}
                  <span style={{ fontWeight: "460" }}>
                    Private Sector Approach Towards Paternity Leave -{" "}
                  </span>{" "}
                  <br /> <br />
                  <span style={{ color: "red", fontWeight: "700" }}>
                    Zomato{" "}
                  </span>{" "}
                  <br />
                  It is an Indian based food-delivery company. On June 3, 2019,
                  Zomato announced its paternity leave policy through its blog.
                  It offers 26 weeks paid parental leave for both men and women.
                  This policy applies on surrogate parents, adoptive parents and
                  same-sex couples. This is a revolutionary policy because
                  private companies are reluctant to grant such a long period of
                  paid paternity leave. <br />
                  <span style={{ color: "#FF9900", fontWeight: "700" }}>
                    Amazon{" "}
                  </span>
                  <br />
                  It is an American-based company which works in various areas
                  including ecommerce, cloud computing etc. In 2015, it took an
                  initiative to allow 6 weeks paternity leave. This policy has
                  two exclusive features. Firstly, it has a Leave Share' plan,
                  which provides an opportunity to share a parental leave with
                  other spouse who is not an employee at amazon and whose
                  employer does not grant paid parental leave. Secondly, its
                  Ramp Back' plan which gives an opportunity to work on a
                  flexible schedule for a period of 8 weeks and shortened work
                  hours. <br />
                  <b>Suggestions</b> <br />
                  - Firstly, there is a need to pass an independent Union
                  Legislation which can regulate paternity leave in all sectors.
                  The legislation should be made applicable even cases of
                  surrogacy as well as adoption. The allotment of number of days
                  for paternity leave should be at least 75% of the number of
                  days for maternity leave. Other than physical recovery after
                  delivery and breastfeeding, men and women deserve equal number
                  of days off for the purpose of child rearing. <br />
                  - Secondly, the current leave rules for government employees
                  allow 15 days of paid leave only in case of less than two
                  surviving children and maternity leave is also reduced from 26
                  weeks to 12 weeks in case of a women having two or more than
                  two surviving children. The reduced benefit is a result of
                  population control policy of the Indian government. In order
                  to ensure gender equality at workplace and at home, the
                  benefit of paternity leave should not be reduced to zero even
                  in case of two or more than two surviving children but at
                  least 75% of the reduced maternity leave should be given as
                  paternity leave. The idea behind such policy is that paternity
                  leave should be seen at par with maternity leave. <br />
                  - Thirdly, paternity leave should be made mandatory for
                  fathers. In India, the culture of toxic masculinity still
                  exists, and many men might not be comfortable in taking a
                  fully paid paternity leave. It is important that our laws
                  should be such, which push men to equally contribute towards
                  family life and make it a norm. Especially in private sector
                  where the employer may not fire an employee for availing
                  paternity leave, still may be reluctant to give him a salary
                  raise or a much-deserved promotion. Also, men may not avail
                  paternity leave because of such fears. <br />
                  Lastly, a father who is on paternity leave should not be
                  allowed to engage in any kind of paid work on temporary basis
                  and no employer should knowingly engage any male who is on
                  paternity leave.
                  <br />
                  <br />
                  <b> Author</b> <br />
                  <span style={{ color: " #003366" }}>
                    Tasneem Qureshi <br /> UNIVERSITY OF LUCKNOW, UTTAR PRADESH,<br /> 3rd
                    year wrote this article during his/her internship with SAHF.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="box_general">
        <Row>
          <Col xs={14} md={4}>
            <Image src={img3} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="general_heading_1">
                  <span
                    className="custom-accordion-header"
                    style={{ color: "#343a40" }}
                  >
                    ROLE OF NGO IN DISASTER MANAGEMENT
                  </span>
                </Accordion.Header>
                <p className="general_heading_2">
                  - Tasneem Qureshi, UNIVERSITY OF LUCKNOW, UTTAR PRADESH
                </p>
                <Accordion.Body className="body_text_general">
                  NGOs are organizations registered under various Indian laws such as the Societies Registration Act, 1860, Section 25(1) of the Companies Act, 1956 meant for non-profit companies or State-specific Public Charitable Trust Acts. NGOs work in a variety of areas like humanitarian assistance, sectorial development interventions and sustainable development. NGOs play important roles in different stages of the Disaster Management Cycle. Volunteerism and social service has deep roots in India, since time immemorial, even though it received special significance during the freedom struggle through the Gandhian concept of Shramdaan, implying the offering of free labor for some noble cause like rural development, construction of social assets and public infrastructure and amenities, etc. <br />

                  In post-Independent India, the Non-Governmental Organizations (NGOs) have been providing support in critical sectors like health, education, water supply and sanitation, shelter and infrastructure, restoration of livelihoods, food security and nutrition, environment, etc. Given India’s multi-hazard risk and vulnerability to natural and man-made disasters, NGOs have been playing a significant role in providing humanitarian assistance to disaster-affected people in most of the severe disasters like the Latur earthquake in 1993, Orissa super cyclone in 1999, Bhuj earthquake in 2001, Indian Ocean tsunami in 2004, Kashmir earthquake in 2005, Barmer floods in 2006, Kosi floods in 2008, cyclones Aila and Laila and the more recent cloud burst in Leh in August 2010, apart from participating in providing relief to disaster-affected communities in various other localized disasters.  <br />

                  In the recent past, the role of NGOs in disaster management (DM) has started changing from providing post-disaster relief to strengthening pre-disaster preparedness and mitigation through capacity building, public awareness campaigns, mock exercises, workshops and conferences, etc. NGOs have also started to collaborate with corporate entities in Public-Private Partnership (PPP) projects and Corporate Social Responsibility (CSR) initiatives in the field of DM at State, District and Sub-district levels. Till recently, the work of NGOs in the field of DM has been mostly sporadic, reactive, responsive and driven by local level compulsions in the geographic areas where they are implementing development projects and very often, they faced enormous challenges in coordinating with the government machinery and even among NGOs themselves. In line with its mandate as envisaged in the Disaster Management Act 2005 (DM Act 2005), the National Disaster Management Authority (NDMA) has circulated National Disaster Management Guidelines on Role of NGOs in Disaster Management defining the role of NGOs in disaster management.  <br />

                  <b>To better understand the need for disaster management, mentioned below are a few good reasons: </b> <br />

                  1. The entire disaster management process is critical in increasing community resilience. <br />

                  2. Saving both the human population and the surrounding environment. <br />

                  3. Promoting disease prevention with mitigating measures already in place through proper legislation. <br />

                  4. Disaster management strategies include increasing the level of security along with due diligence in order to ensure premature mitigation of disasters that might occur in the future. <br />

                  5. The preservation of natural resources is a critical reason for having a disaster management system in place.  <br />


                  Before understanding the role of NGOs in disaster management, it is important to credit the people within society who honor the plight of others and volunteer to help them through their suffering. Volunteering is a big part of an NGO or NPOs operations.  <br />

                  These organizations are usually set up under legislation such as the Society’s Registration Act, 1860, Public Charitable Trust Acts, Section 25(1) of the Companies Act, 1956. Usually, NGOs working with disaster management usually cater to other purposes as well such as dealing with the underprivileged, education, healthcare, elderly assistance, nutrition, environment protection, sanitation, food security, shelter, infrastructure, livelihoods, etc. India being such a volatile space that is extremely prone to man-made or natural disasters, these NGOs provides much assistance on humanitarian grounds as they council the wounded and victims of the disaster.  <br /> <br />


                  <b>A Disaster management system usually operates on the basis of fulfilling 4 main criteria, namely: </b> <br />

                  1. Preparedness <br />

                  2. Mitigation <br />

                  3. Response <br />

                  4. Recovery

                  NGOs and NPOs in India have upped their operations and moved a level ahead from only providing post-disaster relief to working on pre-disaster awareness creation, preparedness and mitigation through campaigns, conferences, capacity building, mock drills and workshops. Apart from donations, NGOs have tried to set up other sources of income for their organizations in the form of partnerships with private enterprises. These partnerships are in the form of Public-Private Partnerships (PPP) or Corporate Social Responsibility (CSR) on all state, sub-state, and district levels. <br />

                  The current scenario on disaster management requires a very sporadic and responsive approach from the NGOs thus allowing these organizations to focus on other areas like healthcare and education for the marginalized and underprivileged. <br />

                  In a nutshell, the need for disaster management is quintessential to any economy. As NGOs up their game in dealing with mitigation and awareness creation about various disasters, their ability to respond to an incoming disaster becomes strong as they are able to provide relief to more people under the infrastructure created by our country. The article comprehensively describes the meaning of disaster management and the role of NGOs in disaster management. The private partnerships created by the NGOs through CSR and PPPs have helped to a great extent in terms of capacity building and research about various disasters and management techniques to protect the interest of the people. <br /> <br />


                  <b>Conclusion </b> <br />

                  - This article basically wants to shed light on the role of NGOs in India with regard to disaster management. The article clearly defines the need for disaster management and how it needs to be handled to minimize the damage and provide a quick response to any incoming or existing dangers. Understanding the role of NGOs can help a great deal in refining the operations of the entire system. This article has clearly described the current scenario in India regarding the role of NGOs in disaster management.


                  <br />
                  <br />
                  <b> Author</b> <br />
                  <span style={{ color: " #003366" }}>
                    Tasneem Qureshi <br /> UNIVERSITY OF LUCKNOW, UTTAR PRADESH
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="box_general">
        <Row>
          <Col xs={14} md={4}>
            <Image src={img4} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="general_heading_1">
                  <span
                    className="custom-accordion-header"
                    style={{ color: "#343a40" }}
                  >
                    REALIZATION OF HUMAN RIGHTS - Role of NGO
                  </span>
                </Accordion.Header>
                <p className="general_heading_2">
                  - Tasneem Qureshi, UNIVERSITY OF LUCKNOW, UTTAR PRADESH
                </p>
                <Accordion.Body className="body_text_general">
                  <span className="statement">“The evolution of the human rights movement clearly illustrates humanity’s ongoing struggle toward creating a better world.”– Robert Alan  </span><br />

                  Many organizations around the world dedicate their efforts to protecting human rights and ending human rights abuses. Public support and condemnation of abuses is important to their success, as human rights organizations are most effective when their calls for reform are backed by strong public advocacy. Non-Governmental Organization is one of the examples of such groups. In every part of the globe, there are Non-Governmental Organizations (NGOs) working every hour of the day to document the injustices heaped upon women, children and the underclass, standing beneath the bottom rung of society. Through their active campaigning, they remind Governments to keep their promise in order to give practical shape to goals set by various national and international conventions on human rights. India is estimated to have between 1 million and 2 million NGOs.[] The NGOs are a necessary corollary to the democratic machinery of the government, they are means of democratic empowerment of those who are less powerful and less advantaged as the government machinery and its authorized institution are not always sufficient to guarantee the protection of human rights.  <br /> <br />


                  <b>Human Rights and NGO </b> <br />

                  Human rights as the ‘Rights relating to life, liberty, equality, and dignity of individuals guaranteed by the constitution or embodied in international covenants and enforceable by the courts in India the term non-governmental or, more accurately non-profit is normally used to cover the range of organizations which go to make up civil society. Such organizations are characterized, in general, by having as the purpose of their existence something other than financial profit. However, this leaves a huge multitude of reasons for existence and a wide variety of enterprises and activities. NGOs range from small pressure groups on, for example, specific environmental concerns or specific human rights violations, through educational charities, women's refuges, cultural associations, religious organizations, legal foundations, and humanitarian assistance programs. The Economic and Social Council may make suitable arrangements for consultation with nongovernmental organizations which are concerned with matters within its competence. Such arrangements may be made with international organizations and, where appropriate, with national organizations after consultation with the Member of the United Nations concerned. NGO’s have a vital role to play in the promotion and protection of human right specially in the developing country, has the largest number of NGO’s whose activates are spared in different fields for the welfare of human being including the promotion and protection of human right. <br /> <br />


                  <b>Role of NGO </b> <br />

                  “The 21st Century will be an era of NGOs.” — Kofi Annan, Former UN Secretary General The world conference on human right was held in Vienna in Austria in 1993, with objective “to review and assess the progress made in the field of human right”. The resolution no 38 of the declaration stated –the world conference on human right recognizes the important role of Non Government Organization in the promotion of all human right and in humanitarian.  <br /> <br />


                  NGO organization have functioned as the conscience of the national in the field of human right by taking prompt action to investigate the instance human right by undertaking and the spot studies and publishing the observations. <br /> <br />


                  NGOs play a pivotal, role in many fields, such as in prevention of HIV/AIDS, to educate to teach and train vulnerable groups, childcare, child exploitation, child labour, bonded labour, in sex tourism, and providing counselling in number of matters including domestic disputes, subject relating to rights of women and children and so on. <br /> <br />


                  <b>Among the wide variety of roles that NGOs play, the following are important</b> <br />

                  The Social Welfare Role - where relief and charity are key actions. NGOs in this role can be seen as initiating internal programs and projects. <br />

                  <b>The Mediatory Role - </b>  where communication as a skill is important for development and social action. NGOs in this role can be seen as participating or taking up external programs and projects. - where support documentation and dissemination of information and expertise is critical. NGOs in this role can be seen as working in collaborative programs. Local experts/professionals/resource persons play major secondary roles. <br />

                  <b>Development and Operation of Infrastructure:</b> <br /> Community-based organizations and cooperatives can acquire, subdivide and develop land, construct housing, provide infrastructure and operate and maintain infrastructure such as wells or public toilets and solid waste collection services. <br />

                  <b>Supporting Innovation, Demonstration and Pilot Projects:</b> <br /> NGO have the advantage of selecting particular places for innovative projects and specify in advance the length of time which they will be supporting the project - overcoming some of the shortcomings that governments face in this respect. <br />

                  <b>Facilitating Communication:</b> <br /> The significance of this role to the government is that NGOs can communicate to the policy-making levels of government, information about the lives, capabilities, attitudes and cultural characteristics of people at the local level. NGOs can facilitate communication upward from people to the government and downward from the government to the people. <br />

                  <b>Technical Assistance and Training:</b> <br />Training institutions and NGOs can develop a technical assistance and training capacity and use this to assist both CBOs and governments. Research, Monitoring and Evaluation: Innovative activities need to be carefully documented and shared - effective participatory monitoring would permit the sharing of results with the people themselves as well as with the project staff. <br />

                  <b>Advocacy for and with the Poor: </b><br />In some cases, NGOs become spokespersons or ombudsmen for the poor and attempt to influence government policies and programs on their behalf. This may be done through a variety of means ranging from demonstration and pilot projects to participation in public forums and the formulation of government policy and plans, to publicizing research results and case studies of the poor. Thus NGOs play roles from advocates for the poor to implementers of government programs; from agitators and critics to partners and advisors; from sponsors of pilot projects to mediators.[] <br /> <br />


                  <b>Role of NGO at International level in protecting human right </b> <br />

                  At the international level, the status of human rights is watched by many NGOs. Amnesty International is one such organization. This Organization is dedicated to publicizing violation of human rights, especially freedom of speech and religion and right of political dissent. It also works for the release of political prisoners and, when necessary, for the relief of their families. For its commendable services in the field of human rights, Amnesty International was awarded the Nobel Prize for peace in 1977 <br /><br />


                  <b>Role of NGO at the national level in protecting human rights </b><br />

                  NGOs has played the role of development factor and has been crucial as service providers. In the development sector, many NGOs have moved ahead or gap-filling initiatives to capacity-building activities. <br />

                  Some examples as follows: <br />

                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: '550',
                    textDecoration: 'underline'
                  }}>Sulabh Movement:</span> It is a major social movement in the country for the betterment and welfare of Dalits, in a generic sense, and in particular for the liberation and social mainstreaming of scavengers. <br />

                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: '550',
                    textDecoration: 'underline'
                  }}>Child Relief and You (CRY):</span> It is a voluntary organisation committed to the upliftment of millions of children who have been deprived of their childhood due to various reasons.
                  <br />
                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: '550',
                    textDecoration: 'underline'
                  }}>Campaign Against Child Labour (CACL):</span> The campaign against child labour is a joint initiative of
                  <br />
                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: '550',
                    textDecoration: 'underline'
                  }}>Youth for Voluntary Action (YUVA)</span>, Pune and Tere des Hommes (Germany) India Programme. The Campaign is currently supported by ILO and is actively working for progressive eradication of child labour through provision of education, organisation of awareness programmes, promotion of legislative changes and rescuing children in bondage or victims of abuse. <br />

                  <span style={{
                    fontStyle: 'italic',
                    fontWeight: '500',
                    textDecoration: 'underline'
                  }}>Organisations like Saheli and Chetna </span>Oare actively involved in the protection of Women’s Rights. They provide free legal aid to women to fight for their rights against gender bias and discrimination. Butterflies are an NGO with a programme for street and working children. It was started in 1988 and its activities include non-formal education, saving schemes for children, vocational training, holding Bal Sabhas, and creating awareness for children’s rights, Bal Mazdoor Union, networking with other NGOs and research and documentation. The researcher is going to look in to some important national level NGOs in India. <br /><br />


                  <b>The following are some examples in which NGOs take action in court to protect human right:</b> <br />

                  <span style={{
                    fontWeight: '450',

                  }}># Vishaka & Ors vs State of Rajasthan & Ors </span> <br />

                  <span style={{
                    fontWeight: '450',

                  }}># Peoples’ Union For Democratic Rights V. State Of Bihar & Ors (19 December 1986) </span> <br />

                  <span style={{
                    fontWeight: '450',

                  }}># Bandhua Mukti Morcha vs Union Of India & Ors (16 December 1983) </span> <br />

                  <span style={{
                    fontWeight: '450',

                  }}>
                    # Saheli V/S Commissioner Of Police </span> <br />

                  <span style={{
                    fontWeight: '450',

                  }}># People’s Union for Democratic Rights V/s Police commissioner Delhi, head quarters 1989 4 SCC</span> <br /> <br />


                  <b>Conclusion:</b> <br />

                  <span className="statement">“Peace, development and human rights are essentially inter-related, inter-dependent and indivisible.” – Theo van Boven </span> <br /><br />


                  The NGO play important role to become a concrete expression of international, national and regional and local level voice to assist and stand up for those who can’t speak themselves. Every human being is entitled to certain basic human rights which are available to them without discrimination of any sort human rights are protected by the United Nations and its specialized agencies. In India human rights are protected by the judiciary, and human rights commissions, apart from these organizations Non Governmental organizations also have an important role in protection of human rights. The non-governmental organizations work from grass grassroots level to the national and international level in the protection of human rights.
                  <br /><br />

                  <b>Contribution of NGOs towards the development of Human Rights </b> <br />

                  <span style={{
                    fontWeight: '400',

                  }}>* They mobilize public opinion. <br />* They contribute a lot to the society. <br />

                    * They pressurize the government on certain issues, such as the protection of prisoners’ rights, and torture etc. <br />

                    * They approach the judiciary on behalf of poor people who otherwise have no access to justice. <br />

                    * They ask for the submission of certain reports. <br />

                    * They play a special role especially in developing countries in the development of human rights. Suggestions: <br />

                    * NGOs need to expand their programmes, campaigns, skits from yearly or bi-yearly to monthly. Frequent programmes increase the awareness of human rights even more than yearly. <br />

                    * NGOs also need to get more aid both from foreign and within India which will be useful to carry out their cause. <br />

                    * NGOs must have clear goals and priorities, they should define what they are trying to achieve as clearly as possible. They should think strategically and assess how short term goals fit in with long term ones. <br />

                    * NGOs must have a clear written work plan for both individual and staff activities. Plan reminds people of what the goals are, it helps keep things on track and with major projects or campaigns it helps people see where they fit into the big picture.
                  </span> <br /><br />

                  <b> Author</b> <br />
                  <span style={{ color: " #003366" }}>
                    Tasneem Qureshi <br /> UNIVERSITY OF LUCKNOW, UTTAR PRADESH,<br /> 3rd
                    year wrote this article during his/her internship with SAHF.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="box_general">
        <Row>
          <Col xs={14} md={4} s>
            <Image src={img6} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="general_heading_1">
                  <span
                    className="custom-accordion-header"
                    style={{ color: "#343a40" }}
                  >
                    CHILDHOOD AS A COMMODITY - Ending child labour
                  </span>
                </Accordion.Header>
                <p className="general_heading_2">
                  - Tasneem Qureshi, UNIVERSITY OF LUCKNOW, UTTAR PRADESH
                </p>
                <Accordion.Body className="body_text_general">
                  <b>Women’s consent matters – </b>that’s the top takeaway from the Indian Supreme Court (SC)’s judgment on abortion for all women on International Safe Abortion Day. In a bold and landmark judgement on September 29, India’s top court interpreted the Medical Termination of Pregnancy (MTP) Act and Rules to reassert the reproductive rights for women and individuals with diverse gender identities who need access to safe and legal abortion services. <br />

                  The ruling cannot be viewed in isolation. It builds upon progressive government initiatives undertaken in the last five decades to recognise the bodily and reproductive autonomy of Indian women, starting with the legalisation of abortions under the MTP Act, 1971. Last year, the Act was amended in a historic move, raising the time limit of abortions from 20 to 24 weeks. The amendment also added several categories of women eligible for abortions (including rape survivors, and women with disabilities). <br /> <br />


                  The verdict of September 29 is timely and remarkable for three important reasons. - First, the 75-page document is heavy on the narrative of choice, bodily and reproductive autonomy – and a woman’s right to decide the fate of her pregnancy. The United Nations Fund for Population (UNFPA)’s 2022 State of the World Population report states that of all pregnancies in the world, nearly half are unintended. This is an invisible crisis. The unmet need for family planning in India is 9.4% as per the 2019-21 National Family and Health Survey. Therefore, whether to be pregnant is not a choice available to these women. But the Indian ruling recognises unwanted pregnancy as a life-altering reproductive choice— a health issue that leads to unsafe abortions and maternal deaths, and a human rights issue that is both the cause and result of gender discrimination and inequality. <br />

                  Second, the ruling also underlines that “patriarchal principles about what constitutes permissible sex” cannot be the basis of any law. And finally, it will probably go down in history as the first official recognition of marital rape in India as the ruling said that the “meaning of rape must include marital rape,” within the ambit of the MTP Act. This is significant as the SC is currently deliberating on a petition to criminalise marital rape. <br />

                  For now, however, the ruling is not just a collective victory for Indian women but is also important in the global context of the abortion debate, especially against the backdrop of a similar debate in the US, the world’s largest democracy. In June 2022, the US Supreme Court in a controversial ruling overturned the Roe v. Wade ruling that made abortion a constitutional right for American women. The Indian ruling can serve as a beacon for others of progressive legislation and judgments to protect and strengthen women's rights and well-being. <br />

                  Women’s access to safe and legal abortions has been debated in India for a long time. According to a Lancet study 15.6 million abortions took place in India in 2015 of which 81% happened at home or outside health facilities. Unsafe abortions remain the third leading cause of maternal mortality in India. <br />

                  The ruling embodies the visionary global commitments made at the International Conference on Population and Development in 1994, which emphasised the fundamental role of women’s empowerment and sexual and reproductive health and rights, as critical to sustainable development. Historically, the Indian government has proceeded cautiously in order to curb the practice of selective abortions of female foetuses owing to continuing son preference in the country especially with the PreConception and Pre-Natal Diagnostic Techniques (PC&PNDT) Act. <br /><br />


                  Further, minors or their guardians, fear criminal proceedings when seeking an abortion, under the Protection of Children from Sexual Offences (POCSO) Act, 2012 which mandates registered doctors to report such cases to the police. Owing to this, they often opt for clandestine abortions by unqualified doctors. However, the recent ruling has attempted to bridge this gap between the POCSO Act and the MTP Act, by exempting doctors from disclosing to the police the identity of minors who seek abortions. We laud the Indian government and the SC for this momentous recognition of women’s rights as it aligns with the UN’s core belief that reproductive rights are integral to women’s rights. The next steps along the road to reproductive autonomy for women in India would be to address the remaining unmet need for family planning/contraceptives and improve access to safe abortion services, including medical methods. The UN remains committed to supporting the Government of India in ensuring that all have access to sexual and reproductive health information and services that enable them to responsibly engage in mutually respectful relationships and exercise bodily autonomy. <br /><br />


                  <b>This new ruling can be a game-changer if women are made aware of their rights and all understand that pregnancy is a choice, not an inevitability.</b>
                  <br />
                  <b> Author</b> <br />
                  <span style={{ color: " #003366" }}>
                    Tasneem Qureshi <br /> UNIVERSITY OF LUCKNOW, UTTAR PRADESH,<br /> 3rd
                    year wrote this article during his/her internship with SAHF.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Container className="box_general">
        <Row>
          <Col xs={14} md={4}>
            <Image src={img5} thumbnail />
          </Col>
          <Col xs={12} md={8}>
            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="general_heading_1">
                  <span
                    className="custom-accordion-header"
                    style={{ color: "#343a40" }}
                  >
                    EQUALITY AND INDIVIDUAL ANATOMY - India shows the way
                  </span>
                </Accordion.Header>
                <p className="general_heading_2">
                  - Tasneem Qureshi, UNIVERSITY OF LUCKNOW, UTTAR PRADESH
                </p>
                <Accordion.Body className="body_text_general">
                  As a child, I always thought humans were entitled to basic human rights as our Indian constitution guarantees it, but now as I become well aware of the harsh realities of the world we live in, I realise not everyone can avail of these benefits that I used to believe was intrinsic to human beings. I often saw and heard of injustices being inflicted upon the poor and the underprivileged, yet no one seemed to do anything about it. I recall one instance when I visited my grandma in Firozabad - the centre of India’s glass-blowing industry. I saw families that spent generations working around furnaces, welding glass along with their children in dingy cells, next to flickering oil lamps making bangles. They worked hard day and night to make ends meet while I used to go to school like any kid of my age would, that very moment I realised how these young kids were deprived of quality education, and basic amenities and were forced to labour at a such young age. <br />

                  The year 2021 was the International Year for the Elimination of Child Labour which aims to raise awareness of the importance of ending child labour and to step up our collective efforts for impactful and sustainable actions. September is a month when many of the world’s children are returning to school. However, this is not the case for a lot of children involved in child labour who are denied their chance to get an education. Education is a fundamental human right and a major enabler to reduce inequalities and build peaceful, democratic and inclusive societies that are the core of EU values. According to the latest Child Labour Global Estimates, published in June, 160 million children – 63 million girls and 97 million boys – were in child labour globally at the beginning of 2020, accounting for almost 1 in 10 children worldwide. <br /><br />


                  <b>Key drivers </b><br />

                  There is no single reason why children find themselves in child labour and are not able to fully attend school. In many cases, the work demands so much time and energy that it becomes impossible for children to enter, persist and succeed at school. In other instances, children work because they lack access to quality, free schools. Additionally, decisions concerning children’s education can be influenced by family perceptions of its importance. Girls have the double burden of doing unpaid work — household chores and family care, which prevents many from attending school fulltime.  <br /> <br />


                  <b>Covid-19 is a real cause for concern </b> <br />

                  In 2020, the pandemic increased the number of children in income-poor households by an estimated 142 million, which is a massive 24 % increase from the previous year. Their families have suffered job and income losses, seen cuts in remittances and experienced other shocks. Families turn to child labour as a coping mechanism in times of crisis. Moreover, school closures during lockdowns have added to the risks, especially for children in vulnerable situations, as they are even more likely to work when school is not an option. Pandemic-related school closures have affected over 90 % of the world’s students and remote learning failed to reach 463 million learners. When children leave school and enter paid employment, it is usually very difficult to resume their education. Without a robust response, the education emergency may easily spiral into a child labour emergency. <br /><br />


                  <b>Child labour laws in India </b> <br />

                  - When in the 20th Century, child labour became so prominent that news of factory hazards and mishappenings taking innocent children’s life, flashed all around in the newspapers, then was the time, a need for legislation and statutes were felt to prohibit the malpractice of child labour. Today, there are sufficient statutes condemning and prohibiting child labour such as:

                  <b>The Factories Act of 1948:</b> <br /> The Act prohibits the employment of children below the age of 14 years in any factory. The law also placed rules on who, when and how long can pre-adults aged 15–18 years be employed in any factory. <br />

                  <b>The Mines Act of 1952:</b> <br /> The Act prohibits the employment of children below 18 years of age in a mine. Mining being one of the most dangerous occupations, which in the past has led to many major accidents taking life of children is completely banned for them.
                  <br />

                  <b>The Child Labour (Prohibition and Regulation) Act of 1986:</b>  <br />The Act prohibits the employment of children below the age of 14 years in hazardous occupations identified in a list by the law. The list was expanded in 2006, and again in 2008. <br />
                  <b>The Juvenile Justice (Care and Protection) of Children Act of 2000:</b> <br />This law made it a crime, punishable with a prison term, for anyone to procure or employ a child in any hazardous employment or in bondage. This act provides punishment to those who act in contravention to the previous acts by employing children to work. <br />

                  <b>The Right of Children to Free and Compulsory Education Act of 2009:</b><br /> The law mandates free and compulsory education to all children aged 6 to 14 years. This legislation also mandated that 25 per cent of seats in every private school must be allocated for children from disadvantaged groups and physically challenged children.  <br /><br />


                  <b>International Efforts </b> <br /><br />


                  <b>- The EU-funded TACKLE</b> project implemented by the ILO aimed to tackle child labour through education in 12 countries across Africa, the Caribbean and the Pacific countries The project helped prevent child labour and withdraw children from child labour by offering alternative education and training opportunities and promoting livelihoods.
                  <br />
                  <b>In Madagascar</b>, for instance, an agreement was made between a company and three NGOs to support the economic activities of parents of children in or at risk of child labour. The initiative boosted the agricultural productivity of the parents enabling them to pay for their children’s school fees. <br />

                  <b>In Zambia</b>, community child labour committees were established and collaboration with a local bank helped support livelihoods. Many children in Zambia are forced into child labour at the expense of going to school as a result of the HIV/AIDS pandemic. <br /> <br />


                  <b>SUGGESTIONS </b> <br />

                  - There are some well-known solutions for getting and keeping children in school and out of child labour, and many others, but their effective implementation is still limited: <br />

                  <span style={{
                    fontWeight: '400'

                  }}>• aligning the minimum working age and the end of compulsory schooling  <br />

                    • improving the overall quality of education, which increases the chances of students staying in school and succeeding  <br />

                    • abolishing or reducing school costs, which may be unaffordable for some and include school-feeding facilities • register every child at birth, as a birth certificate with proof of legal identity and age is often required to access education  <br />

                    • providing or increasing universal child benefits as part of countries’ social protection system (see below) and other policy instruments, which could potentially promote more equitable access to education <br />

                    • back-to-school campaigns and outreach in response to pandemic-related school closures and to sensitise parents on the importance of investing in education <br />

                    • flexible school calendar and curricula to incentivise school attendance and cope with family farms’ need for seasonal light work <br />

                    • Social by way of universal child benefits or cash transfers offer a powerful solution.
                  </span>

                  <br /><br />

                  <b> Author</b> <br />
                  <span style={{ color: " #003366" }}>
                    Tasneem Qureshi <br /> UNIVERSITY OF LUCKNOW, UTTAR PRADESH,<br /> 3rd
                    year wrote this article during his/her internship with SAHF.
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default General_awarness;
