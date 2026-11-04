export interface LegalResource {
  title: string;
  url: string;
  displayUrl: string;
  category: string;
  description: string;
}

export const EXTERNAL_RESOURCES: LegalResource[] = [
  {
    title: 'Department of Fair Employment and Housing (DFEH)',
    url: 'http://www.dfeh.ca.gov/',
    displayUrl: 'www.dfeh.ca.gov',
    category: 'California State Agency',
    description:
      'California agency enforcing state civil rights laws protecting employees against unlawful workplace discrimination, sexual harassment, retaliation, and disability bias.'
  },
  {
    title: "Workers' Compensation Central",
    url: 'http://www.workcompcentral.com/',
    displayUrl: 'www.workcompcentral.com',
    category: 'Industry Intelligence & News',
    description:
      'The nation’s foremost daily legal publication and education provider covering California workers’ compensation case decisions, legislative shifts, and judicial rulings.'
  },
  {
    title: 'Department of Industrial Relations (DIR)',
    url: 'http://www.dir.ca.gov/',
    displayUrl: 'www.dir.ca.gov',
    category: 'California State Department',
    description:
      'The umbrella California governmental body responsible for enforcing labor laws, workplace safety (Cal/OSHA), and fair administration of workers’ compensation benefits.'
  },
  {
    title: 'United States Department of Labor (DOL)',
    url: 'http://www.dol.gov/',
    displayUrl: 'www.dol.gov',
    category: 'Federal Department',
    description:
      'Federal department that fosters, promotes, and develops the welfare of the wage earners, job seekers, and retirees of the United States, advancing occupational safety and fair labor standards.'
  },
  {
    title: 'Employment Development Department (EDD)',
    url: 'https://edd.ca.gov/',
    displayUrl: 'www.edd.ca.gov',
    category: 'State Benefit Administration',
    description:
      'One of the largest state departments, administering California’s State Disability Insurance (SDI), Paid Family Leave, and unemployment benefit programs.'
  },
  {
    title: 'Get Records',
    url: 'http://www.getrecords.com/',
    displayUrl: 'www.getrecords.com',
    category: 'Litigation Support & Subpoena Services',
    description:
      'Premier electronic medical, employment, and insurance records retrieval service dedicated to streamlining evidence collection for legal professionals.'
  },
  {
    title: 'California Law Database',
    url: 'http://leginfo.ca.gov/',
    displayUrl: 'www.leginfo.ca.gov',
    category: 'Statutory Research & Code Archive',
    description:
      'Official California legislative database offering full public text of California Labor Code statutes, session laws, and constitutional provisions.'
  },
  {
    title: "California Applicants' Attorneys Association (CAAA)",
    url: 'http://www.caaa.org/',
    displayUrl: 'www.caaa.org',
    category: 'Advocacy & Legal Association',
    description:
      'The leading statewide bar organization representing injured workers and their counsel, providing continuing education, judicial amicus advocacy, and legislative lobbying.'
  }
];

export const MILEAGE_FORM_DOCX_URL =
  'https://s3.amazonaws.com/law-media/uploads/2213/171216/original/i_and_a_mileageform2020.docx?1640218987';

