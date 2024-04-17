import React, { useState } from 'react';  // Add import statement for useState
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import image from '../assets/indexPic.jpg';
import whoAreWe from '../assets/whoAreWe.jpg';
import mission from '../assets/mission.jpg';
import vision from '../assets/vision.jpg';
import Hilda2 from '../assets/Hilda2.jpg';
import Sean from '../assets/Sean.jpg';
import Motebang from '../assets/Motebang.jpg';
import Phetolo from '../assets/Phetolo.jpg';
import Yolisa from '../assets/Yolisa.jpg';
import Sfiso from '../assets/Sfiso.jpg';
import '../styles/Home.css';
import ChatBox from './ChatBox ';


const TeamMember = ({ name, position, bio }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Col md={4} className='d-flex justify-content-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={bio.image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Position: {position}</Card.Text>
          <Button variant='success' onClick={() => setShowDescription(!showDescription)}>
            {showDescription ? 'Hide Bio' : 'Read My Bio'}
          </Button>
          {showDescription && (
            <div className='mt-3'>
              <p>{bio.description}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const Home = () => {
  return (
    <div style={{ minHeight: '75vh', position: 'relative' }}>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: 'rgb(28, 28, 28)',
          height: '500px',
          width: '100%',
        }}
      >
        {/* Include the updated ChatBox component */}
        <ChatBox />
        <a href="/shop">
          <Button
            variant='primary'
            style={{
              fontWeight: 'bold',
              backgroundColor: 'green',
              color: 'white',
              width: '150px',
              height: '50px',
              marginTop: '300px',
              marginLeft: '112px',
              fontSize: '20px',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'translateY(-5px)')}
            onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
          >
            Shop Now
          </Button>
        </a>
        
         
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 60 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${whoAreWe})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 60 }}>
              <h1 className='text-center'>Who we are</h1>
              <p className='text-center'>
              HMP Engineering Solutions is an innovative engineering design company headquartered in Johannesburg, South Africa. Founded by Hilda Forsythe in 2020, our mission is to revolutionise engineering design with a strong emphasis on addressing food security challenges. 

              At HMP Engineering Solutions, we understand the critical importance of food security in today's world. That's why our team of design engineers, spanning mechanical, electrical, electronics, and software backgrounds, is dedicated to developing sustainable solutions that prioritise food security and sustainability.

              Since our inception, we have been at the forefront of engineering design, leveraging cutting-edge technology and expertise to create solutions that make a meaningful impact. Whether it's developing solar-powered food dryers to combat food waste or implementing information technology solutions to enhance food distribution networks, our work is driven by our commitment to building a more resilient and food-secure future.

              With a focus on sustainability and innovation, we continue to push the boundaries of engineering design, helping our clients navigate the complexities of the fast-paced global market while championing the cause of food security for all.

              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 60 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${mission})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 60 }}>
              <h1 className='text-center'>Our Mission</h1>
              <p className='text-center'>
              Empowering our global community through cutting-edge technology,
              we strive to revolutionize food security and champion green energy solutions,
              fostering a sustainable future for all.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <div
              className='d-flex justify-content-center'
              style={{ marginTop: 60 }}
            >
              <div
                className='rounded-img'
                style={{ backgroundImage: `url(${vision})` }}
              ></div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ marginTop: 60 }}>
              <h1 className='text-center'>Our vision</h1>
              <p className='text-center'>
                To be the best engineering design company in Africa, leading the
                sustainability and innovation space. A dynamic force in the
                global market.
              </p>
            </div>
          </Col>
        </Row>

        <Row className='my-4'>
          <Col md={12} className='d-flex justify-content-center'>
            <h1 style={{ fontSize: '36px' }} className='text-center'>
              OUR TEAM
            </h1>
          </Col>
          {/* Render each team member using the TeamMember component */}
          <TeamMember
            name="Hilda Forsythe"
            position="Founding director & CEO."
            bio={{
              image: Hilda2,
              description:
              `I would say I discovered my purpose very early in my life; I have not always known where exactly I would end up but I knew without a doubt that I would be helping people. With this in mind, I have always gravitated toward anything that has societal benefits. In high school, I was part of a farming project that produced leafy greens for the school kitchen and our harvest fed the entire school at lunchtime. From a small, dusty street town called Meqheleng in Free State, I came to The City of gold to pursue a career in mechanical engineering at the University of Johannesburg. Where I had the opportunity to analyze the effects of weld build-up on railway wheels for my BEng thesis. Based on my research findings and recommendations, Transnet continues to maintain its train wheels in a safe and economical manner, reducing train derailment and saving lives. I went on to design and build a prototype of a solar-powered baking oven for my MSc Thesis, a research funded by Technology Innovation Agency.  I am also an Artificial intelligence certificate holder and have two research publications on Elsevier.
 
              I have gained experience across industries, started in aviation at Airports Company South Africa from 2013- 2016 as a student engineer. I then worked at Meyondo trading as a sales engineer in 2017. I worked as a design engineer and researcher for TIA in 2018. Then project management at UJPEETS in 2019. From my experience and the love of reading, I realised that South Africa is a consumer in the global market and that it was far behind in terms of technology. I then founded HMP Engineering Solutions where I use my design work to advance technology in South Africa and create sustainable engineering solutions that also create job opportunities for South Africans, regardless of their level of skills. As a company, we intend to also push this transformation across Africa and become formidable competitors in the global market.`
            }}
          />
          <TeamMember
  name="SEAN FORSYTHE"
  position="HEAD OF INSTALLATION & MAINTENANCE."
  bio={{
    image: Sean,
    description: `
      In 2009, I completed a City & Guilds NVQ Level 3 apprenticeship in Heating & Ventilation (Service and Maintenance) with Leeds College of Building and Mitton Mechanical Services in England. My time at Mitton Mechanical was very rewarding, and I am grateful to them for giving me the opportunity to gain a wealth of experience in the HVAC industry that has been advantageous to this day.

      I have been very fortunate to have seen much of the world, including Russia, China, Japan, and Italy, to name a few places, and have had the chance to meet some of the most amazing human beings. In retrospect, the most powerful and beautiful of these encounters was with the poor. Every country was beautiful in its own right. However, they all shared the same common denominator: people living in dire poverty, some living in more extreme conditions than others, but nevertheless still marginalized and considered outcasts. The contrast was profound, at times incomprehensible, how people can be in the same city, all at the same time, living in two completely different worlds.

      My life experiences and time traveling have allowed me to correct some common misconceptions. I have been guilty at times of being blinkered to the world around me. For example, if I even thought of the phrase "dire poverty," Africa would automatically spring to mind; unfortunately, this injustice does not afflict one continent, country, or city; it scourges every race, color, and creed with no exceptions.

      I joined HMP Engineering in 2020 and have ceased to look back. I have never worked in an organization with a philosophy so finely tuned and calibrated to mine. The company ethos challenges me to step out of my comfort zone, go above and beyond, and work conscientiously by placing love of duty above my inclinations. I feel very privileged and humbled to have an opportunity to be a part of something that will allow me to contribute to some of the most pressing issues of our time. Therefore, I hope and pray that I can help the company go far and beyond the borders of South Africa and reach out to those most in need globally.

      The future of HMP Engineering is bright, green, and beautiful.
    `,
  }}
