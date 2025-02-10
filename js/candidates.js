// Function to create candidate card
function createCandidateCard(candidate) {
    return `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="candidate-card" data-bs-toggle="modal" data-bs-target="#${candidate.id}Modal">
                <img src="images/AD-18 Candidate Headshots/${candidate.name}.${candidate.imageExt}" 
                     alt="${candidate.name}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${candidate.name}</h5>
                    <h6 class="card-subtitle mb-2">${candidate.title}</h6>
                    <p class="card-text">${candidate.shortBio}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to create candidate modal
function createCandidateModal(candidate) {
    return `
        <div class="modal fade" id="${candidate.id}Modal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${candidate.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="images/AD-18 Candidate Headshots/${candidate.name}.${candidate.imageExt}" 
                                     alt="${candidate.name}" class="img-fluid rounded mb-3">
                                <div class="d-grid gap-2">
                                    <a href="#" class="btn btn-outline-primary btn-sm">View Full Bio</a>
                                    <a href="#" class="btn btn-outline-primary btn-sm">View Statement</a>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <h4 class="mb-3">${candidate.title}</h4>
                                <div class="candidate-bio">
                                    ${candidate.bio || candidate.shortBio}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Candidate data
const candidates = [
    {
        name: "Nate Hanson",
        id: "nate",
        title: "Affordable Housing Developer",
        shortBio: "Leading affordable housing development at Related California, spearheading a 600-unit project at Jack London Square.",
        bio: `<p>Nate is running as part of the Housing and Climate Progressive Democratic Slate because he is committed to helping to make the Democratic Party work for everyday Californians. We need real solutions to the housing and homelessness crisis, comprehensive and just public safety, and meeting the needs of our most vulnerable residents, our small businesses, and our working people.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>Works at Related California's Northern California affordable development team</li>
                  <li>Spearheading efforts to build a 6-phase, 600-unit affordable housing project at Jack London Square</li>
                  <li>Sits on the ULI San Francisco Public Private Partnerships Local Product Council</li>
                  <li>Sits on the Bay Area Council's Housing Committee</li>
              </ul>
              <h5 class="mt-4">Key Accomplishments</h5>
              <ul>
                  <li>Spearheading efforts to build a 6-phase, 600-unit affordable housing project at Jack London Square</li>
                  <li>Working at Related California, one of the largest developers of affordable and mixed-income housing in the state</li>
                  <li>Prior work at Urban Land Institute San Francisco (ULI SF) and in city government and politics in Pittsburgh, Pennsylvania</li>
              </ul>
              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>Masters in Public Management from Carnegie Mellon University</li>
                  <li>B. Phil in Urban Policy and Administration from the University of Pittsburgh</li>
              </ul>
              <p class="mt-4">As an affordable housing developer, Nate builds housing throughout the Bay Area for:</p>
              <ul>
                  <li>Individuals with developmental disabilities</li>
                  <li>Seniors whose homes were destroyed by wildfires caused by the climate crisis</li>
                  <li>Families at risk of homelessness</li>
              </ul>
              <p>His mission is to help protect and house the most vulnerable in our community. Living in East Oakland and being a proud parent of an Oakland Unified School District student, he's committed to a strong public school system so that every child has access to opportunity, regardless of their starting point.</p>`,
        imageExt: "jpg"
    },
    {
        name: "Regina Chagolla",
        id: "regina",
        title: "Education Advocate",
        shortBio: "Vice President of Emery Unified School Board, VP of Berkeley Federation of Teachers, and advocate for public education and working rights.",
        bio: `<p>Regina Chagolla is dedicated to advocating for public education for all students and working rights for education professionals. With 17 years of teaching experience, including seven years as an afterschool science release teacher in Oakland public schools with a focus on environmental justice issues, Regina brings deep expertise in education and environmental advocacy.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>Vice President of Emery Unified School Board</li>
                  <li>VP of Berkeley Federation of Teachers AFT Local 1078, AFL-CIO</li>
                  <li>Northern California VP of California Federation of Teachers ECE/TK-12 Division Council</li>
                  <li>Alameda Labor Council Delegate</li>
              </ul>
              <h5 class="mt-4">Candidate Statement</h5>
              <p>Regina is running to be a voice for working families, LGBTQ+ communities and communities of color. She believes we need a collective effort from District 18 to support public education for all, affordable housing and economic recovery that includes green union jobs.</p>
              <p>At Berkeley Unified, Regina teaches HRC Foundation Welcoming Schools lessons on gender, family, and LGBTQ+ inclusivity. She has testified at the 2024 CA Dems Resolutions Committee meeting to support a bill to lower the voter threshold for communities to pass local affordable housing and infrastructure bonds, and at the CA Public Utilities Commission for solar for renters and schools.</p>
              <p>Regina holds a BA from UC Berkeley and MS from University of Wisconsin.</p>`,
        imageExt: "webp"
    },
    {
        name: "Cathy Adams",
        id: "cathy",
        title: "Chamber of Commerce President & Community Leader",
        shortBio: "President/CEO of Oakland African American Chamber of Commerce, leading economic development initiatives and advocating for Black-owned businesses and affordable housing.",
        bio: `<p>Cathy D. Adams has been a transformative force in Oakland's business community since 1983, serving as an effective communicator, natural influencer, and dedicated advocate for economic justice. Under her leadership, the Oakland African American Chamber of Commerce has become a powerful voice for Black-owned businesses and community development.</p>

              <h5 class="mt-4">Leadership & Impact</h5>
              <ul>
                  <li><b>OAACC Leadership:</b> As President and CEO of the Oakland African American Chamber of Commerce, leads initiatives supporting Black-owned businesses and economic development.</li>
                  <li><b>COVID-19 Response:</b> Created and led the OAACC Resiliency Relief Program, raising over $1.1 million to support 250 African American owned businesses during the pandemic.</li>
                  <li><b>National Recognition:</b> Led OAACC to be voted Chamber of the Year by the U.S. Black Chamber of Commerce in 2020, highlighting the organization's impact and effectiveness.</li>
              </ul>

              <h5 class="mt-4">Housing & Community Development</h5>
              <ul>
                  <li><b>Affordable Housing:</b> Partners with companies like Nibbi/Baines Group on marketing and outreach for affordable housing projects.</li>
                  <li><b>Community Education:</b> Organizes housing workshops and forums focused on affordable housing access and resources for disenfranchised communities.</li>
                  <li><b>Economic Justice:</b> Advocates for policies that support both business development and housing affordability to create sustainable communities.</li>
              </ul>

              <h5 class="mt-4">Additional Leadership Roles</h5>
              <ul>
                  <li><b>Women's Leadership:</b> Founding president of the National Coalition of 100 Black Women, Inc., Oakland Bay Area Chapter.</li>
                  <li><b>Business Development:</b> Works with local and national partners to create opportunities for Black-owned businesses.</li>
                  <li><b>Community Building:</b> Builds partnerships between business, government, and community organizations to advance economic equity.</li>
              </ul>

              <p class="mt-4">Guided by her mother's wisdom - "As you are moving up, take someone with you" - Cathy has dedicated her career to creating pathways for economic opportunity and community empowerment. Her work demonstrates the powerful connection between business success, affordable housing, and community well-being.</p>`,
        imageExt: "jpg"
    },
    {
        name: "Genice Jacobs",
        id: "genice",
        title: "Anti-Trafficking Activist",
        shortBio: "15+ years of advocacy against human trafficking, founder of Abolitionist Mom and key contributor to California's trafficking prevention legislation.",
        bio: `<p>For over 15 years, Genice has worked tirelessly to raise awareness and address human trafficking in Alameda County and across California. She is a proven community leader, parent, and small business owner who has lived in Oakland for 24 years, dedicated to driving real change.</p>
              
              <h5 class="mt-4">Key Accomplishments & Initiatives</h5>
              <ul>
                  <li><b>Led Prevention Campaigns:</b> Focused on raising awareness and preventing human trafficking through various initiatives.</li>
                  <li><b>Policy Advocacy:</b> Supported policy efforts such as Prop 35 (Human Trafficking Initiative) and SB1165.</li>
                  <li><b>SB1165 Champion:</b> Instrumental in making California the first state to require sexual abuse and trafficking prevention education in public schools.</li>
                  <li><b>Youth Collaboration:</b> Collaborated with youth leaders on homelessness issues to expand support for survivors of trafficking.</li>
                  <li><b>Founder:</b> Founded Abolitionist Mom and OnPurpose Creative to launch advocacy campaigns against human trafficking.</li>
                  <li><b>Oakland Task Force Initiative:</b> Initiated the establishment of Oakland's Commercially Sexually Exploited Children Task Force.</li>
                  <li><b>Media and Awareness:</b> As Associate Producer for "California's Forgotten Children," she helped amplify survivor voices and shift public understanding of trafficking.</li>
                  <li><b>Awards:</b> Recognized with the Modern Day Abolitionist Award for Advocacy and the Ford Unsung Hero Award for her extensive work.</li>
              </ul>

              <h5 class="mt-4">Current Focus</h5>
              <p>Genice continues to collaborate with youth leaders on homelessness to expand support for survivors and help amplify survivor voices to shift public understanding of trafficking. Her work combines grassroots activism with policy advocacy to create lasting change in our communities.</p>

              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>BS in Business from San Diego State University (SDSU)</li>
                  <li>MA in Communication from University of Texas at Austin</li>
              </ul>`,
        imageExt: "JPG"
    },
    {
        name: "Ben Gould",
        id: "benGould",
        title: "Environmental Policy Consultant",
        shortBio: "Climate policy consultant and community organizer, leading successful campaigns for safer streets and better housing in Berkeley.",
        bio: `<p>Ben Gould has dedicated the past decade to community organizing and political advocacy in Berkeley, focusing on practical solutions to improve local governance and infrastructure. He is passionate about making government work effectively to address everyday needs and achieve progressive goals.</p>

              <h5 class="mt-4">Key Accomplishments</h5>
              <ul>
                  <li><b>Authored and Organized Winning Campaigns:</b> Successfully led the campaign for Berkeley's 2024 Measure FF, a citizen's initiative that will invest over $250 million in fixing Berkeley's streets and making them safer for walking and biking. This initiative addressed decades of neglect in city infrastructure.</li>
                  <li><b>Organized Mark Humbert's Election to City Council:</b> Played a key role in organizing the winning campaign for Mark Humbert's first election to Berkeley City Council in 2022.</li>
              </ul>

              <h5 class="mt-4">Leadership Roles</h5>
              <ul>
                  <li>Board member for Make Oakland Better Now!</li>
                  <li>Board member for Jewish Democratic Coalition of the Bay Area</li>
                  <li>Steering committee member for Jewish Coalition of Berkeley</li>
                  <li>Steering committee member for Berkeley Neighbors for Housing and Climate Action</li>
              </ul>

              <h5 class="mt-4">Professional Experience</h5>
              <p>Ben works as a climate policy consultant for local governments across different regions, advising them on developing and implementing effective climate action plans and sustainable policies. His work focuses on practical and impactful strategies to mitigate climate change at the local level.</p>

              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>Master's in Public Policy from UC Berkeley</li>
                  <li>Master's in Environmental Engineering from UC Berkeley</li>
              </ul>`,
        imageExt: "jpg"
    },
    {
        name: "Sam Gould",
        id: "samGould",
        title: "Housing and Safe Streets Advocate",
        shortBio: "Video game developer and former Bicycle and Pedestrian Advisory Committee member advocating for safe and accessible transportation.",
        bio: `<p>Sam is running with the Housing & Climate Progressive Democratic Slate to bring his expertise in safe streets advocacy and housing policy to the California Democratic Party. As a video game developer at Obsidian Entertainment and a highly engaged community advocate, he brings a unique perspective to addressing our region's challenges.</p>

              <h5 class="mt-4">Community Leadership and Advocacy</h5>
              <ul>
                  <li><b>Emeryville Bicycle and Pedestrian Advisory Committee:</b> Served on the committee and fought for safe and accessible transportation for people of all ages and abilities.</li>
                  <li><b>Multimodal Transportation Advocate:</b> Focused on projects that support transit, walking, and biking in Emeryville, promoting sustainable and accessible transportation options.</li>
                  <li><b>Vision Zero Commitment:</b> Strongly committed to Vision Zero principles, advocating for the elimination of traffic fatalities and serious injuries. Believes that no lives should be lost to traffic violence.</li>
                  <li><b>Housing Advocacy:</b> Active member of pro-housing organizations working to address the Bay Area's housing crisis through policy reform and community engagement.</li>
              </ul>

              <h5 class="mt-4">Professional Background</h5>
              <ul>
                  <li><b>Video Game Developer:</b> Works for Obsidian Entertainment, bringing a unique perspective from the tech industry to his community advocacy.</li>
                  <li><b>Focus on Data-Driven Solutions:</b> Advocates for data-driven solutions to address the housing crisis, drawing on his analytical skills and commitment to effective policy.</li>
                  <li><b>Project Management:</b> Experience managing complex technical projects, skills that translate directly to policy implementation and community organizing.</li>
              </ul>

              <h5 class="mt-4">Community Support and Recognition</h5>
              <p>As a candidate for Emeryville City Council, Sam received significant support from a wide range of community and political figures and organizations, including:</p>
              <ul>
                  <li><b>Elected Officials:</b> Current and former members of the Emeryville City Council</li>
                  <li><b>Labor Unions:</b> Alameda County Firefighters, Alameda Labor Council, demonstrating strong labor support</li>
                  <li><b>Pro-Housing Groups:</b> East Bay for Everyone and East Bay YIMBY, highlighting his commitment to housing advocacy</li>
              </ul>

              <p class="mt-4">Sam lives in Emeryville and is committed to making our communities more livable, sustainable, and inclusive through better transportation options and increased housing affordability.</p>`,
        imageExt: "jpg"
    },
    {
        name: "Sam Davis",
        id: "samDavis",
        title: "Oakland School Board President",
        shortBio: "Former teacher and parent activist, past President of the Oakland School Board, leading initiatives for college readiness, fiscal sustainability, and equitable facilities funding. Advocate for affordable housing and immigrant rights.",
        bio: `<p>Sam is a former teacher and parent activist who served on the Oakland School Board from 2021 to 2025, serving as President in 2024.</p>
              <h5 class="mt-4">Key Accomplishments as Oakland School Board President</h5>
              <ul>
                  <li><b>Renewed College and Career for All Initiative (Measure H):</b> Led the campaign to renew this critical initiative in Oakland high schools, ensuring all students have pathways to college and careers. Measure H passed in 2022 with an overwhelming 81% yes vote, demonstrating strong community support.</li>
                  <li><b>Advocated for Fiscal Sustainability:</b> Championed responsible budgeting practices to improve the financial health of the Oakland Unified School District.</li>
                  <li><b>Implemented Oakland Youth Vote:</b> Successfully advocated for the implementation of Oakland Youth Vote in 2024, empowering young people to participate in local elections.</li>
                  <li><b>Equitable Facilities Funding:</b> Ensured equitable allocation of OUSD facilities funds to renovate four schools in the flatlands, addressing broken promises from previous administrations and improving learning environments for underserved communities.</li>
              </ul>
              <h5 class="mt-4">Additional Priorities and Information</h5>
              <ul>
                  <li><b>Affordable Housing Advocate:</b> Promotes building affordable and workforce housing on unused school district land to combat housing insecurity in Oakland.</li>
                  <li><b>Immigrant Rights Champion:</b> Stands in solidarity with the immigrant community and opposes deportation efforts, drawing inspiration from his family's history of fleeing persecution. He participated in the "Let Our People Go" protests at Richmond jail, contributing to the end of the county's contract with ICE.</li>
                  <li><b>Education Equity and Inclusion:</b> A strong advocate for public education and inclusivity, including supporting the rights of trans youth and gender identity expression in schools and sports. Led the Measure H campaign and supported the implementation of Oakland Youth Vote.</li>
                  <li><b>Good Governance and Labor Partnerships:</b> Believes in responsible stewardship of public funds and values collaboration with labor unions as essential for effective governance.</li>
                  <li><b>Former ADEM Delegate:</b> Served as an ADEM delegate for Assembly District 18 in 2019-2020.</li>
              </ul>
              <h5 class="mt-4">Current Role</h5>
              <p>Currently works for the University of California on a project tracking the eligibility of students from across California for CSU and UC admission.</p>
              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>BA in Math from UC Berkeley</li>
                  <li>MS in Math from Cal State East Bay</li>
              </ul>`,
        imageExt: "jpg"
    },
    {
        name: "Lauren Wilson",
        id: "lauren",
        title: "Transportation and Urban Planning Policy Advocate",
        shortBio: "Former CA State Assembly rep in DC, SPUR & JVS policy boards, LGBTQ Victory Fund, advocating for urban planning & inclusive policies.",
        bio: `<p>Lauren Wilson has been involved professionally in policy and political work at the federal, state, and local level for the majority of her career, including representing the California State Assembly in Washington, DC for a decade.</p>

              <p>She is deeply engaged in local policy and community work, focusing on urban planning, workforce development, and LGBTQ+ rights. Lauren is running with the Housing & Climate Progressive Democratic Slate to bring her extensive policy experience to the California Democratic Party.</p>

              <h5 class="mt-4">Current Roles & Affiliations</h5>
              <ul>
                  <li><b>Urban Planning Policy:</b> Active member on the City Advisory Boards for Oakland and San Francisco for <a href="https://www.spur.org/" target="_blank">SPUR</a>, a leading urban planning policy organization in the Bay Area.</li>
                  <li><b>Workforce Development:</b> Policy Committee member for <a href="https://www.jvs.org/" target="_blank">Jewish Vocational Services (JVS)</a>, a workforce development nonprofit serving the Bay Area.</li>
                  <li><b>LGBTQ+ Advocacy:</b> Member of the <a href="https://victoryfund.org/our-work/campaign-board/" target="_blank">Victory Campaign Board</a>, the candidate endorsement arm of the <a href="https://victoryfund.org/" target="_blank">LGBTQ Victory Fund</a>.</li>
              </ul>

              <h5 class="mt-4">Professional Experience</h5>
              <ul>
                  <li><b>Federal Advocacy:</b> Represented the California State Assembly in Washington, DC for a decade, advocating for California's interests at the federal level.</li>
                  <li><b>Policy Development:</b> Extensive experience in policy and political work at the federal, state, and local levels throughout her career.</li>
                  <li><b>Focus Areas:</b> Specializes in transportation policy, urban planning, and inclusive community development.</li>
              </ul>

              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>Graduate of UC Berkeley</li>
                  <li>Master's of Public Policy from Georgetown University</li>
              </ul>

              <p class="mt-4">Lauren lives in Oakland with her spouse, their two small kids, and a big dog. She is committed to creating more livable, sustainable, and inclusive communities through effective policy-making and community engagement.</p>`,
        imageExt: "jpg"
    },
    {
        name: "Zac Bowling",
        id: "zac",
        title: "Housing Activist & Union Organizer",
        shortBio: "Progressive leader and digital advocate with 140,000+ followers, co-founder of East Bay YIMBY, and experienced ADEM delegate championing affordable housing and worker rights.",
        bio: `<p>Zac Bowling is a lifelong Democrat and progressive activist who has dedicated his career to fighting for affordable housing, worker rights, and sustainable communities. As a current AD 18 delegate and co-founder of East Bay YIMBY, he brings extensive experience in grassroots organizing and digital advocacy to the Democratic Party.</p>

              <h5 class="mt-4">Key Leadership Roles</h5>
              <ul>
                  <li><b>Housing Advocacy:</b> Co-founded East Bay YIMBY, leading campaigns for affordable housing and tenant protections across the East Bay.</li>
                  <li><b>Labor Organizing:</b> Founding member of Alphabet Workers Union, organizing tech workers for better working conditions and corporate accountability.</li>
                  <li><b>Democratic Party:</b> Serving as current AD 18 delegate for the past four years, advocating for progressive policies within the party.</li>
              </ul>

              <h5 class="mt-4">Current Positions</h5>
              <ul>
                  <li><b>City of Alameda:</b> Commissioner on the Open Government Commission, promoting transparency and accountability in local government.</li>
                  <li><b>Sierra Club:</b> Member of SF Bay Chapter's NAC Housing Committee, working at the intersection of housing and environmental policy.</li>
                  <li><b>Digital Advocacy:</b> Leading voice on housing and progressive issues with over 140,000 followers across TikTok and YouTube.</li>
              </ul>

              <h5 class="mt-4">Policy Priorities</h5>
              <ul>
                  <li><b>Housing Justice:</b> Advocating for policies to increase affordable housing supply and protect tenants' rights.</li>
                  <li><b>Worker Rights:</b> Fighting for better working conditions, fair wages, and union representation.</li>
                  <li><b>Environmental Sustainability:</b> Promoting sustainable urban development and climate-conscious housing policies.</li>
                  <li><b>Government Transparency:</b> Working to ensure open, accountable governance at all levels.</li>
              </ul>

              <p class="mt-4">With over a decade of experience in housing advocacy and a strong track record of building progressive coalitions, Zac continues to fight for a more equitable and sustainable future. His unique combination of grassroots organizing, digital advocacy, and policy expertise makes him an effective voice for progressive change in the Democratic Party.</p>`,
        imageExt: "webp"
    },
    {
        name: "Bobbi Lopez",
        id: "bobbi",
        title: "Labor & Housing Policy Director",
        shortBio: "Progressive leader with 20+ years of experience in labor organizing, housing policy, and community advocacy, currently serving as Policy Director for SEIU Local 1021.",
        bio: `<p>Bobbi Lopez brings over two decades of experience fighting for working families, affordable housing, and progressive policies. As Policy Director for SEIU Local 1021, she leads initiatives that directly impact 60,000 workers across Northern California.</p>

              <h5 class="mt-4">Key Leadership Roles</h5>
              <ul>
                  <li><b>SEIU Local 1021:</b> As Policy Director, oversees policy initiatives affecting 60,000 workers across Northern California, focusing on worker rights, affordable housing, and economic justice.</li>
                  <li><b>Richmond Progressive Alliance:</b> Co-founder and steering committee member, helping build one of the Bay Area's most effective progressive political organizations.</li>
                  <li><b>Richmond Planning Commission:</b> Former Commissioner, where she championed equitable development and affordable housing policies.</li>
              </ul>

              <h5 class="mt-4">Policy Achievements</h5>
              <ul>
                  <li><b>Housing Justice:</b> Led successful campaigns for tenant protections and rent control measures across multiple Bay Area cities.</li>
                  <li><b>Labor Rights:</b> Negotiated groundbreaking labor agreements benefiting thousands of workers and their families.</li>
                  <li><b>Environmental Justice:</b> Advocated for policies addressing climate change while ensuring a just transition for workers.</li>
              </ul>

              <h5 class="mt-4">Community Impact</h5>
              <ul>
                  <li><b>Coalition Building:</b> Successfully built diverse coalitions between labor unions, housing advocates, and environmental groups.</li>
                  <li><b>Grassroots Organizing:</b> Trained and mentored numerous community organizers and activists.</li>
                  <li><b>Policy Development:</b> Authored and implemented progressive policies addressing housing affordability, worker protections, and environmental justice.</li>
              </ul>

              <p class="mt-4">Bobbi's track record demonstrates her commitment to building power for working families and creating more equitable communities. Her experience in both policy development and grassroots organizing makes her uniquely qualified to represent AD-18 in the Democratic Party.</p>`,
        imageExt: "jpeg"
    },
    {
        name: "Shawn Danino",
        id: "shawn",
        title: "Housing/Mobility Policymaker",
        shortBio: "Public servant and housing expert who has helped pass laws supporting working families and spearheaded affordable housing initiatives.",
        bio: `<p>Shawn is running with the Housing & Climate Progressive Democratic Slate to bring their expertise in housing policy and transportation to the California Democratic Party. As a disabled person who has personally struggled with housing costs in the Bay Area, they have dedicated their career to making our cities healthy, affordable, and accessible to all.</p>

              <h5 class="mt-4">Key Accomplishments</h5>
              <ul>
                  <li><b>Affordable Housing Fund:</b> Spearheaded a groundbreaking $100 million fund to build affordable backyard homes, increasing housing options in existing neighborhoods.</li>
                  <li><b>Oakland Housing Plan:</b> Collaborated with Oakland City staff to develop and approve an 8-year housing plan, setting the foundation for future affordable housing development.</li>
                  <li><b>State-Level Impact:</b> Worked at the State Housing Department, contributing to policies that support working families and increase housing accessibility.</li>
              </ul>

              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li><b>Policy Leadership:</b> Serves as policy manager for the City of San Jose, developing and implementing housing and transportation initiatives.</li>
                  <li><b>Transit Advocacy:</b> Board member of TransForm, a leading nonprofit advocating for sustainable and equitable transportation solutions.</li>
                  <li><b>Union Membership:</b> Active dues-paying union member, supporting workers' rights and labor initiatives.</li>
              </ul>

              <h5 class="mt-4">Areas of Focus</h5>
              <ul>
                  <li><b>Housing Affordability:</b> Developing innovative solutions to address the Bay Area's housing crisis, with a focus on equity and accessibility.</li>
                  <li><b>Transportation Access:</b> Working to improve public transit and mobility options for all residents, particularly those with disabilities.</li>
                  <li><b>Policy Innovation:</b> Using data-driven approaches to create effective housing and transportation policies.</li>
              </ul>

              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>Master's in Public Policy from University of Michigan</li>
                  <li>Master's in Information from University of Michigan</li>
              </ul>

              <p class="mt-4">Drawing from personal experience with housing insecurity and disability, Shawn brings both professional expertise and lived experience to their advocacy for more equitable, accessible, and affordable communities.</p>`,
        imageExt: "jpg"
    },
    {
        name: "Ashlee Jemmott",
        id: "ashlee",
        title: "Deputy Policy Analyst",
        shortBio: "Public policy expert and community leader with over 11 years of experience in youth development, mental health advocacy, and neighborhood engagement.",
        bio: `<p>Ashlee Jemmott brings extensive experience in community organizing, youth development, and public policy to her role as Deputy Policy Analyst for Oakland City Council. Her work focuses on creating positive behavioral health strategies and advancing social justice initiatives.</p>

              <h5 class="mt-4">Current Leadership Roles</h5>
              <ul>
                  <li><b>City Council Policy:</b> Serves as Deputy Policy Analyst for Oakland City Councilmember Zac Unger, focusing on community development and neighborhood engagement in Adams Point, Temescal, Bushrod, and Mosswood.</li>
                  <li><b>Mental Health Advocacy:</b> Member of Alameda County Mental Health Advisory Board, working to improve mental health services and access.</li>
                  <li><b>Budget Oversight:</b> Member of Budgetary Stakeholders Advisory Committee, ensuring responsible fiscal management and community input in budget decisions.</li>
              </ul>

              <h5 class="mt-4">Areas of Focus</h5>
              <ul>
                  <li><b>Youth Development:</b> Over 11 years of experience creating and implementing programs for youth empowerment and development.</li>
                  <li><b>Social Justice:</b> Dedicated to advancing equity and justice through policy and community engagement.</li>
                  <li><b>Mental Health:</b> Advocates for comprehensive mental health services and positive behavioral health strategies.</li>
                  <li><b>Neighborhood Engagement:</b> Works directly with diverse communities to address local needs and improve quality of life.</li>
              </ul>

              <h5 class="mt-4">Professional Development</h5>
              <ul>
                  <li><b>Education:</b> Master of Business Administration (MBA) from Mills College, bringing business acumen to public service.</li>
                  <li><b>Leadership:</b> Active member of Alpha Kappa Alpha Sorority, Incorporated, participating in community service and leadership development.</li>
                  <li><b>Policy Analysis:</b> Expertise in analyzing and developing policies that address community needs and promote social justice.</li>
              </ul>

              <p class="mt-4">Through her work in policy analysis, youth development, and community engagement, Ashlee demonstrates a deep commitment to creating positive change in Oakland's communities. Her combination of professional expertise and community involvement makes her an effective advocate for progressive policies and social justice.</p>`,
        imageExt: "png"
    },
    {
        name: "Arielle Fleisher",
        id: "arielle",
        title: "Transportation Policy Advisor",
        shortBio: "Former SPUR Transportation Policy Director, Bay Area Council Transportation Committee Co-Chair, and founder of Pandemic Moms Club.",
        bio: `<p>Arielle Fleisher is running with the Housing & Climate Progressive Democratic Slate to bring her expertise in transportation and urban planning to address the critical challenges of housing affordability and climate change in Assembly District 18. She is a policy strategist in public health, urban planning, and design thinking, dedicated to improving government practices through innovative approaches and collaborative problem solving.</p>

              <h5 class="mt-4">Professional Experience</h5>
              <ul>
                  <li><b>Current Role:</b> Co-Chair of the Bay Area Council's Transportation Committee, where she leads efforts to improve regional transportation coordination and accessibility.</li>
                  <li><b>SPUR Leadership:</b> As former Transportation Policy Director, she worked extensively to enhance and better integrate the Bay Area's transportation system.</li>
                  <li><b>SFMTA Experience:</b> Former Planning Analyst, contributing to San Francisco's transportation planning and policy development.</li>
                  <li><b>Policy Impact:</b> Her advocacy has delivered concrete results:
                      <ul>
                          <li>Streamlining fares across transit systems</li>
                          <li>Improving signage and wayfinding at stations</li>
                          <li>Advocating for upgraded streets that are safer for everyone</li>
                          <li>Developing innovative solutions for regional transportation challenges</li>
                      </ul>
                  </li>
              </ul>

              <h5 class="mt-4">Community Engagement & Leadership</h5>
              <ul>
                  <li><b>Pandemic Moms Club:</b> Founded and grew this vital network to support over 200 local moms with resources, advice, and community connection during challenging times.</li>
                  <li><b>Local Voice:</b> Regular columnist for Splash Pad News, the newsletter for the Grand/Lake neighborhood, where she writes about transportation, urban planning, and community issues.</li>
                  <li><b>Neighborhood Leadership:</b> Active member of the Grand Lake Neighborhood Council, working to improve local quality of life and community engagement.</li>
              </ul>

              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>Master's in Urban Planning from University of Michigan</li>
                  <li>Master's in Public Health from University of Michigan</li>
              </ul>

              <p class="mt-4">Based in Oakland, Arielle can often be found biking around with her husband and two small kids, experiencing firsthand the importance of safe, accessible, and sustainable transportation options for families.</p>`,
        imageExt: "png"
    }
];

// Initialize candidates section
function initializeCandidates() {
    const candidateCards = document.getElementById('candidateCards');
    const modalsContainer = document.getElementById('candidateModals');

    if (!candidateCards || !modalsContainer) {
        console.error('Required DOM elements not found');
        return;
    }

    // Define the desired order of candidates
    const orderedCandidates = [
        candidates.find(c => c.name === "Nate Hanson"),
        candidates.find(c => c.name === "Regina Chagolla"),
        candidates.find(c => c.name === "Cathy Adams"),
        candidates.find(c => c.name === "Genice Jacobs"),
        candidates.find(c => c.name === "Ben Gould"),
        candidates.find(c => c.name === "Sam Gould"),
        candidates.find(c => c.name === "Sam Davis"),
        candidates.find(c => c.name === "Lauren Wilson"),
        candidates.find(c => c.name === "Zac Bowling"),
        candidates.find(c => c.name === "Bobbi Lopez"),
        candidates.find(c => c.name === "Shawn Danino"),
        candidates.find(c => c.name === "Ashlee Jemmott"),
        candidates.find(c => c.name === "Arielle Fleisher")
    ];

    // Add all candidate cards in the specified order
    orderedCandidates.forEach(candidate => {
        if (candidate) {
            candidateCards.innerHTML += createCandidateCard(candidate);
            modalsContainer.innerHTML += createCandidateModal(candidate);
        }
    });
}

// Load candidates when the page is ready
document.addEventListener('DOMContentLoaded', initializeCandidates); 