/>

          <TeamMember
            name="MOTEBANG MOSEME"
            position="ELECTRICAL AND ELECTRONICS ENGINEER."
            bio={{
              image: Motebang,
              description:
              `Having lived for more than 20 years of my life as an orphan, I know first-hand how hard life can be. There are many hardships in the world and my dream growing up was to one day be in a position to improve people’s lives and elevate some of their struggles. I have always been a top achiever, some may even say nerd. Fortunately, my hard work throughout school paid off in the end, I matriculated in the top two and I was awarded a bursary by the Gauteng Department of Education to pursue the career of my choice. I went to the University of Johannesburg and studied for an Electrical and Electronics Engineering Degree.
              My primary goal and passion with my degree are to build sustainable intelligent houses that are also affordable. This is one of the reasons HMP Engineering Solutions has become my home. I joined the company in 2020, it embodies everything I stand for and it gives me great professional satisfaction knowing that my engineering work is impacting lives. Nerds have fun too, I love Martial Arts and Chess, and I also enjoy reading, writing and travelling.`,
            }}
          />
        </Row>

        <Row className='my-4'>
          <TeamMember
            name="PHETOLO MPE"
            position="SOFTWARE ENGINEER."
            bio={{
              image: Phetolo,
              description:
              `I hold a Bachelor of Science degree in Mathematical Sciences, majoring in Computer Sciences and Statistics. As a web developer with a strong foundation in UI/UX design, I bring extensive experience to the table. In essence, my role revolves around creating dynamic websites that effectively address business challenges and cater to the unique needs of organizations.

              My responsibilities span the entire spectrum of web development, from designing intuitive user interfaces to managing web hosting and implementing robust security architectures. I specialize in Full Stack development, leveraging key languages such as JavaScript, React, Java, and the foundational HTML/CSS. Additionally, my expertise extends to application development, where I craft versatile and user-friendly solutions.
              
              A commitment to continuous learning defines my professional journey. Beyond coding, I have diverse interests including design, travel, callisthenics, and drawing. These experiences not only enrich my personal life but also contribute to a well-rounded perspective in my approach to web and application development.`,
            }}
          />
          <TeamMember
            name="YOLISA MBUQE"
            position="LEGAL COUNSEL"
            bio={{
              image: Yolisa,
              description:
              `Ever since I was born, I have always wanted to be part of something that is very meaningful and resonates with my values and principles. With HMP Engineering Solutions, I can firmly state that I have found my true calling because to me it’s way beyond the job description but a  purpose and making some incredible change in our communities. I graduated with an honours degree in law at Fort hare University in 2021 and I hold a Software Design and Architecture certificate from Coursera in partnership with the University of Alberta. I did my work readiness program with Transcend Capital and Metro Minds respectively. Post  the programs,
              I worked as an External Sales Executive for Definitive Edge. I was selling cars, recruiting new clients, and marketing available cars on social media platforms. Interacting with potential clients regarding the make and models of available cars.
              Now I work as a Legal Counsel intern, I provide legal support and advice to upper management on relevant legal issues. I  ensure compliance with internal controls, statutory regulations and other formalities, and I
              calculate and handle risks in business processes and decision-making. Moreover, I draft legal  documents such as contracts, statements, agreements, NDA etc`,
            }}
          />
          <TeamMember
            name="SFISO LANGA"
            position="MARKETING MANAGER"
            bio={{
              image: Sfiso,
              description:
              `I am a passionate professional marketer who graduated with an advanced diploma in Marketing at the Tshwane University of Technology 2020. I have done in Service at the NHBRC for one year specializing in internal and external branding. Currently, I work as a marketing intern; I do marketing for the HMP Engineering solution, and I formulate marketing strategies and action plans that help the organization achieve its marketing goals. I am keen to learn, grow and take on new challenges that come with the role of a marketer. `,
            }}
          />
        </Row>

       
      </Container>
    </div>
  );
};

export default Home;
